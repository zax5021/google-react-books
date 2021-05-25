import { useState } from "react";
import { searchForBooks } from "../../util/googleBooksApi";
import API from "../../util/dbRoutes";
import Hero from "../Hero";
import BookList from "../BookList";
import SearchForm from "../SearchForm";
import Wrapper from "../Wrapper";

function SearchPage() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [booksLoading, setBooksLoading] = useState(false);

  const handleSearchFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const trimmedSearch = search.trim();
      if (!trimmedSearch || booksLoading) {
        return;
      }
      setBooksLoading(true);
      const books = await searchForBooks(trimmedSearch);
      setBooks(books || []);
      setBooksLoading(false);
    } catch (error) {
      setBooksLoading(false);
      console.error(error);
    }

    // get the search term
    // if search is empty do nothing
    // if search term has one letter
    // create url for google books api
    // if response update books with the results

    // Save Book (handleSaveBook)
    // get target book id from save button
    // get full book object from book id
    // await POST saveBook
  };
  const handleSaveBook = async (e) => {
    try {
      e.preventDefault();
      const id = e.target.value;
      const currentBook = books.filter((book) => book.id === id);
      const savedBook = currentBook[0];
      await API.saveBook(savedBook);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  //
  //

  return (
    <Wrapper>
      <Hero />
      <SearchForm
        search={search}
        onSearchChange={(e) => setSearch(e.target.value)}
        onSubmit={handleSearchFormSubmit}
        booksLoading={booksLoading}
      />
      <BookList books={books} handleSaveBook={handleSaveBook} />
    </Wrapper>
  );
}

export default SearchPage;
