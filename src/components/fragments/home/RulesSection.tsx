import CardWork from "../../elements/home/CardWork";

const RulesSection = () => {
  return (
    <div className="container px-6 py-6 md:py-0 md:pb-6 text-center">
      <h1 className="text-4xl font-bold">Choose Your Best Fruits</h1>
      <div className="mt-12 lg:mt-14 flex flex-wrap justify-center">
        <CardWork
          image="/images/home/choose-order.png"
          title="Choose Fruits"
          description="Browse through hundreds of fruit varieties to find your favorites"
        />
        <CardWork
          image="/images/home/pay-order.png"
          title="Pay Upfront"
          description="It's quick, safe, and simple. Choose from several payment methods"
        />
        <CardWork
          image="/images/home/enjoy-order.png"
          title="Enjoy the Delivered Fruits"
          description="Fruits are selected and delivered directly to your location"
        />
      </div>
    </div>
  );
};

export default RulesSection;
