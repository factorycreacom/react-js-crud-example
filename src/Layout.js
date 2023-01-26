import { Container } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">About</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Container fixed>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
