import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTable, useFilters, useSortBy } from "react-table";

import BookDataService from "../services/BookService";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


const BooksList = (props) => {
  const [books, setBooks] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchFirstname, setSearchFirstname] = useState("");
  const booksRef = useRef();
  booksRef.current = books;


  // sorting and filtering
  const [filterInput, setFilterInput] = useState("");




  useEffect(() => {
    retrieveBooks();
  }, []);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const onChangeSearchFirstname = (e) => {
    const searchFirstname = e.target.value;
    setSearchFirstname(searchFirstname);
  }

  const retrieveBooks = () => {
    BookDataService.getAll()
      .then((response) => {
        setBooks(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveBooks();
  };

  const removeAllBooks = () => {
    BookDataService.removeAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    BookDataService.findByTitle(searchTitle)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // first by firstname
  const findByFirstname = () => {
    BookDataService.findByFirstname(searchFirstname)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };


  const openBook = (rowIndex) => {
    const id = booksRef.current[rowIndex].id;

    props.history.push("/Books/" + id);
  };

  const deleteBook = (rowIndex) => {
    const id = booksRef.current[rowIndex].id;

    BookDataService.remove(id)
      .then((response) => {
        props.history.push("/Books");

        let newBooks = [...booksRef.current];
        newBooks.splice(rowIndex, 1);

        setBooks(newBooks);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Firstname",
        accessor: "firstname",
      },
      {
        Header: "Lastname",
        accessor: "lastname",
      },
      {
        Header: "Status",
        accessor: "published",
        Cell: (props) => {
          return props.value ? "Published" : "Pending";
        },
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span onClick={() => openBook(rowIdx)}>
                <i className="far fa-edit action mr-2"></i>
              </span>

              <span onClick={() => deleteBook(rowIdx)}>
                <i className="fas fa-trash action"></i>
              </span>
            </div>
          );
        },
      },
    ],
    []
  );


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter
  } = useTable({
    columns,
    data: books,
    
  },
    useFilters,
    useSortBy
  
  );

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={findByTitle}
            >
              Search By Title
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by firstname"
            value={searchFirstname}
            onChange={onChangeSearchFirstname}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={findByFirstname}
            >
              Search By First Name
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-12 list">
        <table
          
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                    <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={
                      column.isSorted
                        ? column.isSortedDesc
                          ? "sort-desc"
                          : "sort-asc"
                        : ""
                    }
                    >
                    {column.render("Header")}
                    </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>







      <div className="col-md-8">
        <button className="btn btn-sm btn-warning" onClick={removeAllBooks}>
          Delete All Rows
        </button>
      </div>
    </div>
  );
};

export default BooksList;
