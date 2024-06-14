const asyncHandler = (requestHandler) => (err, req, res) => {
  Promise.resolve(requestHandler()).catch((err) => next(err));
};

export { asyncHandler };
