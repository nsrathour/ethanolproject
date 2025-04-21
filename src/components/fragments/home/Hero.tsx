import { Link } from "react-router-dom";
import Button from "../../elements/button";

const Hero = () => {
  return (
    <div className="container px-8 min-h-screen flex flex-wrap items-center">
      <div className="w-full md:w-1/2">
        <p className="py-2 px-4 bg-green-100 inline-block text-primary rounded-xl">
          Kitchen Waste into Green Fuel 🧪
        </p>
        <h1 className="text-4xl lg:text-6xl font-bold mt-4">
          <span className="text-accent">Fruits</span> waste{" "}
          <span className="text-primary">That you throw away. </span>
          can convert into <span className="text-accent">bio fuel</span>
        </h1>
        <p className="text-base font-semibold mt-6 lg:mt-10">
        Protect the Environment! Convert waste into fuel.
        </p>
        <div className="flex mt-6 lg:mt-10">
          <Link to="/login">
            <Button
              classname="me-1 font-medium text-base bg-primary text-white rounded-md py-2 px-4 
            hover:bg-green-700"
            >
              Get Started
            </Button>
          </Link>
          <Link to="/products">
            <Button
              classname="ms-1 font-medium text-base bg-white text-primary border border-primary rounded-md py-2 px-4
            hover:border-green-700 hover:text-green-700"
            >
              Explore Fruits
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="/images/home/fruit-bg.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
