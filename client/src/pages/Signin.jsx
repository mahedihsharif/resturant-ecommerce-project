import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import isEmail from "validator/es/lib/isEmail";
import isEmpty from "validator/es/lib/isEmpty";
import { signin } from "../api/auth";
import styles from "../styles/Signin.module.css";
import { isAuthenticated, setAuthentication } from "../utils/helpers/auth";
import { showLoading } from "../utils/helpers/loading";
import { showErrorMessage } from "../utils/helpers/message";

const Signin = () => {
  let navigate = useNavigate();
  useEffect(() => {
    redirectToDashboard();
  }, [navigate]);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    errorMsg: false,
    loading: false,
  });

  const { email, password, errorMsg, loading } = formData;

  //I used redirectToDashboard function to stop the repeat of same work.
  const redirectToDashboard = () => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      navigate("/admin/dashboard");
    } else if (isAuthenticated() && isAuthenticated().role === 0) {
      navigate("/user/dashboard");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      errorMsg: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //client-side validation

    if (isEmpty(email) || isEmpty(password)) {
      setFormData({
        ...formData,
        errorMsg: "All filled required fills",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid Email",
      });
    } else {
      const { email, password } = formData;
      const data = { email, password };
      setFormData({
        ...formData,
        loading: true,
      });
      signin(data)
        .then((res) => {
          setAuthentication(res.data.token, res.data.user);
          //i used redirectToDashboard function to stop the repeat of same work.
          redirectToDashboard();
        })
        .catch((err) => {
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.res.data.errorMsg,
          });
        });
    }
  };

  return (
    <div className={styles.signinContainer}>
      <div className="row vh-100 px-3">
        <div className="col-md-5 mx-auto align-self-center">
          {errorMsg && showErrorMessage(errorMsg)}
          {loading && <div className="text-center pb-3">{showLoading()}</div>}
          <form onSubmit={handleSubmit}>
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

            {/* BUTTON */}

            <div className="mb-3">
              <button
                type="submit"
                className="btn form-control btn-primary btn-block"
              >
                Signin
              </button>
            </div>
            {/* Already have an account */}
            <p className="text-white text-center">
              Havn't an account? <Link to="/signup">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
