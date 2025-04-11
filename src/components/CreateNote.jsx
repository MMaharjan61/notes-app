import { useRef, useState } from "react";

const CreateNote = ({ setNotes }) => {
  const modalRef = useRef(null);
  const [{ title, category, content }, setForm] = useState({
    title: "",
    category: "",
    content: "",
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!title || !category || !content)
        return alert("Please fill in all fields");
      const note = {
        title: "First note",
        category: "Catagory 1",
        content: "Lalalalalalala",
      };
      setNotes((prev) => [note, ...prev]);
      setForm({ title: "", category: "", content: "" });
      modalRef.current.close();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={() => modalRef.current.showModal()}
          className="btn btn-soft"
        >
          Add Note
        </button>
      </div>
      <dialog id="modal-note" className="modal" ref={modalRef}>
        <div className="modal-box h-[500px]">
          <div className="modal-action justify-between mb-2">
            <h1 className="text-2xl text-center">Create a new note</h1>
            <form method="dialog">
              <button className="btn">&times;</button>
            </form>
          </div>
          <form className="gap-2" onSubmit={handleSubmit}>
            <div>
              <p className="text-black">Title</p>
            </div>
            <div>
              <input
                className="input input-bordered p-2 mb-4 w-full"
                placeholder="Enter a title"
                value={title}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="text-black">Category</p>
            </div>
            <div>
              <select
                className="select select-none p-2 mb-4 w-full"
                placeholder="Select a category"
                value={category}
                onChange={handleChange}
              >
                <option>Class</option>
                <option>Personal</option>
                <option>Research</option>
                <option>Work</option>
              </select>
            </div>
            <div>
              <p className="text-black">Content</p>
            </div>
            <div>
              <textarea
                className="textarea textarea-bordered p-2 mb-4 w-full"
                placeholder="Write your text here"
                value={content}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className="btn btn-neutral text-white">Create</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default CreateNote;
