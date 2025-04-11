export const loadNotes = () => {
  const storedNotes = localStorage.getItem("notes");
  return storedNotes ? JSON.parse(storedNotes) : [];
};

export const saveNote = (entry) => {
  const notes = loadNotes();
  const updatedNotes = [...notes, entry];
  localStorage.setItem("notes", JSON.stringify(updatedNotes));
};
