import React, { useState } from "react";
import BookDataService from "../services/BookService";


import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const Addbook = () => {
  const initialBookState = {
    id: null,
    title: "",
    description: "",
    published: false,
    firstname: "",
    lastname: ""

  };
  const [book, setbook] = useState(initialBookState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setbook({ ...book, [name]: value });
  };

  const savebook = () => {
    var data = {
      title: book.title,
      description: book.description,
      firstname: book.firstname,
      lastname: book.lastname
    };

    BookDataService.create(data)
      .then(response => {
        setbook({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
          firstname: response.data.firstname,
          lastname: response.data.lastname
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newbook = () => {
    setbook(initialBookState);
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
              placeholder="Book title"
              className="form-control"
              id="title"
              required
              value={book.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstname">Author Firstname</label>
            <input
              type="text"
              placeholder="Author Firstname"
              className="form-control"
              id="firstname"
              required
              value={book.firstname}
              onChange={handleInputChange}
              name="firstname"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Author Lastname</label>
            <input
              type="text"
              placeholder="Author Lastname"
              className="form-control"
              id="lastname"
              required
              value={book.lastname}
              onChange={handleInputChange}
              name="lastname"
            />
          </div>



          <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
             placeholder="Enter your Description here"
             className="form-control"
             id="description"
             required
             value={book.description}
             onChange={handleInputChange}
             name="description"


             >


          </textarea>
          </div>

          <Button onClick={savebook} color="primary">
            Submit
          </Button>
        </div>
      )}
    </div>
  );
};

export default Addbook;
