import React from "react";
import NoteItem from "./NoteItem.js";
import PropTypes from "prop-types";
import HomePageAction from "./HomePageAction.js";
import NoteListEmpty from "./NoteListEmpty.js";

function NoteList({ notes }) {
  if (notes.length === 0) {
    return (
      <>
        <NoteListEmpty />
        <HomePageAction />
      </>
    );
  }
  return (
    <section className="notes-list">
      {notes.map((data) => {
        return <NoteItem {...data} key={data.id} />;
      })}
    </section>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteList;
