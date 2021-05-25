import Section from "../Section";

function SearchForm({ search, onSearchChange, onSubmit, booksLoading }) {
  return (
    <Section title="Book Search">
      <form className="" onSubmit={onSubmit}>
        <div className="form-group d-flex flex-column">
          <input
            className="form-control mt-4"
            type="text"
            placeholder="Enter Book Here"
            aria-label="Search"
            id="search"
            value={search}
            onChange={onSearchChange}
            disabled={booksLoading}
          />
          <button
            className="btn btn-outline-primary mt-2 ml-auto px-4 "
            type="submit"
            disabled={booksLoading}
          >
            {booksLoading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm mr-2"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </>
            ) : (
              "Search"
            )}
          </button>
        </div>
      </form>
    </Section>
  );
}

export default SearchForm;
