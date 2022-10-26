import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { CommonSection, Message } from "../components";
import { useCartSlice, useCheckoutSlice, useOrderSlice } from "../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createOrder, getPayment } from "../assets/Api";



const Checkout = () => {
  const navigation = useNavigate();

  const [checkout, checkoutActions] = useCheckoutSlice();

  const [orders, orderActions] = useOrderSlice();

  const [carts, cartActions, dispatch] = useCartSlice();

  const [errorsPayment, setErrorsPayment] = useState()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    let id
    if(errorsPayment) {
      id = setTimeout(() => {
        setErrorsPayment(false)
      }, 3000)
    }
    return () => clearTimeout(id)
  }, [errorsPayment]);


  const payWithCart = async (token) => {
    try {
      const res = await getPayment({tokenId: token.id, amount: checkout.totalPayments})
      const {billing_details, amount, payment_method_details} = res.data
      await createOrder({products: checkout?.selectedProducts, address: billing_details?.address, amount, payment: payment_method_details?.card})
      dispatch(checkoutActions.clearProduct())
      window.confirm("Success payment")
      navigation('/orders')
    } catch (error) {
      console.log(error)
      setErrorsPayment("Payment error: " + error.message)
    }
  }

  const disible = Object.keys(errors).length > 0 ? true : false;

  const handleOnSubmit = () => {};

  console.log(checkout.selectedProducts, carts)

  return (
    <div>
      <CommonSection title={"Checkout"} />
      {checkout.totalPayments === 0 ? 
      
        <div className="flex justify-center mt-10 gap-2 text-lg">
          <div className=""> &#128577; You don't have product to check out continute with {" "} </div>
          <Link to="/foods" className="text-main">
            Shopping
          </Link>
        </div>
      : 
      <Container>
        <Row>
          <Col lg={12}>
            <div className="mb-4 mt-10">
              <h1 className="font-bold text-2xl">Shipping address</h1>
            </div>
          </Col>
          <Col lg={7}>
            <div>
              {errorsPayment && 
                <Message message={errorsPayment} />
              }
              <form action="">
                <div>
                  <label className="text-sm text-gray-600">Your Name</label>
                  {errors?.name?.message && (
                    <Message message={errors?.name?.message} />
                  )}
                  <input
                    className="w-full border-b-2 outline-none p-[10px_8px] mt-3 mb-2"
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", {
                      minLength: {
                        value: 2,
                        message: "Your name must be more than 2 character!",
                      },
                      required: {
                        value: true,
                        message: "Please enter your name",
                      },
                    })}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Your Email</label>
                  {errors?.email?.message && (
                    <Message message={errors?.email?.message} />
                  )}
                  <input
                    className="w-full border-b-2 outline-none p-[10px_8px] mt-3 mb-2"
                    {...register("email", {
                      pattern: {
                        value:
                          !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Email is not valid!",
                      },
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    })}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Your Phone</label>
                  {errors?.phone?.message && (
                    <Message message={errors?.phone?.message} />
                  )}
                  <input
                    className="w-full border-b-2 outline-none p-[10px_8px] mt-3 mb-2"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone"
                    {...register("phone", {
                      pattern: {
                        value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                        message: "Invalite phone number!",
                      },
                      required: {
                        value: true,
                        message: "Phone number is required",
                      },
                    })}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Your Adress</label>
                  {errors?.address?.message && (
                    <Message message={errors?.address?.message} />
                  )}
                  <input
                    className="w-full border-b-2 outline-none p-[10px_8px] mt-3 mb-2"
                    type="text"
                    placeholder="Enter your delivery address"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "address is required",
                      },
                    })}
                  />
                </div>
              </form>
            </div>
          </Col>

          <Col lg={5} className="mt-4  lg:!mt-0 ">
            <div className="bg-rgba_2 p-[30px_20px]">
              <div className="mb-4 mt-2">
                <h1 className="text-lg font-semibold text-white">
                  Total:{" "}
                  <span className="text-main text-xl ml-2">
                    ${checkout.totalPayments}
                  </span>
                </h1>
              </div>

              <StripeCheckout
                token={payWithCart}
                billingAddress
                shippingAddress
                stripeKey="pk_test_51KhkygGTaC45i0Au8Rf07bUPrRtBLGgDLLH2XzsmnlBDXElzoWUjDkvIVqrOV8MujTxcznfV0rs32At6bJPKygpr00n4spZxrO"
                amount={checkout.totalPayments * 100}
              >
                <button
                  type="button"
                  className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
                >
                  <svg
                    className="mr-2 -ml-1 w-4 h-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="bitcoin"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"
                    ></path>
                  </svg>
                  Pay with Strite
                </button>
              </StripeCheckout>

              <div className=" w-full mt-10">
                <button
                  disabled={disible}
                  onClick={() => payWithCart()}
                  className={`${
                    disible ? "opacity-80" : ""
                  } w-full p-[14px_10px] rounded-md bg-emerald-500 text-white `}
                >
                  Only cash
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    }
    </div>
  );
};

export default Checkout;
