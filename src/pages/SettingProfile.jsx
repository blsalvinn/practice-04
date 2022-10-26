import React, { useState } from "react";
import { useEffect } from "react";
import { delImage, IMG_URL, updateUserApi, uploadSigleImage } from "../assets/Api";
import { USER_IMG } from "../assets/CONST/CONST";
import { useAuthSlice, useBase64 } from "../redux/hooks";
import { useForm } from "react-hook-form";
import { updateUser } from "../redux/features/authSlice";
import { Message } from "../components";
import { Link, useLocation, useNavigate } from "react-router-dom";

const pages = ["Profile Info", "Security", "Billing"];

const SettingProfile = () => {
  const [user,_, dispatch] = useAuthSlice();
  const [page, setPage] = useState("Profile Info");

  const [showPass, setShowPass] = useState(false)
  const [errorServer, setErrorServer] = useState(false)
  const [sucess, setSucess] = useState(false)

  const { file, handleCreateBase64, errors: error, handleClear } = useBase64();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    getValues
  } = useForm();

  const handleOnSubmit = async (data) => {
    try {
      const image = new FormData()
      image.append('single_image', data?.avatar?.[0])
      if(file && data?.avatar?.length > 0 && !user?.avatar) {
        const newImage =  await uploadSigleImage(image)
        const newUser = await updateUserApi( user._id,{...data, avatar: newImage.data.data})
        console.log(newUser)
        dispatch(updateUser(newUser.data.data))
        setSucess(true)
        
        return
      } 
      if(user?.avatar && data?.avatar?.length > 0 && file !== '') {
        await delImage(user?.avatar)
        const newImage =  await uploadSigleImage(image)
        const newUser = await updateUserApi( user._id,{...data, avatar: newImage.data.data})
        dispatch(updateUser(newUser.data.data))
        setSucess(true)

        return
      } 
      const newUser = await updateUserApi( user._id,{email: data.email, address: data.address, password: data?.password, passwordConfirm: data?.passwordConfirm})
      dispatch(updateUser(newUser.data.data))
      setSucess(true)
    } catch (error) {
      if(error?.response?.data) return setErrorServer(error?.response?.data?.message)
      setErrorServer(error)
    }
  }


  var setValueFrom = () => {
    setValue("userName", user?.userName);
    setValue("address.name", user?.address?.name);
    setValue("address.phone", user?.address?.phone);
    setValue("email", user?.email);
  }

  useEffect(() => {
    setValueFrom()
    let idTimer
    if(sucess) {
      idTimer = setTimeout(() => {
        setSucess(false)
      }, 2000)
    }
    return () => clearTimeout(idTimer)
  }, [user, sucess]);


  const navigate = useNavigate();

  return (
    <div>
      <div className="container mx-auto max-w-3xl mt-8">
        <h1 className="text-2xl font-bold text-gray-700 px-6 md:px-0">
          Account Settings
        </h1>
        <ul className="flex border-b border-gray-300 text-sm font-medium text-gray-600 mt-3 px-6 md:px-0">
          {pages.map((item) => (
            <li
              key={item}
              onClick={() => setPage(item)}
              className={`mr-8 ${
                page === item ? "text-gray-900 border-b-2 border-gray-800" : ""
              }`}
            >
              <button className="py-4 inline-block">{item}</button>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none">
            <div className="w-1/3 bg-gray-100 p-8 hidden md:inline-block">
              <h2 className=" text-gray-700 mb-4 tracking-wide text-base font-medium">
                Profile Info
              </h2>
              <p className="text-xs text-gray-500">
                Update your basic profile information such as Email Address,
                Name, and Image.
              </p>
              <div className="py-8 px-10 clearfix">
                <label className="text-sm text-gray-600 w-full block text-center">
                  Photo
                </label>
                <img
                  className="rounded-full ml-auto mr-auto w-full h-full border-4 mt-2 border-gray-200 float-left"
                  src={`${
                    file ? file : user?.avatar ? IMG_URL + user.avatar : USER_IMG
                  }`}
                  alt=""
                />
                <div className="bg-gray-200 text-gray-500 text-xs !mt-5 font-bold px-4 py-2 rounded-lg float-left hover:bg-gray-300 hover:text-gray-600 relative overflow-hidden cursor-pointer">
                  <input
                    type="file"
                    id="file"
                    {...register("avatar", {
                      onChange: (e) => {
                        if(e.target.files.length > 0) {
                          handleCreateBase64(e)
                        } else handleClear()
                        
                      }
                    })}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div >Change Photo</div>
                </div>

                <button
                  type="button"
   
                  onClick={() => {(setValue("avatar", null)); handleClear()} }
                  className="bg-gray-200 text-gray-500 text-xs !mt-5 font-bold px-4 py-2 rounded-lg float-left hover:bg-gray-300 hover:text-gray-600 relative overflow-hidden cursor-pointer"
                >
                  Delete Photo
                </button>
              </div>
            </div>

            {/* page */}
            <div className="w-full flex flex-col">
              {page === "Profile Info" && (
                <div className=" w-full">
                  <div className="py-8 px-16">
                    <label  className="text-sm text-gray-600">
                      Name
                    </label>
                    {errors?.userName?.message && (
                      <div
                        className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                        role="alert"
                      >
                        <span className="font-medium">Error</span>{" "}
                        {errors?.userName?.message}
                      </div>
                    )}
                    <input
                      className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500"
                      type="text"
                      {...register("userName", {
                        required: {
                          value: true,
                          message: "Name cannot be empty!",
                        },
                      })}
                    />
                  </div>
                  <hr className="border-gray-200" />

                  <div className="py-8 px-16">
                    <label  className="text-sm text-gray-600">
                      Phone
                    </label>
                    {errors?.address?.phone?.message && (
                      <div
                        className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                        role="alert"
                      >
                        <span className="font-medium">Error</span>{" "}
                        {errors?.address.phone?.message}
                      </div>
                    )}
                    <input
                      className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500"
                      type="text"
                      {...register("address.phone", {
                        pattern: {
                          value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                          message: "Invalite phone number!",
                        },
                      })}
                    />
                  </div>
                  <hr className="border-gray-200" />

                  <div className="py-8 px-16">
                    <label  className="text-sm text-gray-600">
                      Address Name
                    </label>
                    {errors?.address?.name?.message && (
                      <div
                        className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                        role="alert"
                      >
                        <span className="font-medium">Error</span>{" "}
                        {errors?.address.name?.message}
                      </div>
                    )}
                    <input
                      className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500"
                      type="text"
                      {...register("address.name")}
                    />
                  </div>

                  
                  <hr className="border-gray-200" />
                </div>
              )}

              {page === "Security" && (
                <div className=" w-full">
                  <div className="">
                    <div className="py-8 px-16">
                      <label  className="text-sm text-gray-600">
                        Email
                      </label>
                      {errors?.email?.message && (
                        <div
                          className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                          role="alert"
                        >
                          <span className="font-medium">Error</span>{" "}
                          {errors?.email?.message}
                        </div>
                      )}
                      <input
                        className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500"
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
                        placeholder="your email address"
                      />
                    </div>
                    <hr className="border-gray-200" />
                  </div>

                  <div className="">
                    <div className="py-8 px-16">
                      <label  className="text-sm text-gray-600">
                        Password
                      </label>
                      <input
                        className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500"
                        type={showPass ? 'text' : 'password'}
                        {...register("password")}
                      />
                    </div>
                    <hr className="border-gray-200" />
                  </div>

                  <div className="">
                    <div className="py-8 px-16">
                      <label  className="text-sm text-gray-600">
                        Password confirm
                      </label>
                      {errors?.passwordComfirm?.message && (
                        <div
                          className="p-2 mb-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                          role="alert"
                        >
                          <span className="font-medium">Error</span>{" "}
                          {errors?.passwordComfirm?.message}
                        </div>
                      )}
                      <input
                        className="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500"
                        type={showPass ? 'text' : 'password'}
                        name="password"
                        {...register("passwordConfirm", {
                          validate: (value) =>
                            value === watch("password") ||
                            "The passwords do not match",
                        })}
                      />
                    </div>
                    <hr  className="border-gray-200" />
                    <div className=" py-8 px-16 flex items-center gap-2" onClick={() => setShowPass(pre => !pre)} >
                      <input  type="checkbox" checked={showPass} onChange={() => {}} name="" />
                      <label  className="cursor-pointer hover:text-main">
                        show passwords
                      </label>
                    </div>
                  </div>
                </div>
              )}

            {sucess && 
              <Message type="success" message={"Update Profile success"}/>
            }

            {errorServer && 
              <Message type="danger" message={errorServer}/>
            }
            </div>
            {/* end page */}
          </div>
          <div className="p-16 py-8 bg-gray-100 clearfix rounded-b-lg border-t border-gray-200">
            <p className="float-left text-xs text-gray-500 tracking-tight mt-2">
              Click on Save to update your Profile Info
            </p>

            <div className="flex justify-end items-center gap-4">

              <input
                type="submit"
                className="bg-main text-white text-sm font-medium px-6 py-2 rounded float-right uppercase cursor-pointer"
                value="Save"
              />

              
                <button type="button" onClick={() => navigate(-1)} className="bg-main text-white text-sm font-medium px-6 py-2 rounded float-right uppercase cursor-pointer">
                  Go back
                </button>
            </div>

            
          </div>

          

          {/* security */}
        </form>
      </div>
    </div>
  );
};

export default SettingProfile;
