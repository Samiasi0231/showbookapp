import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faBookOpen,
  faCircleUser,
  faPenToSquare,
  faCircleInfo,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import BoookModal from "./BookModal";

const Singlecard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div
        key={book._id}
        className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
      >
        <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <FontAwesomeIcon
            icon={faBookOpen}
            className="text-red-300 text-2xl"
          />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2 ">
          <FontAwesomeIcon
            icon={faCircleUser}
            className="text-red-300 text-2xl"
          />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
          <FontAwesomeIcon
            icon={faEye}
            className="text-3xl text-blue-800
         hover:text-black cursor-pointer"
            onClick={() => setShowModal(true)}
          />
          <Link to={`/books/details/${book._id}`}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-green-800 hover:text-black text-2xl"
            />
          </Link>

          <Link to={`/books/edit/${book._id}`}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="text-yellow-600 hover:text-black text-2xl"
            />
          </Link>

          <Link to={`/books/delete/${book._id}`}>
            <FontAwesomeIcon
              icon={faTrashCan}
              className="text-red-600 hover:text-black text-2xl"
            />
          </Link>
        </div>
        {showModal && (
          <BoookModal book={book} onClose={() => setShowModal(false)} />
        )}
      </div>
    </div>
  );
};

export default Singlecard;
