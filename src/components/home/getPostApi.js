import axios from "axios";
const url = process.env.REACT_APP_URL;

export const getPost = async (setPost, id) => {
  try {
    const response = await axios.get(`${url}/post/getPost/${id}`, {
      headers: {
        "Content-type": "application/json",
      },
    });

    setPost(response.data.post);
  } catch (error) {}
};
