import React from "react";
import { deleteNote, getActiveNotes, getNote } from "../utils/network-data";
import { useParams } from "react-router-dom";
import DetailList from "../components/DetailList";

function DetailPage() {
  const [note, setNote] = React.useState({
    id: "",
    title: "",
    createdAt: "",
    body: "",
  });
  const { idUrl } = useParams();
  React.useEffect(() => {
    async function isi() {
      const { data } = await getNote(idUrl);
      setNote(data);
    }
    isi();
  }, [idUrl]);

  async function onDelete(idUrl) {
    deleteNote(idUrl);
    const { data } = await getActiveNotes();
    setNote(data);
  }

  return (
    <section className="detail-page">
      <DetailList {...note} DeleteNote={onDelete} />
    </section>
  );
}

export default DetailPage;
