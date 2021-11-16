import React, { useRef, useState } from "react";

function AddTaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const deadlineRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      title,
      description,
      deadline: deadlineRef.current.valueAsDate,
      createdBy: "assistant FR",
      state: "pending",
    };
    addTask(task);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "#eee",
        width: "90%",
        margin: "auto",
        marginTop: "1em",
        padding: "1em",
        borderRadius: "1em",
      }}
    >
      <div
        className="form-group"
        style={{
          background: "#fff",
          padding: "0.5em",
          display: "flex",
          width: "90%",
          alignItems: "center",
        }}
      >
        <label
          htmlFor="intitule"
          style={{
            flex: 1,
          }}
        >
          Intitulé du ticket
        </label>
        <input
          style={{
            flex: 3,
          }}
          type="text"
          className="form-control"
          id="intitule"
          placeholder="Intitulé"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div
        className="form-group"
        style={{
          background: "#fff",
          padding: "0.5em",
          display: "flex",
          width: "90%",
        }}
      >
        <label
          htmlFor="exampleFormControlTextarea1"
          style={{
            flex: 1,
          }}
        >
          Description
        </label>
        <textarea
          style={{ flex: 3 }}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
      </div>
      <div
        className="form-group"
        style={{
          background: "#fff",
          padding: "0.5em",
          display: "flex",
          width: "90%",
        }}
      >
        <label style={{ flex: 1 }} htmlFor="intitule">
          Deadline
        </label>
        <input
          type="date"
          className="form-control"
          id="intitule"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          ref={deadlineRef}
          style={{ flex: 3 }}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Valider
      </button>
    </form>
  );
}

export default AddTaskForm;
