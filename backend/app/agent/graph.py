from typing import TypedDict, Annotated, Sequence
from langchain_core.messages import BaseMessage, HumanMessage, AIMessage
from langgraph.graph import StateGraph, START, END
from app.agent.llm import get_llm
import operator

# The state keeps track of the conversation
class AgentState(TypedDict):
    messages: Annotated[Sequence[BaseMessage], operator.add]
    user_context: str

# Define nodes
def triage_node(state: AgentState):
    """Determine intent (Logging, Support, or Query) - Placeholder logic"""
    llm = get_llm()
    # In a real app, this node might route to different specialized agents.
    # For now, it passes straight to the main response.
    return {"messages": []}

def response_node(state: AgentState):
    """Generate empathetic AI response using context"""
    llm = get_llm()
    
    # Inject user context into the LLM
    context_msg = f"User Context: {state.get('user_context', 'No context')}"
    messages_to_send = state["messages"]
    
    # Generate the response
    response = llm.invoke(messages_to_send)
    return {"messages": [response]}

# Build the Graph
workflow = StateGraph(AgentState)

workflow.add_node("triage", triage_node)
workflow.add_node("respond", response_node)

workflow.add_edge(START, "triage")
workflow.add_edge("triage", "respond")
workflow.add_edge("respond", END)

# Compile
rose_agent_app = workflow.compile()
