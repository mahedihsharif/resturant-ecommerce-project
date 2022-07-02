import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logOut } from "../utils/helpers/auth";

const Header = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    logOut(() => {
      navigate("/signin");
    });
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to="#" class="navbar-brand" href="#">
            Logo
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              {!isAuthenticated() && (
                <Fragment>
                  <li class="nav-item">
                    <Link to="/" class="nav-link" aria-current="page">
                      <i class="fa-solid fa-house-chimney"></i> Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/signup" class="nav-link" aria-current="page">
                      <i class="fa-solid fa-pen-to-square"></i> Signup
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/signin" class="nav-link">
                      <i class="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                      Signin
                    </Link>
                  </li>
                </Fragment>
              )}

              {isAuthenticated() && isAuthenticated().role === 0 && (
                <Fragment>
                  <li class="nav-item">
                    <Link
                      to="/user/dashboard"
                      class="nav-link"
                      aria-current="page"
                    >
                      <i class="fa-solid fa-house-chimney-user"></i> Dashboard
                    </Link>
                  </li>
                </Fragment>
              )}

              {isAuthenticated() && isAuthenticated().role === 1 && (
                <Fragment>
                  <li class="nav-item">
                    <Link
                      to="/admin/dashboard"
                      class="nav-link"
                      aria-current="page"
                    >
                      <i class="fa-solid fa-house-chimney-user"></i> Dashboard
                    </Link>
                  </li>
                </Fragment>
              )}
              {isAuthenticated() && (
                <Fragment>
                  <li class="nav-item">
                    <button
                      class="nav-link btn border-none text-secondary text-decoration-none pl-0"
                      aria-current="page"
                      onClick={handleLogout}
                    >
                      <i class="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                      Logout
                    </button>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
