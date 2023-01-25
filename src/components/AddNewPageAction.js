import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AddNewPageAction({ AddNote }) {
  return (
    <div className="add-new-page__action">
      <Link to="/">
        <button
          className="action"
          type="button"
          title="simpan"
          onClick={AddNote}
        >
          <FaCheck />
        </button>
      </Link>
    </div>
  );
}

AddNewPageAction.propTypes = {
  AddNote: PropTypes.func.isRequired,
};

export default AddNewPageAction;
