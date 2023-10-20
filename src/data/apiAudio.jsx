const API_URL = "http://localhost:9000";

export async function getData() {
  const res = await fetch(`${API_URL}/data`);
  if (!res.ok) throw Error("Failed getting menu");

  const  data  = await res.json();
  console.log("get data", data);
  return data;
}
