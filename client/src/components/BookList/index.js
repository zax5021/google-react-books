import BookCard from "../BookCard";
import Section from "../Section";

function BookList({ books, handleSaveBook, handleDeleteBook }) {
  return (
    <Section title="Results">
      {books.length > 0 ? (
        books.map((book) => (
          <BookCard
            {...book}
            saveBtn={handleSaveBook}
            deleteBtn={handleDeleteBook}
          />
        ))
      ) : (
        <p>
          No Results (if you can't think of anything, I recommend Harry
          Potter... it's a classic)
        </p>
      )}
    </Section>
  );
}

export default BookList;
