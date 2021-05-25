import BookCard from "../BookCard";
import Section from "../Section";

function BookList({ books }) {
  return (
    <Section title="Results">
      {books.length > 0 ? (
        books.map((book) => <BookCard key={book.id} book={book} />)
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
