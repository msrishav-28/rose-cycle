from typing import TypedDict, Annotated, Sequence
from langchain_core.messages import BaseMessage, AIMessage
from langgraph.graph import StateGraph, START, END
from app.agent.llm import get_llm
import operator


SAFETY_DISCLAIMER = (
    "This response is informational and not medical advice. "
    "For persistent or severe symptoms, consult a qualified healthcare professional."
)


def apply_medical_guardrail(text: str) -> str:
    """Apply lightweight safety post-processing to generated assistant text."""
    lowered = text.lower()
    blocked_phrases = [
        "you have",
        "you are diagnosed",
        "take this medication",
        "start medication",
        "this confirms",
    ]

    if any(phrase in lowered for phrase in blocked_phrases):
        text = (
            "I can help you track patterns in your logged data, but I cannot diagnose conditions "
            "or recommend treatment."
        )

    if "not medical advice" not in text.lower():
        text = f"{text}\n\n{SAFETY_DISCLAIMER}"

    return text

# The state keeps track of the conversation
class AgentState(TypedDict):
    messages: Annotated[Sequence[BaseMessage], operator.add]
    user_context: str

# Define nodes
def triage_node(state: AgentState):
    """Determine intent (Logging, Support, or Query) - Placeholder logic"""
    # In a real app, this node might route to different specialized agents.
    # For now, it passes straight to the main response.
    return {"messages": []}

def response_node(state: AgentState):
    """Generate empathetic AI response using context"""
    llm = get_llm()

    messages_to_send = state["messages"]
    
    # Generate the response
    response = llm.invoke(messages_to_send)
    safe_content = apply_medical_guardrail(str(response.content))
    return {"messages": [AIMessage(content=safe_content)]}

# Build the Graph
workflow = StateGraph(AgentState)

workflow.add_node("triage", triage_node)
workflow.add_node("respond", response_node)

workflow.add_edge(START, "triage")
workflow.add_edge("triage", "respond")
workflow.add_edge("respond", END)

# Compile
rose_agent_app = workflow.compile()
