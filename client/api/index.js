import axios from "axios";

export const createPost = async (data) => {
  console.log("posted");
  return await axios.post("http://localhost:5010/createnote/", data);
};
