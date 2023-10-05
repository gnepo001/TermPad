import axios from "axios";

export const createPost = async (data) => {
  console.log("posted");
  return await axios.post("http://localhost:5010/createnote/", data);
};

export const handleDeletion = async (data) => {
  return await axios.delete("http://localhost:5010/note/deleteNote");
};
