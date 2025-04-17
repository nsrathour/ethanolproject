import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fruit } from "../../../types/interfaces/fruit";
import { rupiahFormatter } from "../../../utils/rupiah-formatter";
import Button from "../../elements/button";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

type ShoppingSummaryProps = {
  fruit: Fruit;
  productCart: number;
  handleBuy: () => void;
};

const ShoppingSummary = ({
  fruit,
  productCart,
  handleBuy,
}: ShoppingSummaryProps) => {
  return (
    <div className="w-full md:w-1/3 md:ps-1 mt-4 md:mt-0">
      <div className="border rounded-lg p-4">
        <h1 className="text-lg md:text-xl font-semibold">Shopping Summary</h1>
        <h1 className="text-base font-semibold mt-2">Order Total</h1>
        <div className="flex justify-between">
          <p className="text base text-gray-500">
            Total Price ({productCart} Item{productCart > 1 ? "s" : ""})
          </p>
          <p className="text base text-gray-500">
            {fruit.discount > 0 ? (
              <span>
                {rupiahFormatter(
                  fruit.price * productCart -
                    fruit.price * productCart * fruit.discount
                )}
              </span>
            ) : (
              <span>{rupiahFormatter(fruit.price * productCart)}</span>
            )}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text base text-gray-500">Shipping Cost</p>
          <p className="text base text-gray-500 line-through">Rp 15.000</p>
        </div>
        <div className="flex justify-between">
          <p className="text base text-gray-500">Shipping Insurance</p>
          <p className="text base text-gray-500 line-through">Rp 0</p>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between">
          <h1 className="text-base font-semibold">Total</h1>
          <h1 className="text-base font-semibold">
            {rupiahFormatter(fruit.price * productCart)}
          </h1>
        </div>
        <hr className="my-3" />
        <Button
          onClick={() => handleBuy()}
          classname="me-1 font-medium text-base bg-primary text-white rounded-md py-2 px-4 
                       w-full hover:bg-green-700"
        >
          <FontAwesomeIcon icon={faCreditCard} className="me-2" />
          Pay
        </Button>
      </div>
    </div>
  );
};

export default ShoppingSummary;
