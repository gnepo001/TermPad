import React from "react";

const notes = ({ notes }) => {
  return (
    <div>
      {notes.map((p, num = 0) => (
        <div key={p._id} className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="w-12">
              <div className="bg-[#1b9486] text-black text-center">
                {num + 1}
              </div>
            </div>
            <div className="text-[#66FF66] mx-5">{p.content}</div>
          </div>
          <div>
            <button>X</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default notes;
