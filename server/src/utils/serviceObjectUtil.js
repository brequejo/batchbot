const createServiceObject = (type, statusCode, message, data) => {
  return {
    type,
    statusCode,
    message,
    data,
  };
};

export default createServiceObject;
