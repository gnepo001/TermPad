import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router.js";

import { createPost } from "../api/index.js";
import { Notes } from "../components/index.js";

const index = ({ posts }) => {
  const router = useRouter();

  const [form, setForm] = useState({
    content: "",
    author: "test",
  });

  const handleSumbit = (e) => {
    createPost(form);
    router.reload();
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-[#66FF66]">TERMINAL v0.1</h1>
      <p className="text-[#66FF66] mb-5">
        Testing to make sure everything is working, had trouble with new nextjs
        app verions
      </p>
      <p className="text-[#66FF66] mb-5">Worksheet 1</p>
      <div>
        <div className="flex flex-row bg-[#1b9486] text-black px-5">Notes</div>
        <Notes notes={posts} />
      </div>

      <form
        onSubmit={handleSumbit}
        className="bg-black mt-10"
        autoComplete="off"
      >
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
        <button className="ml-5 text-[#66FF66] b-r-1">Create Todo</button>
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
