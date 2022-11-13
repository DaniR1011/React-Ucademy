import axios from "axios";

const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const API = axios.create({
  baseURL: "http://localhost:8080/alumnos",
  timeout: 3000,
  headers: APIHeaders,
});

const APICursos = axios.create({
  baseURL: "http://localhost:8080/cursos",
  timeout: 3000,
  headers: APIHeaders,
});

export const getAlumns = async () => {
  const { data } = await API.get();
  return data;
};

export const getAlumn = async (id) => {
  const { data } = await API.get(`/${id}`);
  return data;
};

export const getCursos = async () => {
  const { data } = await APICursos.get();
  return data;
};

export const postAlumn = async (item) => {
  const res = await API.post(API.baseURL, item);
  return res;
};