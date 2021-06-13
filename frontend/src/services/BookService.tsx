import http from "../components/http/http-common";

const getAll = () => {
  return http.get("/books");
};

const get = (id) => {
  return http.get(`/books/${id}`);
};

const create = (data) => {
  return http.post("/books", data);
};

const update = (id, data) => {
  return http.put(`/books/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/books/${id}`);
};

const removeAll = () => {
  return http.delete(`/books`);
};

const findByTitle = (title) => {
  return http.get(`/books?title=${title}`);
};

const bookservice = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default bookservice;
