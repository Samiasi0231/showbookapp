import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Docum/Spinner";
import BooksCard from "../Docum/BooksCard";
import BooksTable from "../Docum/BooksTable";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/api/getallbook")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link
          to="/books/create"
          className="text-sky-800 text-3xl relative mr-10 inline-block"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <FontAwesomeIcon
            icon={faFileCirclePlus}
            className="text-blue-500 cursor-pointer"
          />
          {showTooltip && (
            <p className="absolute text-sm  mt-1 p-2 mr-8 bg-white text-blue-500 rounded shadow">
              addbook
            </p>
          )}
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
