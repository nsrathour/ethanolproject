import FreeOngkirCard from "../../elements/history/FreeOngkirCard";
import BukakitaPay from "../../elements/payment/BukakitaPay";

const ServicesSection = () => {
  return (
    <div className="hidden lg:block lg:w-1/3 pe-4">
      <div className="w-full rounded-lg shadow-lg p-4 border">
        <h1 className="text-xl font-semibold">Services</h1>
        <FreeOngkirCard />
        <div className="flex items-center justify-between mt-4">
          <BukakitaPay />
          <p className="text-sm text-primary">Activate</p>
        </div>
        <h1 className="text-base font-semibold mt-4">My Profile</h1>
        <p className="text-sm mt-2">Wishlist</p>
        <p className="text-sm mt-2">Favorite Stores</p>
        <p className="text-sm mt-2">Settings</p>
      </div>
    </div>
  );
};

export default ServicesSection;
