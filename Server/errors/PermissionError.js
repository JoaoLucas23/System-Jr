const AuthorizationError = require('./AuthorizationError');

class PermitionError extends (AuthorizationError) {
  constructor(msg) {
    super(msg);
    this.name = 'PermissionError';
  }
}

module.exports = PermitionError;
