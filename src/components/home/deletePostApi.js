import axios from "axios";
const url = process.env.REACT_APP_URL;
export const deletePost = async (
  id,
  setSuccessMsg,
  setError,
  setProcessingMsg
) => {
  setProcessingMsg("Loading...");

  console.log(id);
  try {
    await axios.delete(`${url}/post/delete/${id}`, {
      headers: {
        "Content-type": "application/json",
      },
      // params: {
      //     id,
      // },
    });

    setProcessingMsg("");
    setSuccessMsg("Deleted Successfully !");
    window.location.reload();
  } catch (error) {
    setProcessingMsg("");
    setError(error.response.data.errors);
  }
};
