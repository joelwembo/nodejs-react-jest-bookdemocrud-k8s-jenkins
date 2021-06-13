import React, { useState, useEffect } from "react";
import BookDataService from "../services/BookService";


import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

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
      firstname: currentBook.firstname,
      lastname : currentBook.lastname,
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
          <h4>Book Details</h4>
        
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
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={currentBook.firstname}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={currentBook.lastname}
                onChange={handleInputChange}
              />
            </div>
            

          <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea 
             placeholder="Enter your Descript here"
             className="form-control"
             id="description"
             required
             value={currentBook.description}
             onChange={handleInputChange}
             name="description"
          
          
             >


          </textarea>
          </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentBook.published ? "Published" : "Pending"}
            </div>
         



          {currentBook.published ? (
            <Button className="btn"
              color="primary"
              onClick={() => updatePublished(false)}
            >
                UnPublish 
            </Button> 
          ) : (
            <Button
              color="warning"
             
              onClick={() => updatePublished(true)}
            >
              {  ''} Publish 
            </Button>
          )} 
          <Button color="danger" onClick={deleteBook}>
            Delete
          </Button>

          <Button
            type="submit"
            color="primary"
            
            onClick={updateBook}
          >
            Update  
          </Button>
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
