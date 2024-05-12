class customAPIError extends Error {
  customAPIError(message, status) {
    supper(message);
    this.status = status;
  }
}

const createCustomError = (message, status) => {
  return new customErrorAPI(message, status);
};

module.exports = { customAPIError, createCustomError };
