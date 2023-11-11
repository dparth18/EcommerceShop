const notFound = (req, res, next) => {
  const error = new Error(`Not Found ${req.originalURL}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, res, req, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode; //ternary operator
  let message = err.message;

  //Check for Mongoose bad ObjectId
  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = `Resource Not found`;
    statusCode = 404;
  } else {
    res.status(statusCode).json({
      message,
      stack: process.env.NODE_ENV === "production" ? "pancakes" : err.stack,
    });
  }
};

export { notFound, errorHandler };
