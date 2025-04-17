const AboutSection = () => {
  return(
      <div className="container py-12 md:py-20 px-4 md:px-8 lg:px-12 flex flex-wrap items-center">
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <div className="rounded-3xl w-3/5 overflow-hidden">
            <img src="/images/home/bg-about.jpg" alt="Fresh Fruit Illustration" />
          </div>
        </div>
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 text-center sm:text-start">
          <p className="text-accent text-xl font-medium">- We Are -</p>
          <h1 className="text-4xl font-bold mt-2 md:mt-4">
            Saving Quality Fruits from Food Waste
          </h1>
          <div className="flex items-center justify-center sm:justify-start mt-4 md:mt-6">
            <img
              src="/images/home/founder.jpg"
              alt="Founder of Buahkita"
              className="max-w-12 rounded-full"
            />
            <div className="ms-2">
              <h3 className="text-lg font-semibold">Erick Smith</h3>
              <p className="text-sm text-gray-500">Founder</p>
            </div>
          </div>
          <p className="mt-4 md:mt-6 text-lg">
            "This fruit selling platform is an initiative aimed at reducing food waste
            by utilizing leftover fruits that are still fit for consumption
            from households, food industries, restaurants, and various other sources."
          </p>
        </div>
      </div>
  )
}

export default AboutSection;
