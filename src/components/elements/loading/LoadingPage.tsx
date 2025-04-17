import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <FontAwesomeIcon
        icon={faSpinner}
        color="#4E9F3D"
        spin
        className="fa-5x"
      />
    </div>
  );
};

export default LoadingPage;
