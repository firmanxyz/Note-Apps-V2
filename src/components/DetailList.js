import React from "react";
import { showFormattedDate } from "../utils/index";
import DetailPageAction from "./DetailPageAction";
import PropTypes from "prop-types";

function DetailList({ title, createdAt, body, DeleteNote, id }) {
  return (
    <>
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{body}</div>
      <DetailPageAction DeleteNote={DeleteNote} id={id} />
    </>
  );
}

DetailList.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  DeleteNote: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DetailList;
