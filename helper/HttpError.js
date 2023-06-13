class HttpError extends Error {
  constructor(status, message) {
    super(message);
    thise.status = status;
  }
}
module.exports = HttpError;
