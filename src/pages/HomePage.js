import React from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import HomePageAction from "../components/HomePageAction";
import { getActiveNotes } from "../utils/network-data";

function HomePage() {
  const [notes, setNotes] = React.useState([]);
  React.useEffect(() => {
    async function Isi() {
      const { data } = await getActiveNotes();
      setNotes(data);
    }
    Isi();
  }, []);
  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <SearchBar />
      <NoteList notes={notes} />
      <HomePageAction />
    </section>
  );
}

export default HomePage;
