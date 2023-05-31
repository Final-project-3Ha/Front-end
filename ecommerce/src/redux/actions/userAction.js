import { LOGIN_USER, LOGOUT_USER } from "../constants/userConstants.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const setReduxUserState = (userCreated) => (dispatch) => {
  dispatch({
    type: LOGIN_USER,
    payload: userCreated,
  });
};

// export const logout = () => (dispatch) => {
//   document.location.href = "/login";
//   axios.get("/api/logout");
//   localStorage.removeItem("userInfo");
//   sessionStorage.removeItem("userInfo");
//   localStorage.removeItem("cart");
//   dispatch({ type: LOGOUT_USER });
// };


export const logout = () => async (dispatch) => {
  const navigate = useNavigate();

  try {
    await axios.get("/api/logout");
    localStorage.removeItem("userInfo");
    sessionStorage.removeItem("userInfo");
    localStorage.removeItem("cart");
    dispatch({ type: LOGOUT_USER });
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
};