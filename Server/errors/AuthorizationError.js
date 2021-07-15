class AuthorizationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'AuthorizationError';
  }
}

module.exports = AuthorizationError;
