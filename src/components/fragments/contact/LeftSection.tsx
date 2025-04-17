import Button from "../../elements/button";
import Input from "../../elements/input/Input";

const LeftSection = () => {
  return (
    <div className="w-full md:w-1/2">
      <p className="mt-8 md:mt-6 px-4 md:px-0 font-medium">
        Great! We are very happy to hear your thoughts
        <br />
        and let's start something special together.
        <br />
        Contact us for any questions.
      </p>
      <div className="bg-black p-4 mt-8 md:mt-16">
        <p className="text-white text-lg font-medium">Contact</p>
        <div className="mt-4">
          <p className="text-base text-white">Name</p>
          <Input
            name="name"
            onInputChange={() => {}}
            type="text"
            placeholder="Please enter your name"
          />
        </div>
        <div className="mt-4">
          <p className="text-base text-white">Email</p>
          <Input
            name="email"
            onInputChange={() => {}}
            type="email"
            placeholder="Please enter your email"
          />
        </div>
        <div className="mt-4">
          <p className="text-base text-white">
            Tell us about your interest
          </p>
          <Input
            name="message"
            onInputChange={() => {}}
            type="text"
            placeholder="Please enter your message"
          />
        </div>
        <Button classname="bg-accent mt-8">SEND</Button>
      </div>
    </div>
  );
};

export default LeftSection;
