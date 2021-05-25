import Section from "../Section";

function SearchForm() {
  return (
    <Section title="Book Search">
      <form className="">
        <div className="form-group d-flex flex-column">
          <input
            className="form-control mt-4"
            type="text"
            placeholder="Enter Book Here"
            aria-label="Search"
            id="search"
          />
          <button
            className="btn btn-outline-primary mt-2 ml-auto px-4 "
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </Section>
  );
}

export default SearchForm;
