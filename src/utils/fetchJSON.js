const fetchJSON = async (url, { method = "get", headers }) => {
  const response = await fetch(url, {
    method,
    headers
  });
  const data = await response.json();
  return data;
}

export default fetchJSON;