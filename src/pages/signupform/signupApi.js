import axios from "axios";
import Cookies from "js-cookie";
const url = process.env.REACT_APP_URL;

// ****** Signup ******
export const signUp = async (
  user,
  setError,
  setProcessingMsg,
  setSuccessMsg
) => {
  setError((prevState) => ({
    ...prevState,
    errorObj: {},
  }));

  setProcessingMsg("Processing...");
  try {
    await axios.post(`${url}/user/signup`, JSON.stringify(user), {
      headers: {
        "Content-type": "application/json",
      },
    });

    setProcessingMsg("");

    setSuccessMsg("SignUp Done Successfully !");

    setTimeout(() => (window.location.href = "/login"), 2000);
  } catch (error) {
    setProcessingMsg("");
    setError((prevState) => ({
      ...prevState,
      //errorObj: error.response.data.errors,
      errorObj: "Server Not Found",
    }));
  }
};
