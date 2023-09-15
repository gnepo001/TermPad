import React, { useState } from "react";
import axios from "axios";

import { createPost } from "../api/index.js";
import { Notes } from "../components/index.js";

const index = ({ posts }) => {
  const [form, setForm] = useState({
    content: "",
    author: "test",
  });

  const handleSumbit = (e) => {
    e.preventDefault();
    createPost(form);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-[#66FF66]">TERMINAL</h1>
      <p className="text-yellow-200 mb-5">
        Testing to make sure everything is working, had trouble with new nextjs
        app verions
      </p>
      <div>
        <div className="flex flex-row bg-[#1b9486] text-black px-5">Notes</div>
        <Notes notes={posts} />
      </div>

      <form onSubmit={handleSumbit} className="bg-black mt-10">
        {/* <label>Note</label> */}
        <input
          required
          type="text"
          id="note"
          name="note"
          placeholder="user - input"
          className="text-[#66FF66] ml-5 bg-black"
          //value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button className="ml-5">Create Todo</button>
      </form>
    </div>
  );
};

export const getServerSideProps = async () => {
  const posts = await axios.get("http://localhost:5010/notes");
  return {
    props: {
      posts: posts.data,
    },
  };
};

export default index;
