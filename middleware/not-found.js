const notFound = (req, res, next) => {
  res.send("<h2>The Page You Requested Does't Exist</h2>");
};

module.exports = notFound;
