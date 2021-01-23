class RestResponse {
  constructor(statusCode, message, data) {
    this.StatusCode = statusCode;
    this.Message = message;
    this.Data = data;
  }

  static ok() {
    return new RestResponse(200, 'OK', []);
  }

  static ok(data) {
    return new RestResponse(200, 'OK', data);
  }

  static build(statusCode, message, data) {
    return new RestResponse(statusCode, message, data);
  }
}

module.exports = RestResponse;
