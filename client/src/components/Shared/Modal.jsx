import { useState } from "react";
import { createCategory } from "../../api/category";

const Modal = () => {
  const [category, setCategory] = useState("");
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    const { data } = category;
    createCategory(data);
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
              <label htmlFor="" className="text-secondary my-2">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                value={category}
                onChange={handleCategory}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
