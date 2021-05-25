import axios from "axios";

const API = {
  getBooks: function () {
    return axios.get("/api/books");
  },

  saveBook: function (book) {
    return axios.post("/api/books", book);
  },

  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
};

export default API;
