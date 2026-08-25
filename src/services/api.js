const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function getRequest(url) {
  const response = await fetch(`${API_BASE_URL}${url}`);

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

async function postRequest(url, data) {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

export async function getWebsite() {
  return getRequest("/api/Website");
}

export async function getServices() {
  return getRequest("/api/Services");
}

export async function getCompletedProjects() {
  return getRequest("/api/Projects/completed");
}

export async function getOngoingProjects() {
  return getRequest("/api/Projects/ongoing");
}

export async function submitContact(contactRequest) {
  return postRequest("/api/Contact", contactRequest);
}

export { API_BASE_URL };