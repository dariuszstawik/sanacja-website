"use client";
import React, { useState } from "react";
import Link from "next/link";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Logo from "../logo";
import Hamburger from "../hamburger";
import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "../shopping-cart-icon";
import navbarData from "../navbar/navbarData";

const NavbarHomepage = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const cartItems = useSelector((state) => state.cart);

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  return (
    <div className="font-poppins bg-primaryGreen text-primaryOrange border-t-4 border-t-forestgreen-300 text-xl antialiased fixed w-screen h-28 flex justify-between items-center px-10 lg:px-28 py-4 top-0 left-0 z-50">
      <Logo closeMobileMenu={closeMobileMenu} />
      <div className="pl-16 w-full flex justify-end content-center items-center gap-6">
        <ul
          className={
            isMobileMenuActive
              ? "bg-primaryGreen list-none absolute z-40 w-screen top-full left-0 py-4 flex flex-col justify-center align-center items-center gap-10 lg:static lg:flex-row"
              : " list-none flex-col justify-center align-center items-center gap-10 lg:flex-row my-4 hidden lg:flex lg:justify-end ml-4"
          }
        >
          {navbarData.map((nav) => {
            const isActive = pathname === nav.path;

            return (
              <li
                key={nav.id}
                className={`${
                  nav.button ? "text-base" : "text-lg"
                } text-primaryOrange hover:text-white cursor-pointer ${
                  isActive && "text-primaryGreen"
                }}`}
              >
                <Link
                  href={nav.path}
                  onClick={(e) => {
                    closeMobileMenu();
                    {
                      nav.scroll && handleScroll(e);
                    }
                  }}
                  className={`${isActive && "text-white"}`}
                >
                  {nav.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href={`/cart-page`}>
          <ShoppingCartIcon itemCount={cartItems.length} />
        </Link>
        <Hamburger
          hasCloseIcon={isMobileMenuActive ? true : false}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </div>
  );
};

export default NavbarHomepage;
