import React from "react";

const notes = ({ notes }) => {
  return (
    <div>
      {notes.map((p) => (
        <div key={p._id}>{p.content}</div>
      ))}
    </div>
  );
};

export default notes;
