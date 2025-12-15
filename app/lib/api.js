export function getApiBase() {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8787";
}

export function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("ak_token");
}

export function setToken(token) {
  if (typeof window === "undefined") return;
  localStorage.setItem("ak_token", token);
}

export async function apiFetch(path, { method="GET", body, token } = {}) {
  const base = getApiBase();
  const headers = { "Content-Type": "application/json" };
  const t = token || getToken();
  if (t) headers["Authorization"] = `Bearer ${t}`;

  const res = await fetch(`${base}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const isJson = res.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await res.json() : await res.text();
  if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
  return data;
}
