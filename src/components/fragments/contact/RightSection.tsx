const RightSection = () => {
  return (
    <div className="w-full md:w-1/2 px-4 flex md:justify-center">
      <div>
        <h1 className="font-bold text-6xl sm:text-7xl lg:text-8xl">
          Let's <span className="text-primary">get</span>
          <br />
          <span className="text-accent">in</span> touch
        </h1>
        <h1 className="mt-16 text-2xl font-semibold">
          Don't hesitate to reach out to us!
        </h1>

        <div className="mt-16">
          <p className="text-base font-medium text-gray-500">Phone</p>
          <p>+91 851-365-xxxx</p>
          <p className="text-base font-medium text-gray-500 mt-8">Email</p>
          <p>chitkara@mail.com</p>
          <p className="text-base font-medium text-gray-500 mt-8">Office</p>
          <p>chitkara university, HP</p>
          <a
  href="https://maps.google.com"
  target="_blank"
  rel="noopener noreferrer"
  className="underline cursor-pointer"
>
  View on Google Maps
</a>

        </div>
      </div>
    </div>
  );
};

export default RightSection;