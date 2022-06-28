export const showErrorMessage = (errMsg) => {
  return (
    <div class="alert alert-danger" role="alert">
      {errMsg}
    </div>
  );
};

export const showSuccessMessage = (successMsg) => {
  return (
    <div class="alert alert-success" role="alert">
      {successMsg}
    </div>
  );
};
