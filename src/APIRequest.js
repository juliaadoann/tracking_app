export default async function apiRequest(endpoint, method = 'GET', body = null) {
  
  if (method == 'GET' && body != null) {
    console.error("cannot send a body in a get request");
  }

  const req = {
    method: method,
    'Content-Type': 'application/json',
    body: body ? JSON.stringify(body) : null
  };

  return await (await fetch("http://localhost:5001/api/" + endpoint, req)).json();
}