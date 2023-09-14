import React from "react";

const notes = ({ notes }) => {
  return (
    <div>
      {notes.map((p) => (
        <div key={p._id} className="flex flex-row">
          <div className="bg-[#1b9486] text-black px-5">1</div>
          <div className="text-[#66FF66] mx-5">{p.content}</div>
        </div>
      ))}
    </div>
  );
};

export default notes;
