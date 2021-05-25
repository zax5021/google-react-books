import { useState } from "react";
import { searchForBooks } from "../../util/googleBooksApi";
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
    //
  };
  return (
    <Wrapper>
      <Hero />
      <SearchForm
        search={search}
        onSearchChange={(e) => setSearch(e.target.value)}
        onSubmit={handleSearchFormSubmit}
        booksLoading={booksLoading}
      />
      <BookList books={books} />
    </Wrapper>
  );
}

export default SearchPage;
