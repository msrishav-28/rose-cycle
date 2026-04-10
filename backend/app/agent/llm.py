from typing import Any
from pydantic import BaseModel
from langchain_core.language_models.chat_models import BaseChatModel
from langchain_core.messages import BaseMessage, AIMessage
from app.core.config import settings

class PlaceholderLLM(BaseChatModel):
    """
    A placeholder LLM that wraps around standard Langchain interfaces.
    This ensures that when API keys (DeepSeek, HuggingFace) are added, 
    the LangGraph agent architecture remains untouched.
    """
    model_name: str = "placeholder-echo-model"

    @property
    def _llm_type(self) -> str:
        return "placeholder_custom_llm"

    def _generate(self, messages: list[BaseMessage], stop: list[str] | None = None, run_manager: Any | None = None, **kwargs: Any) -> Any:
        # Just echo back the last message content to prove the graph works
        last_msg = messages[-1].content if messages else "Hello"
        response_text = f"Agentic Response: I received your message '{last_msg}'. This is a placeholder engine. Please configure HuggingFace or DeepSeek API Keys."
        
        from langchain_core.outputs import ChatResult, ChatGeneration
        return ChatResult(generations=[ChatGeneration(message=AIMessage(content=response_text))])

def get_llm() -> BaseChatModel:
    """
    Factory function to retrieve the active LLM.
    Will route to HuggingFace or DeepSeek when keys are provided in .env
    """
    if settings.DEEPSEEK_API_KEY:
        # Return DeepSeek LLM init (e.g. via ChatOpenAI client with base_url)
        pass 
    elif settings.HUGGINGFACE_API_KEY:
        # Return HuggingFaceEndpoint
        pass
    
    return PlaceholderLLM()
