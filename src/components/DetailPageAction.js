import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function DetailPageAction({ DeleteNote, id }) {
  return (
    <div className="detail-page__action">
      <Link to="/">
        <button
          className="action"
          type="button"
          title="hapus"
          onClick={() => {
            DeleteNote(id);
          }}
        >
          <FaTrash />
        </button>
      </Link>
    </div>
  );
}

DetailPageAction.propTypes = {
  DeleteNote: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DetailPageAction;
