import axios from "axios";

const url = process.env.REACT_APP_URL;

export const addNewPost = async (
  post,
  setError,
  setProcessingMsg,
  setSuccessMsg
) => {
  setProcessingMsg("Loading...");
  try {
    await axios.post(`${url}/post/add`, JSON.stringify(post), {
      headers: {
        "Content-type": "application/json",
      },
    });

    setProcessingMsg("");

    setSuccessMsg("Post Added Successfully !");

    setTimeout(() => window.location.reload(), 1000);
  } catch (error) {
    setProcessingMsg("");
    setError((prevState) => ({
      ...prevState,
      errorObj: error.response.data.errors,
    }));
  }
};
