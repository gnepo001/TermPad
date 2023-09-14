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
    createPost(form);
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-yellow-300">Testing</h1>
      <p className="text-yellow-200">
        Testing to make sure everything is working, had trouble with new nextjs
        app verions
      </p>
      <form onSubmit={handleSumbit}>
        <label>Note</label>
        <input
          required
          type="text"
          id="note"
          name="note"
          placeholder="note"
          //value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button>Create Note</button>
      </form>
      <div>
        <Notes notes={posts} />
      </div>
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
