import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCircleInfo,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const BooksTable = ({ books }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  return (
    <div className="bg-blue-600">
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">no</th>
            <th className="border border-slate-600 rounded-md">title</th>
            <th className="border border-slate-600 rounded-md max-md-hidden">
              author
            </th>
            <th className="border border-slate-600 rounded-md max-md-hidden">
              publishYear
            </th>
            <th className="border border-slate-600 rounded-md">Operation</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="h-8">
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.title}
              </td>
              <td className="border border-slate-600 rounded-md max-md-hidden">
                {book.author}
              </td>
              <td className="border border-slate-600 rounded-md max-md-hidden">
                {book.publishYear}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      className="text-2xl text-green-800 "
                    />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="text-2xl text-orange-600"
                    />
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="text-2xl text-black  rounded hover:bg-red-700"
                      onClick={() => setIsDeleteOpen(!isDeleteOpen)}
                    />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
