import axios from "axios";
const url = process.env.REACT_APP_URL;

export const getAllComments = async (id, setPost) => {
  try {
    const response = await axios.get(`${url}/comment/${id}/getAll`, {
      headers: {
        "Content-type": "application/json",
      },
    });

    setPost(response.data.comments);
  } catch (error) {}
};
