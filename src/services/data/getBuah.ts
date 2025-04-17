import AxiosInstance from "../api/AxiosInstance";

const getBuah = async () => {
  const axiosInstance = AxiosInstance();

  try {
    const response = await axiosInstance
      .get("product")
      .then((res) => {
        return {
          success: true,
          data: res.data,
        };
      })
      .catch((err) => {
        return {
          success: false,
          data: err,
        };
      });

    return response;
  } catch (error) {
    console.error(error);
    return {
      success: false,
      data: error,
    };
  }
};

export default getBuah;
