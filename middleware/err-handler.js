const { customAPIError } = require("../error/customAPIError");

const errHandlerMiddlware = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  res.status(500).json({
    msg: "Somthing went wrong, Pleas try again!",
  });
};

module.exports = errHandlerMiddlware;
