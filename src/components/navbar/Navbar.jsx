import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../context/Context";
import { logOut } from "./logoutApi";

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100vw;
  background-color: #fff;

  li {
    margin: 20px;
  }
`;

const Navbar = () => {
  const { userDetails } = useAuth();

  return (
    <Ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      {!userDetails.username && (
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
      )}
      {!userDetails.username && (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}

      {userDetails.username && <li>{userDetails.username}</li>}

      {userDetails.username && (
        <li style={{ cursor: "pointer" }} onClick={logOut}>
          logout
        </li>
      )}
    </Ul>
  );
};

export default Navbar;
