const request = require("supertest");

const { app, server } = require("./server");

describe("TEST server.js", () => {
  afterAll(async () => {
    server.close();
  });

  it("GET / route , should return message", async () => {
    return request(app)
      .get("/")
      .expect(200)
      .then(res => {
        // { msg: 'WORKING!!!' }
        expect(res.body).toMatchSnapshot();
      });
  });

  it("GET /book/:id , should return book where id=1", async () => {
    const id = 1;
    return request(app)
      .get(`/book/${id}`)
      .expect(200)
      .then(res => {
        // { id: 1, author: 'Author 1', price: 100, genre: 'SciFi' }
        expect(res.body).toMatchSnapshot();
      });
  });

 // anothor test expected to fail
  it("GET /book/:id , should return book where id=30", async () => {
    const id = 30;
    return request(app)
      .get(`/book/${id}`)
      .expect(200)
      .then(res => {
        // { id: 1, author: 'Author 1', Description -> price: 100, Description -> genre: 'SciFi' }
        expect(res.body).toMatchSnapshot();
      });
  });

  // anothor test expected to fail
   it("GET /book/:id , should return book where id=20", async () => {
     const id = 2;
     return request(app)
       .get(`/book/${id}`)
       .expect(200)
       .then(res => {
         // { id: 1, author: 'Author 1', Description -> price: 100, Description -> genre: 'SciFi' }
         expect(res.body).toMatchSnapshot();
       });
   });


  it("GET /book/:id , should return error message when book with the specified id is not found", async () => {
    const id = 100;
    return request(app)
      .get(`/book/${id}`)
      .expect(400)
      .then(res => {
        // { error: 'Book not found!' }
        expect(res.body).toMatchSnapshot();
      });
  });

  it("POST /book , should return the successfully inserted book object", async () => {
    const book = {
      id: "6",
      author: "Author 6",
      price: 100,
      genre: "Health"
    };

    return request(app)
      .post("/book")
      .send(book)
      .expect(200)
      .then(res => {
        // console.log(res.body);
        // { id: '6', author: 'Author 6', price: 100, genre: 'Health' }
        expect(res.body).toMatchSnapshot();
      });
  });

  it("POST /book , should return error if id is null", async () => {
    const book = {
      id: null,
      author: "Author 7",
      price: 100,
      genre: "Health"
    };

    return request(app)
      .post("/book")
      .send(book)
      .expect(400)
      .then(res => {
        // { error: 'Invalid params' }
        expect(res.body).toMatchSnapshot();
      });
  });

  it("POST /book , should return error if author is null", async () => {
    const book = {
      id: "8",
      author: null,
      price: 100,
      genre: "Health"
    };

    return request(app)
      .post("/book")
      .send(book)
      .expect(400)
      .then(res => {
        // { error: 'Invalid params' }
        expect(res.body).toMatchSnapshot();
      });
  });
});
