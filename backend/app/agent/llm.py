from typing import Any
import requests
from langchain_core.language_models.chat_models import BaseChatModel
from langchain_core.messages import BaseMessage, AIMessage
from langchain_core.outputs import ChatResult, ChatGeneration
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

        return ChatResult(generations=[ChatGeneration(message=AIMessage(content=response_text))])


def _to_chat_messages(messages: list[BaseMessage]) -> list[dict[str, str]]:
    role_map = {
        "human": "user",
        "ai": "assistant",
        "system": "system",
    }
    out: list[dict[str, str]] = []
    for message in messages:
        role = role_map.get(getattr(message, "type", "human"), "user")
        out.append({"role": role, "content": str(message.content)})
    return out


class DeepSeekChatModel(BaseChatModel):
    model_name: str = settings.DEEPSEEK_MODEL

    @property
    def _llm_type(self) -> str:
        return "deepseek_chat"

    def _generate(
        self,
        messages: list[BaseMessage],
        stop: list[str] | None = None,
        run_manager: Any | None = None,
        **kwargs: Any,
    ) -> Any:
        try:
            response = requests.post(
                "https://api.deepseek.com/chat/completions",
                headers={
                    "Authorization": f"Bearer {settings.DEEPSEEK_API_KEY}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": self.model_name,
                    "messages": _to_chat_messages(messages),
                    "temperature": 0.4,
                },
                timeout=20,
            )
            response.raise_for_status()
            payload = response.json()
            content = payload["choices"][0]["message"]["content"]
            return ChatResult(generations=[ChatGeneration(message=AIMessage(content=content))])
        except Exception as exc:
            fallback = (
                "I could not reach the configured AI provider right now. "
                "Please try again in a moment."
            )
            return ChatResult(generations=[ChatGeneration(message=AIMessage(content=f"{fallback} ({str(exc)})"))])


class HuggingFaceChatModel(BaseChatModel):
    model_name: str = settings.HUGGINGFACE_MODEL

    @property
    def _llm_type(self) -> str:
        return "huggingface_inference"

    def _generate(
        self,
        messages: list[BaseMessage],
        stop: list[str] | None = None,
        run_manager: Any | None = None,
        **kwargs: Any,
    ) -> Any:
        try:
            prompt_lines = []
            for message in _to_chat_messages(messages):
                prompt_lines.append(f"{message['role']}: {message['content']}")
            prompt_lines.append("assistant:")
            prompt = "\n".join(prompt_lines)

            response = requests.post(
                f"https://api-inference.huggingface.co/models/{self.model_name}",
                headers={
                    "Authorization": f"Bearer {settings.HUGGINGFACE_API_KEY}",
                    "Content-Type": "application/json",
                },
                json={
                    "inputs": prompt,
                    "parameters": {"max_new_tokens": 220, "temperature": 0.4},
                },
                timeout=30,
            )
            response.raise_for_status()
            payload = response.json()

            if isinstance(payload, list) and payload:
                generated_text = payload[0].get("generated_text", "")
            elif isinstance(payload, dict):
                generated_text = payload.get("generated_text", "")
            else:
                generated_text = ""

            if generated_text.startswith(prompt):
                generated_text = generated_text[len(prompt):].strip()

            content = generated_text.strip() or "I could not generate a response for that request."
            return ChatResult(generations=[ChatGeneration(message=AIMessage(content=content))])
        except Exception as exc:
            fallback = (
                "I could not reach the configured AI provider right now. "
                "Please try again in a moment."
            )
            return ChatResult(generations=[ChatGeneration(message=AIMessage(content=f"{fallback} ({str(exc)})"))])

def get_llm() -> BaseChatModel:
    """
    Factory function to retrieve the active LLM.
    Will route to HuggingFace or DeepSeek when keys are provided in .env
    """
    if settings.DEEPSEEK_API_KEY:
        return DeepSeekChatModel()
    elif settings.HUGGINGFACE_API_KEY:
        return HuggingFaceChatModel()

    return PlaceholderLLM()
