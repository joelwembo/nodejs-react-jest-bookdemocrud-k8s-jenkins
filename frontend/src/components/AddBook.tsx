import React, { useState } from "react";
import BookDataService from "../services/BookService";

const Addbook = () => {
  const initialBookState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [book, setbook] = useState(initialbookState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setbook({ ...book, [name]: value });
  };

  const savebook = () => {
    var data = {
      title: book.title,
      description: book.description
    };

    bookDataService.create(data)
      .then(response => {
        setbook({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newbook = () => {
    setbook(initialbookState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newbook}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={book.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={book.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={savebook} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Addbook;
