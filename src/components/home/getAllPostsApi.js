import axios from "axios";
const url = process.env.REACT_APP_URL;

export const getAllPosts = async (setPost) => {
  try {
    const response = await axios.get(`${url}/post/getAll`, {
      headers: {
        "Content-type": "application/json",
      },
    });

    setPost(response.data.posts);
  } catch (error) {}
};
