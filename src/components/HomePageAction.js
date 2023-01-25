import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomePageAction() {
  return (
    <div className="homepage__action">
      <Link to="/add">
        <button className="action" type="button" title="Tambah">
          <FaPlus />
        </button>
      </Link>
    </div>
  );
}

export default HomePageAction;
