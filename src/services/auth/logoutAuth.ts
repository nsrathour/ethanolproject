import AxiosInstance from "../api/AxiosInstance";

// Function to handle user logout
export const logoutAuth = async (token: string) => {
  const axiosInstance = AxiosInstance();

  try {
    // Making a POST request to logout
    const response = await axiosInstance
      .post(
        "user/logout", // API endpoint for logout
        {}, // Empty object since no body is required
        {
          headers: {
            Authorization: `Bearer ${token}`, // Authorization token in the header
          },
        }
      )
      .then((res) => {
        return {
          success: true, // If successful, return success
          data: res, // The response data
        };
      })
      .catch((err) => {
        return {
          success: false, // If failed, return failure
          data: err, // The error data
        };
      });
    return response; // Returning the response from the POST request
  } catch (err) {
    // In case of an error in the try block
    return {
      success: false, // Return failure
      data: err, // Error data
    };
  }
};
