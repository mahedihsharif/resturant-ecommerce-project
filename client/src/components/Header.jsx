import { Fragment } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../utils/helpers/auth";

const Header = () => {
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
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/signup" class="nav-link" aria-current="page">
                      Signup
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/signin" class="nav-link">
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
                      Dashboard
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
                      Dashboard
                    </Link>
                  </li>
                </Fragment>
              )}
              {isAuthenticated() && (
                <Fragment>
                  <li class="nav-item">
                    <Link
                      to="/user/userDashboard"
                      class="nav-link"
                      aria-current="page"
                    >
                      Logout
                    </Link>
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
