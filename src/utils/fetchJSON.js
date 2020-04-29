const fetchJSON = async (url, { method = "get", body, headers, ...rest }) => {
  const response = await fetch(url, {
    method,
    body: body,
    headers,
    rest,
  });
  const data = await response.json();
  return data;
};

export default fetchJSON;
