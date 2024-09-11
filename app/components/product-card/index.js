"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductCard({
  productCardImg,
  alt,
  productCardTitle,
  productCardSubtitle,
  icon,
  whiteIcon,
  isRed,
  href,
  isInCarousel,
  locale,
  isFromContentful,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${
        isInCarousel
          ? "w-[372px] xl:w-[300px] 2xl:w-[372px]"
          : "w-[310px] lg:w-[372px]"
      }  h-[488px] flex flex-col border-[1px] border-black rounded-xl overflow-hidden shrink-0 ${
        isRed
          ? isHovered &&
            "bg-primaryRed hover:shadow-2xl transition-all duration-200"
          : isHovered &&
            "bg-primaryYellow hover:shadow-2xl transition-all duration-200"
      }   `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[312px] overflow-hidden relative">
        <Image
          src={productCardImg ? productCardImg : "/plyta-budowlana-osb.png"}
          // width={500}
          // height={500}
          fill
          sizes={312}
          alt={alt ? alt : "product-card"}
          className="min-h-full object-cover"
        />
      </div>
      <div
        className={`border-t-[1px] border-t-black grow  ${
          isHovered ? "bg-primaryGreen" : "bg-transparent"
        }
        }`}
      >
        <div
          className={`w-20 h-20 ${
            isRed
              ? isHovered
                ? "bg-white"
                : "bg-primaryRed"
              : isHovered
              ? "bg-primaryOrange"
              : "bg-primaryGreen"
          } flex justify-center items-center border-[1px] border-black rounded-full mx-auto -translate-y-1/2`}
        >
          <img
            src={isHovered ? icon : whiteIcon ? whiteIcon : icon}
            alt="asset"
            className={`object-cover w-8 `}
          />
        </div>
        <div
          className={`flex flex-col justify-center items-center gap-2 grow -translate-y-1/4 px-6 ${
            isHovered && "text-white"
          }`}
        >
          <h4 className="text-center">{productCardTitle}</h4>
          {productCardSubtitle ? (
            <span className="text-primaryOrange text-center">
              {productCardSubtitle}
            </span>
          ) : href ? (
            <Link
              href={href ? href : "/zarezerwuj"}
              className="text-primaryOrange"
            >
              Złóż rezerwację
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
