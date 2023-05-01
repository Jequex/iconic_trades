exports.SERVER_ERROR = {
  code: 500,
  message: {
    success: false,
    message: 'A server error occurred! Please contact the tech support.'
  }
};

exports.BAD_REQUEST = {
  code: 400,
  message: {
    success: false,
    message: 'Bad Request'
  }
};

exports.NOT_FOUND = {
  code: 404,
  message: {
    success: false,
    message: 'Not Found'
  }
};

exports.SUCCESS_MSG = {
  success: true,
  message: 'Request Successful'
};

exports.SUCCESS_CODE = 200;
