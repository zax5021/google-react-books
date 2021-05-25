function BookCard({
  id,
  title,
  authors,
  description,
  image,
  link,
  saveBtn,
  deleteBtn,
}) {
  return (
    <div className="card mb-3">
      <div className="row align-items-center">
        <div className="col-md-2 mr-2 ml-2">
          <img src={image} alt={`thumbnail of ${title}`} />
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
              {saveBtn && (
                <button
                  value={id}
                  className="btn btn-secondary px-4"
                  onClick={saveBtn}
                >
                  Save
                </button>
              )}
              {deleteBtn && (
                <button
                  value={id}
                  className="btn btn-danger px-4"
                  onClick={deleteBtn}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
