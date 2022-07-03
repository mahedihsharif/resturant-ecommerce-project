exports.categoryController = async (req, res) => {
  console.log(req.body);
  res.json({
    successMessage: `${req.body.category} was create`,
  });
};
