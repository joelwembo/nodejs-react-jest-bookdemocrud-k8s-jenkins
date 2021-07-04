import http from "../components/http/http-common";

// get all books
const getAll = () => {
  return http.get("/books");
};

// get a book by id
const get = (id) => {
  return http.get(`/books/${id}`);
};

// create a book
const create = (data) => {
  return http.post("/books", data);
};

// update a book
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

const findByFirstname = (firstname) => {
  return http.get(`/books/firstname/${firstname}`);
};

const bookservice = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
  findByFirstname
};

export default bookservice;
