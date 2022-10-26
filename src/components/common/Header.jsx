import { useState } from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import {
  RiCake3Line,
  RiShoppingBasketLine,
  RiUser3Line,
  RiMenuLine,
  RiCloseFill,
} from "react-icons/ri";
import { useCartSlice, useAuthSlice } from "../../redux/hooks";
import { Carts } from "../index";
import { URL_API } from "../../assets/Api";

const navs = [
  {
    name: "home",
    path: "/home",
  },
  {
    name: "foods",
    path: "/foods",
  },
  {
    name: "orders",
    path: "/orders",
  },
  {
    name: "cart",
    path: "/cart",
  },
];

const Header = () => {
  // auth hooks

  const [user, {userLogout}, dispatch] = useAuthSlice();


  const [cart] = useCartSlice();

  const [isClose, setIsClose] = useState(true);

  const [openCart, setOpenCart] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="fixed top-0 right-0 left-0 shadow-sm bg-white z-10">
      <Container className="w-full">
        {/* header wrapper */}
        <div className="flex items-center p-[10px_0] h-[100px] justify-between">
          {/* logo */}
          <Link to="/" className="flex items-center">
            <span className="text-main font-[700] text-2xl">Food</span>
            <RiCake3Line className="text-green-600 text-[20px]"></RiCake3Line>
          </Link>
          {/* nav */}
          <nav
            className={`fixed right-0 top-0 left-0 bg-rgba_1 bottom-0 w-full 
            z-10  ${
              isClose ? "translate-x-[-100%]" : "translate-x-[0]"
            } transition-all lg:hidden md:hidden`}
          >
            <div></div>
            <div className="p-[20px_10px] flex flex-col items-center h-full justify-center">
              {navs.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setIsClose(true)}
                >
                  <span className="capitalize p-[10px_0] text-cyan-50 transition-all block font-semibold text-xl hover:text-main mb-2">
                    {item.name}
                  </span>
                </NavLink>
              ))}
            </div>
          </nav>

          <nav className={`hidden lg:block md:block`}>
            <div className="flex gap-5">
              {navs.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setIsClose(true)}
                >
                  {({ isActive }) => (
                    <span
                      className={`capitalize  transition-all block font-semibold text-[20px] hover:text-main ${
                        isActive ? "text-main" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>
          {/* user action */}
          <div className="flex items-center relative gap-2 text-slate-700">
            <div
              className="relative p-[10px] cursor-pointer"
              onClick={() => setOpenCart(true)}
            >
              <RiShoppingBasketLine className="w-5 h-5  text-slate-700 " />
              <p
                className="absolute top-[8px] right-[5px] w-[15px] 
                h-[15px] rounded-[50%] bg-green-500 text-[10px] text-center !flex items-center justify-center text-white text-limit"
              >
                {cart.products.length}
              </p>
            </div>

            {user?.token
              ?
            <div onClick={() => setOpenDropdown(pre => !pre)} className="p-[10px] cursor-pointer ">
              {user?.avatar ? (
                <img
                  className="w-8 h-8 object-cover rounded-[50%] border border-gray-500 shadow-md"
                  src={`${URL_API}static/${user?.avatar}`}
                  alt=""
                />
              ) : (
                <RiUser3Line className="w-5 h-5  text-slate-700" />
              )}
              {openDropdown &&
              
                <div
                  id="dropdownDivider"
                  
                  className="absolute top-full left-0 -translate-x-1/2 block z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDividerButton"
                  >
                    <li>
                      <Link
                        to={'/user_profile'}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {user?.userName}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'/'}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => dispatch(userLogout())}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              }
            </div>
            :
            <div className="ml-2">
              <Link className="px-4 !text-white rounded-md hover:!text-white !py-2 bg-main" to={"/login"}>
                  Login
              </Link>
            </div>
            } 

            {/* mobile */}
            <div className="p-[10px] cursor-pointer relative lg:hidden md:hidden">
              {isClose ? (
                <RiMenuLine
                  onClick={() => setIsClose(false)}
                  className="w-5 h-5  text-slate-700"
                />
              ) : (
                <RiCloseFill
                  onClick={() => setIsClose(true)}
                  className="absolute right-[10px] top-[0] w-5 h-5 text-cyan-50 cursor-pointer z-[100000000000]"
                />
              )}
            </div>
          </div>
        </div>
      </Container>
      <Carts openCart={openCart} setOpenCart={setOpenCart} />
    </div>
  );
};

export default Header;
