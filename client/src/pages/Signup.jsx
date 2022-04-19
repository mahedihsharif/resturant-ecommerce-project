import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Signup.module.css";

const Signup = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const {
    username,
    email,
    password,
    password2,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.signupContainer}>
      <div className="row vh-100 px-3">
        <div className="col-md-5 mx-auto align-self-center">
          <form onSubmit={handleSubmit}>
            {/* USER_NAME */}

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa-solid fa-user"></i>
              </span>
              <input
                type="text"
                name="username"
                value={username}
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleChange}
              />
            </div>

            {/* EMAIL */}

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa-solid fa-at"></i>
              </span>
              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                onChange={handleChange}
              />
            </div>

            {/* PASSWORD */}

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                placeholder="Create password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                onChange={handleChange}
              />
            </div>

            {/* AGAIN PASSWORD */}

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                type="password"
                name="password2"
                value={password2}
                className="form-control"
                placeholder="Confirm password"
                aria-label="Confirm Password"
                aria-describedby="basic-addon1"
                onChange={handleChange}
              />
            </div>

            {/* BUTTON */}

            <div className="mb-3">
              <button
                type="submit"
                className="btn form-control btn-primary btn-block"
              >
                Signup
              </button>
            </div>
            {/* Already have an account */}
            <p className="text-white text-center">
              Have an account? <Link to="/signin">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
