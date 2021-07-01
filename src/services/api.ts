import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3080/api/",
});

let accessToken = 'aaabbbccc'
function getOptions() {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
    },
  };
  return options;
}

function errorResponse(error: any) {
  const { response } = error;
  let message = error;
  if (response) {
    const { data } = response;
    message = data.message;
  }
  return new Error(message);
}

export async function get(url: string, headers = {}): Promise<any> {
  try {
    const options = { ...getOptions(), ...headers };
    const { data } = await api.get(url, options);
    return data;
  } catch (error) {
    throw errorResponse(error);
  }
}

export async function post(url: string, params = {}, headers = {}): Promise<any> {
  try {
    const options = { ...getOptions(), ...headers };
    const { data } = await api.post(url, params, options);
    return data;
  } catch (error) {
    throw errorResponse(error);
  }
}

export async function put(url: string, params = {}, headers = {}): Promise<any> {
  try {
    const options = { ...getOptions(), ...headers };
    const { data } = await api.put(url, params, options);
    return data;
  } catch (error) {
    throw errorResponse(error);
  }
}
