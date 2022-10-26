import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../assets/Api";
import { userLogin } from "../redux/features/authSlice";

const Login = ({ login }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);


  const nav = useNavigate();

  const handleOnSubmit = async (data) => {
    try {
      const user = await loginApi(data);
      if (user.data?.data?.verified) {
        login(user?.data?.data);
        return nav("/");
      }
      login(user?.data?.data);

      nav("/verify-code", { state: user?.data?.data });
    } catch (error) {
      console.log(error);
      if (error?.response?.data)
        return setError(error?.response?.data?.message);
      setError(error?.message);
    }
  };

  useEffect(() => {
    if(error) {
      var id = setTimeout(() => {
        setError(null)
      }, 4000)
    }
    return () => clearTimeout(id)
  }, [error])

  return (
    <div className="relative w-full">
      <div className="absolute top-1/2 left-1/2 w-full md:w-auto translate-y-[20%] -translate-x-1/2">
        <div className="flex items-center  justify-center p-12 shadow-lg">
          <div className="mx-auto  md:w-[550px]">
            <div className="py-10 text-4xl">Login</div>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <div className="mb-5">
                <span className="mb-3 block text-base font-medium text-[#07074D]">
                  Email
                </span>
                {errors?.email?.message && (
                  <div
                    className="p-2 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert"
                  >
                    <span className="font-medium">Alert!</span>{" "}
                    {errors.email.message}
                  </div>
                )}
                <input
                  type="text"
                  {...register("email", {
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: "invalid email type",
                    },
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  placeholder="Your Email"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <span className="mb-3 block text-base font-medium text-[#07074D]">
                  Password
                </span>
                {errors?.password?.message && (
                  <div
                    className="p-2 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert"
                  >
                    <span className="font-medium">Alert!</span>{" "}
                    {errors.password.message}
                  </div>
                )}
                <input
                  type={`${!showPass ? "password" : "text"}`}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                  })}
                  placeholder="Your password"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

            <div
              className=" pb-8 flex items-center gap-2"
              onClick={() => setShowPass((pre) => !pre)}
            >
              <input
                type="checkbox"
                checked={showPass}
                onChange={() => {}}
                name=""
              />
              <label className="cursor-pointer hover:text-main">
                show passwords
              </label>
            </div>
              <div>
                <button
                  type="submit"
                  className="hover:shadow-form rounded-md !bg-main py-3 px-8 text-base font-semibold text-white outline-none"
                >
                  Login
                </button>
              </div>
              <div className="hover:shadow-form hover:text-main mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between ">
                <Link to={"/register"}>
                  don't have acount?{" "}
                  <span className="font-bold">Go to Register </span>
                </Link>
                <Link to={"/verify_code"}>
                  Verify your code{" "}
                  <span className="font-bold">Verify Code </span>
                </Link>
              </div>

            </form>
            {error && (
              <div
                className=" mt-5 flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Danger alert!</span> {error}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(userLogin(data)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
