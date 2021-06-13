import React, { useState, useEffect } from "react";
import BookDataService from "../services/BookService";

const Book = props => {
  const initialBookState = {
    id: null,
    title: "",
    description: "",
    firstname: "",
    lastname: "",
    age : "",
    published: false
  };

  const [currentBook, setCurrentBook] = useState(initialBookState);
  const [message, setMessage] = useState("");

  const getBook = id => {
    BookDataService.get(id)
      .then(response => {
        setCurrentBook(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getBook(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentBook({ ...currentBook, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentBook.id,
      title: currentBook.title,
      description: currentBook.description,
      published: status
    };

    BookDataService.update(currentBook.id, data)
      .then(response => {
        setCurrentBook({ ...currentBook, published: status });
        console.log(response.data);
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateBook = () => {
    BookDataService.update(currentBook.id, currentBook)
      .then(response => {
        console.log(response.data);
        setMessage("The Book was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteBook = () => {
    BookDataService.remove(currentBook.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/Books");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentBook ? (
        <div className="edit-form">
          <h4>Book</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentBook.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentBook.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentBook.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentBook.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteBook}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateBook}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Book...</p>
        </div>
      )}
    </div>
  );
};

export default Book;
