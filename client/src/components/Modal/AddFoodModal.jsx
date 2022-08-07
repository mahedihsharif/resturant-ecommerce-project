import { Fragment, useEffect, useState } from "react";
import isEmpty from "validator/es/lib/isEmpty";
import { getCategories } from "../../api/category";
import { createProduct } from "../../api/product";
import { showLoading } from "../../utils/helpers/loading";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../utils/helpers/message";
const AddFoodModal = () => {
  const [categories, setCategories] = useState(null);
  const [category, setCategory] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [productData, setProductData] = useState({
    productImage: null,
    productName: "",
    productDesc: "",
    productPrice: "",
    productCategory: "",
    productQuantity: "",
  });

  const {
    productImage,
    productName,
    productDesc,
    productPrice,
    productCategory,
    productQuantity,
  } = productData;

  //load data
  useEffect(() => {
    loadCategories();
  }, [loading]);

  const loadCategories = async () => {
    await getCategories().then((res) => setCategories(res.data.categories));
  };

  // const handleCategory = (e) => {
  //   setErrorMsg("");
  //   setSuccessMsg("");
  //   setCategory(e.target.value);
  // };

  const handleProductImage = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleProductChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    if (productImage === null) {
      setErrorMsg("Please Select a Product Image!");
    } else if (
      isEmpty(productName) ||
      isEmpty(productDesc) ||
      isEmpty(productPrice)
    ) {
      setErrorMsg("All Fields Required Filled!");
    } else if (isEmpty(productCategory)) {
      setErrorMsg("Please Select a Product Category!");
    } else if (isEmpty(productQuantity)) {
      setErrorMsg("Please Select a Product Quantity!");
    } else {
      let formData = new FormData();
      formData.append("productImage", productImage);
      formData.append("productName", productName);
      formData.append("productDesc", productDesc);
      formData.append("productPrice", productPrice);
      formData.append("productCategory", productCategory);
      formData.append("productQuantity", productQuantity);

      createProduct(formData)
        .then((res) => {
          setProductData({
            productImage: null,
            productName: "",
            productDesc: "",
            productPrice: "",
            productCategory: "",
            productQuantity: "",
          });
          setSuccessMsg(res.data.successMessage);
        })
        .catch((err) => {
          console.log("data response error", err);
          setErrorMsg(err.response.errorMessage);
        });
    }
  };

  return (
    <div
      className="modal fade"
      id="addFoodModal"
      tabindex="-1"
      aria-labelledby="addFoodLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <form action="" onSubmit={handleProductSubmit}>
            <div className="modal-header bg-warning text-white">
              <h5 className="modal-title" id="addFoodLabel">
                Add New Food
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
                  <div className="input-group">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile02"
                      name="productImage"
                      onChange={handleProductImage}
                    />
                    <label className="input-group-text" for="inputGroupFile02">
                      Browse
                    </label>
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Food Title"
                      name="productName"
                      value={productName}
                      onChange={handleProductChange}
                    />
                  </div>

                  <div class="mt-3">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="productDesc"
                      value={productDesc}
                      placeholder="Description"
                      onChange={handleProductChange}
                    ></textarea>
                  </div>

                  <div className="mt-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      name="productPrice"
                      value={productPrice}
                      placeholder="Price"
                      onChange={handleProductChange}
                    />
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label htmlFor="" className="text-secondary mb-2">
                        Category
                      </label>
                      <select
                        className="form-select form-select-lg"
                        aria-label="Default select example"
                        name="productCategory"
                        onChange={handleProductChange}
                      >
                        <option
                          selected
                          disabled
                          className="text-secondary"
                          value=""
                        >
                          Choose One...
                        </option>
                        {categories &&
                          categories.map((cat) => (
                            <option key={cat._id} value={cat._id}>
                              {cat.category}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="" className="text-secondary mb-2">
                        Quantity
                      </label>
                      <input
                        defaultValue="1"
                        className="form-control"
                        type="number"
                        id="quantity"
                        name="productQuantity"
                        value={productQuantity}
                        onChange={handleProductChange}
                        min="1"
                      />
                    </div>
                  </div>
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
              <button type="submit" className="btn bg-warning text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFoodModal;
