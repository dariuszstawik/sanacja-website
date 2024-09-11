"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BuyButton from "../buy-button";
import { addToCart, increaseCartItemAmount } from "@/app/GlobalRedux/store";

export default function OrderBar({ stripeProduct, contentfulProduct }) {
  console.log("..............");
  console.log(stripeProduct);
  console.log(contentfulProduct);

  const dispatch = useDispatch();
  const selectedCart = useSelector((state) => state.cart);

  const [productAmount, setProductAmount] = useState(1);

  return (
    <div className="pl-4 flex flex-wrap gap-6 items-center justify-center pt-2">
      <h3>
        cena <span className="w-10" />
        <span className="text-smartOrange">
          {(stripeProduct[0].unit_amount / 100).toFixed(2) + " "}
          zł{" "}
        </span>
      </h3>

      <div className="text-lg lg:text-xl">
        <span
          className="px-4 cursor-pointer"
          onClick={() =>
            productAmount > 1 && setProductAmount(productAmount - 1)
          }
        >
          -
        </span>
        {productAmount} szt.
        <span
          className="px-4 cursor-pointer"
          onClick={() => setProductAmount(productAmount + 1)}
        >
          +
        </span>
      </div>

      <BuyButton
        type="submit"
        onClick={() => {
          !selectedCart.some(
            (product) => product.product.id === stripeProduct[0].id
          )
            ? dispatch(
                addToCart({
                  product: stripeProduct[0],
                  amount: productAmount,
                })
              )
            : dispatch(
                increaseCartItemAmount({
                  product: stripeProduct[0],
                  amount: productAmount,
                })
              );
        }}
      />
    </div>
  );
}
