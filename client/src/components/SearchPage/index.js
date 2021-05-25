import axios from "axios";
import { useState } from "react";
import Hero from "../Hero";
import BookList from "../BookList";
import SearchForm from "../SearchForm";
import Wrapper from "../Wrapper";

function SearchPage() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearchFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const trimmedSearch = search.trim();
      if (!trimmedSearch) {
        return;
      }
      const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${trimmedSearch}`;
      const res = await axios.get(searchUrl);
      setBooks(res.data.items || []);
    } catch (error) {}

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
      />
      <BookList books={books} />
    </Wrapper>
  );
}

export default SearchPage;
