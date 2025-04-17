import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import InputForm from "../../elements/input";
import Button from "../../elements/button";
import Loading from "../../elements/loading";
import { registerAuth } from "../../../services/auth/registerAuth";

type ValidationErrors = {
  username?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPass?: string;
};

type ErrorsMessageValidation = {
  username?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPass?: string;
};

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState<ErrorsMessageValidation>({});
  const [registerFailed, setRegisterFailed] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const usernameRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validationForm = (): boolean => {
    const validationErrors: ValidationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.phone.trim()) {
      validationErrors.phone = "Phone number is required";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPass !== formData.password) {
      validationErrors.confirmPass = "Passwords do not match";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validationForm()) {
      setIsLoading(true);

      const data = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      };

      const result = await registerAuth(
        data.username,
        data.email,
        data.phone,
        data.password
      );

      setIsLoading(false);
      if (result.success) {
        setRegisterFailed("");
        window.location.href = "/login";
      } else {
        setRegisterFailed(result.data.response.data.message?.username);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        <InputForm
          classname="mt-8"
          label="Username"
          name="username"
          placeholder="Please enter your username"
          type="text"
          ref={usernameRef}
          onInputChange={handleChange}
          errorMessage={errors.username}
        />
        <InputForm
          classname="mt-4"
          label="Email"
          name="email"
          placeholder="Please enter your email"
          type="email"
          onInputChange={handleChange}
          errorMessage={errors.email}
        />
        <InputForm
          classname="mt-4"
          label="Phone Number"
          name="phone"
          placeholder="Please enter your phone number"
          type="number"
          onInputChange={handleChange}
          errorMessage={errors.phone}
        />
        <p className="text-xs mt-1">
          * use phone number starting with +91 (example: +91 80911XXXXXX)
        </p>
        <InputForm
          classname="mt-4"
          label="Password"
          name="password"
          placeholder="Please enter your password"
          type="password"
          onInputChange={handleChange}
          errorMessage={errors.password}
        />
        <InputForm
          classname="mt-4"
          label="Confirm Password"
          name="confirmPass"
          placeholder="Please confirm your password"
          type="password"
          onInputChange={handleChange}
          errorMessage={errors.confirmPass}
        />
        <div className="flex justify-center">
          <Button classname="bg-primary text-white mt-6 lg:mt-12" type="submit">
            Register
          </Button>
        </div>
      </form>
      {registerFailed && (
        <p className="text-red-500 text-center mt-5">{registerFailed}</p>
      )}
      {isLoading && <Loading />}
    </>
  );
};

export default RegisterForm;
