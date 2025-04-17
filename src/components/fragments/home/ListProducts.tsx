import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Fruit } from "../../../types/interfaces/fruit";
import Button from "../../elements/button";
import CardProduct from "../../elements/card-product";
import { Link } from "react-router-dom";

type ListProductProps = {
  products: Fruit[];
};

const ListProduct = ({ products }: ListProductProps) => {
  return (
    <div className="bg-slate-50 mt-6 px-6">
      <div className="container py-12 text-center">
        <h1 className="text-4xl font-bold">Best Products</h1>
        <p className="text-base mt-4 sm:mt-6">
          Enjoy the finest selection of our fresh and healthy fruits.
          <br />
          Every bite is a perfect blend of taste and nature's best nutrition.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center">
          {products.length < 1
            ? [...Array(4)].map((_, index) => (
                <div
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 mb-4 rounded-2xl overflow-hidden"
                  key={index}
                >
                  <Skeleton height="220px" />
                  <Skeleton height="30px" className="mt-2" />
                  <Skeleton height="20px" className="mt-2" />
                  <Skeleton height="10px" className="mt-2" />
                  <Skeleton height="20px" className="mt-1" />
                </div>
              ))
            : products
                .slice(0, 4)
                .map((item) => (
                  <CardProduct fruit={item} padding="px-6" key={item.id} />
                ))}
        </div>
        <Link to="/products">
          <Button
            classname="font-medium text-base bg-primary text-white rounded-md py-2 px-4 
          hover:bg-green-700 mt-4"
          >
            View All Fruits
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ListProduct;
