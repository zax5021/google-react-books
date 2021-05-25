import React, { useState, useEffect } from "react";
import BookList from "../../components/BookList";
import API from "../../util/dbRoutes";
import Wrapper from "../Wrapper";
import Hero from "../Hero";

function SavedPage() {
  const [books, setBooks] = useState([]);

  const getSavedBooks = () => {
    API.getBooks().then((res) => setBooks(res.data || []));
  };

  useEffect(getSavedBooks, []);

  const handleDeleteBook = async (e) => {
    try {
      e.preventDefault();
      const id = e.target.value;
      await API.deleteBook(id);
      getSavedBooks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <Hero />
      <BookList books={books} handleDeleteBook={handleDeleteBook} />
    </Wrapper>
  );
}

export default SavedPage;
