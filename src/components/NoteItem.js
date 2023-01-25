import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/index";
import PropTypes from "prop-types";

function NoteItem({ id, title, body, createdAt }) {
  return (
    <>
      <article className="note-item">
        <Link to={`/notes/${id}`}>
          <h3 className="note-item__title">{title}</h3>
        </Link>
        <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </article>
    </>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default NoteItem;
