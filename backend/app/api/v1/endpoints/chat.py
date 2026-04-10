from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from langchain_core.messages import HumanMessage
from app.agent.graph import rose_agent_app
import json

router = APIRouter()

@router.websocket("/stream")
async def websocket_chat_endpoint(websocket: WebSocket):
    await websocket.accept()
    # Basic conversation memory for the active websocket connection
    chat_history = []
    
    try:
        while True:
            data = await websocket.receive_text()
            
            # Simple ping/pong handler or parse JSON if complex
            try:
                payload = json.loads(data)
                user_msg = payload.get("message", "")
            except:
                user_msg = data
            
            if not user_msg:
                continue

            # Update local memory
            human_msg = HumanMessage(content=user_msg)
            chat_history.append(human_msg)
            
            # Run LangGraph Agent
            # Note: We send the whole history. LangGraph state will accumulate it.
            inputs = {"messages": chat_history, "user_context": "Cycle Day 14. High Energy."}
            
            resp_state = rose_agent_app.invoke(inputs)
            agent_response = resp_state["messages"][-1].content
            
            # Add AI response to local memory
            # LangGraph outputs an AIMessage at the end of the history
            chat_history.append(resp_state["messages"][-1])

            # Stream result back
            await websocket.send_json({
                "type": "message",
                "content": agent_response
            })
            
    except WebSocketDisconnect:
        print("Client disconnected from chat")
