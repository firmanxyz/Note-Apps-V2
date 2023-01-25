import React from "react";
import SearchBar from "../components/SearchBar";
import NoteListEmpty from "../components/NoteListEmpty";

function ArchivePage() {
  return (
    <section className="archives-page">
      <h2>Catatan Arsip</h2>
      <SearchBar />
      <NoteListEmpty />
    </section>
  );
}

export default ArchivePage;
