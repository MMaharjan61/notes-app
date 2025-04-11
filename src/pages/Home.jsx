import { useEffect, useState } from "react";
import { loadNotes, saveNote } from "../components/Storage";
import CreateNote from "../components/CreateNote";
import NotesList from "../components/NotesList";

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savednotes = loadNotes();
    setNotes(savednotes);
  }, []);

  return (
    <>
      <NotesList notes={notes} />
      <CreateNote setNotes={setNotes} />
    </>
  );
};

export default Home;
