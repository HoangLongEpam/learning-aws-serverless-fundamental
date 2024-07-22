exports.handler = async (event) => {
  // Extract HTTP method and request path from the event
  const { httpMethod, path } = event;

  // Check if the request path is "/hello" and the method is GET
  if (httpMethod === "GET" && path === "/hello") {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello from Lambda",
      }),
    };
    return response;
  } else {
    // Return a 400 Bad Request with a specific error message
    const errorMessage = `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${httpMethod}`;
    const response = {
      statusCode: 400,
      body: JSON.stringify({
        message: errorMessage,
      }),
    };
    return response;
  }
};
