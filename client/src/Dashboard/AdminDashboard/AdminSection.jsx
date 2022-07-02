import Modal from "../../components/Shared/Modal";

const AdminSection = () => {
  return (
    <>
      <div className="bg-light">
        <div className="container">
          <div className="row py-4">
            <div className="col-md-4 my-3 ">
              <button
                className="btn btn-outline-info btn-block w-100"
                data-bs-toggle="modal"
                data-bs-target="#addCategoryModal"
              >
                <i className="fas fa-plus"></i> Add Category
              </button>
            </div>

            <div className="col-md-4 my-3">
              <button className="btn btn-outline-warning btn-block w-100">
                <i className="fas fa-plus"></i> Add Food
              </button>
            </div>

            <div className="col-md-4 my-3">
              <button className="btn btn-outline-success btn-block w-100">
                <i className="fas fa-money-check-alt"></i> View Orders
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal />
    </>
  );
};

export default AdminSection;
