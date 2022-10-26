import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerApi } from "../assets/Api";
import { register } from "../redux/features/authSlice";

const Register = ({registerToLocal}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm({
    defaultValues: {
      email: "",
      userName: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const [showPass, setShowPass] = useState(false);

  const nav = useNavigate()

  const handleOnSubmit = async (data) => {
    
    try {
      const user = await registerApi(data)
      
      registerToLocal(user.data.data)

      nav('/verify_code')
      
    } catch (error) {
      console.log(error)
      alert(error?.response?.data?.message)
    }

  };

  console.log(errors);

  return (
    <div className="relative">
      <div>
        <div className="flex items-center w-full justify-center md:p-12">
          <div className="mx-auto w-full max-w-[650px] p-10 shadow-lg">
            <div className="py-10 text-4xl">Register</div>
            <form onSubmit={handleSubmit((data) => handleOnSubmit(data))}>
              <div className="mb-5">
                <span className="mb-3 block text-base font-medium text-[#07074D]">
                  Email
                </span>
                {errors?.email?.message && (
                  <div
                    class="p-2 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert"
                  >
                    <span class="font-medium">Alert!</span>{" "}
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
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <span className="mb-3 block text-base font-medium text-[#07074D]">
                  User Name
                </span>
                {errors?.userName?.message && (
                  <div
                    class="p-2 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert"
                  >
                    <span class="font-medium">Alert!</span>{" "}
                    {errors.userName.message}
                  </div>
                )}
                <input
                  type="text"
                  {...register("userName", {
                    required: {
                      value: true,
                      message: "User Name is required",
                    },
                  })}
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <span className="mb-3 block text-base font-medium text-[#07074D]">
                  Password
                </span>
                {errors?.password?.message && (
                  <div
                    class="p-2 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert"
                  >
                    <span class="font-medium">Alert!</span>{" "}
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

              <div className="mb-5">
                <span className="mb-3 block text-base font-medium text-[#07074D]">
                  Password Confirm
                </span>
                {errors?.passwordConfirm?.message && (
                  <div
                    class="p-2 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert"
                  >
                    <span class="font-medium">Alert!</span>{" "}
                    {errors.passwordConfirm.message}
                  </div>
                )}
                <input
                  type={`${!showPass ? "password" : "text"}`}
                  {...register("passwordConfirm", {
                    validate: value => value === watch("password") || "The passwords do not match",
                
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
                  Register
                </button>
              </div>
              <div className="hover:shadow-form hover:text-main mt-8 ">
                <Link to={"/login"}>Aready have acount ? <span className="font-bold">Go to Login</span> </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
      registerToLocal: (data) => dispatch(register(data))
  }
}


export default connect(null, mapDispatchToProps)(Register);
