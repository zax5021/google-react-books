function BookCard({ book }) {
  const {
    title,
    authors,
    description,
    image,
    infoLink: link,
  } = book.volumeInfo;
  return (
    <div className="card mb-3">
      <div className="row align-items-center">
        <div className="col-md-2 mr-2 ml-2">
          <img
            src="http://books.google.com/books/content?id=yM-MPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            alt={`thumbnail of ${title}`}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{authors.join(", ")} </p>
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-end ">
              <a
                href={link}
                className="btn btn-primary mr-3 px-4"
                rel="noopener noreferrer"
                target="_blank"
              >
                View
              </a>
              <a href="#" className="btn btn-secondary px-4">
                Save
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
