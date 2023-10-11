import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router.js";

const notes = ({ notes }) => {
  const router = useRouter();

  const handleDeletion = async (id) => {
    router.reload();
    return await axios.delete(`http://localhost:5010/notes/${id}`);
  };

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
          <div className="flex flex-row">
            <button className="mx-5">...</button>
            <button onClick={() => handleDeletion(p._id)}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default notes;
