import axios from "axios";
import Cookies from "js-cookie";

const url = process.env.REACT_APP_URL;

// ****** Login ******
export const login = async (
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
    const response = await axios.post(
      `${url}/user/login`,
      JSON.stringify(user),
      {
        withCredentials: true,
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    setProcessingMsg("");

    Cookies.set(
      "user",
      JSON.stringify({
        email: response.data.user.email,
        username: response.data.user.username,
        id: response.data.user._id,
      }),
      {
        expires: 1,
      }
    );
    setSuccessMsg("Login Successfully !");
    setTimeout(() => (window.location.href = "/"), 1000);
  } catch (error) {
    setProcessingMsg("");
    setError((prevState) => ({
      ...prevState,
      errorObj: error.response.data.errors,
    }));
  }
};
