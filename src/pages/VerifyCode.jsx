import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { checkCode } from "../assets/Api";
import { useAuthSlice } from "../redux/hooks";

const VerifyCode = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm({
        defaultValues: {
          code: ""
        },
      }); 

      const [user] = useAuthSlice()

      const nav = useNavigate()
    
      const handleOnSubmit = async (data) => {
        try {
          const newUser = await checkCode({email: user?.email, code: data.code, id: user?._id})
          nav("/login")
        } catch (error) {
          alert(error?.response?.data?.message)
        }
      };
  return (
    <div className="relative h-[100vh]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg p-10">

        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="mb-3 ">
            <span className="mb-3 block  font-medium text-[#07074D] text-2xl">
              Your Code
            </span>
            {errors?.code?.message && (
              <div
                className="p-2 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert"
              >
                <span className="font-medium">Alert!</span> {errors?.email?.message}
              </div>
            )}
            <input
              type="text"
              {...register("code", {
                required: {
                  value: true,
                  message: "Code is required",
                },
              })}
              placeholder="Code"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md !bg-main !py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Send
            </button>
            <Link
              to="/get_code"
              className="hover:!text-main block  py-3 "
            >
              Code exprired get new code?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyCode;
