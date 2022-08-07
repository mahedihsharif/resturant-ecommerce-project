import { Fragment, useState } from "react";
import isEmpty from "validator/es/lib/isEmpty";
import { createCategory } from "../../api/category";
import { showLoading } from "../../utils/helpers/loading";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../utils/helpers/message";

const AddCategoryModal = () => {
  const [category, setCategory] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCategory = (e) => {
    setErrorMsg("");
    setSuccessMsg("");
    setCategory(e.target.value);
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    if (isEmpty(category)) {
      setErrorMsg("Please Enter a Category!");
    } else {
      const data = { category };

      setLoading(true);
      createCategory(data)
        .then((res) => {
          setLoading(false);
          setSuccessMsg(res.data.successMessage);
          setCategory("");
        })
        .catch((err) => {
          setLoading(false);
          setErrorMsg(err.response.data.errorMessage);
        });
    }
  };

  return (
    <div
      className="modal fade"
      id="addCategoryModal"
      tabindex="-1"
      aria-labelledby="addCategoryLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form action="" onSubmit={handleCategorySubmit}>
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title" id="addCategoryLabel">
                Add Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {errorMsg && showErrorMessage(errorMsg)}
              {successMsg && showSuccessMessage(successMsg)}
              {loading ? (
                <div className="text-center">{showLoading()}</div>
              ) : (
                <Fragment>
                  <label htmlFor="" className="text-secondary my-2">
                    Category
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={category}
                    onChange={handleCategory}
                  />
                </Fragment>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn bg-info text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
