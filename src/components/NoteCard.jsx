const NoteCard = ({ note }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body h-56">
        <h2 className="card-title">{note.title}</h2>
        <p className="truncate text-wrap">{note.content}</p>
      </div>
    </div>
  );
};

export default NoteCard;
