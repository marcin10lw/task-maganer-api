const { CustomError } = require("../errors/customError");

const errorHandlerMiddleware = (error, req, res, next) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ msg: error.message });
  }

  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

module.exports = errorHandlerMiddleware;
