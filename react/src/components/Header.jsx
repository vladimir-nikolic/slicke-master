import React from "react";
import { NavLink } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
function Header() {
  const activeStyle = {
    fontWeight: "bold",
    fontSize: "1.25rem",
    color: "#161616",
  };

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <NavLink
        to="."
        end
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        Slicka
      </NavLink>
      <nav>
        {user ? (
          <button className="btn" onClick={onClick}>
            <FaSignInAlt />
            Logout
          </button>
        ) : (
          <>
            <NavLink
              to="login"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <FaSignInAlt className="pad" />
              Login
            </NavLink>
            <NavLink
              to="register"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              <FaUser />
              Register
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
