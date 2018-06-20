import fetch from 'node-fetch';

global.fetch = require('node-fetch');
global.Headers = require('node-fetch').Headers;
global.Request = require('node-fetch').Request;

const baseUrl = process.env.BASE_URL || 'http://localhost:4000';

export function buildHeaders(token = false) {
  const headers = new global.Headers();

  headers.append('Content-Type', 'application/json');

  if (token) headers.append('Authorization', `${token}`);

  return headers;
}

export const api = async (url, params = {}, method = 'POST', token = false) => {
  console.log('api');
  const res = await fetch(`${baseUrl}${url}/`, {
    method,
    mode: 'cors',
    headers: buildHeaders(token.token),
    body: JSON.stringify(params),
  });
  console.log(res);
  if (!res.ok) throw new Error(res.status);

  return res.json();
};

export async function login(params, token) {
  const res = await api('/login', params, 'POST', token);
  console.log(res);
  return res.json();
}
