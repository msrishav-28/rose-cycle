const httpBase = (import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000").replace(/\/$/, "");
const wsBase = (import.meta.env.VITE_WS_BASE_URL || httpBase.replace(/^http/i, "ws")).replace(/\/$/, "");

export const API_BASE_URL = `${httpBase}/api/v1`;

export function buildChatWsUrl(token) {
  const query = token ? `?token=${encodeURIComponent(token)}` : "";
  return `${wsBase}/api/v1/chat/stream${query}`;
}
