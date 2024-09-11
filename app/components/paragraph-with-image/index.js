import Image from "next/image";
import ProductCard from "../product-card";
import OrderBar from "../order-bar";

export default function ParagraphWithImage({
  title,
  icon,
  whiteIcon,
  hasNoTitleIcon,
  productCardImg,
  productCardTitle,
  productCardSubtitle,
  img,
  href,
  isRed,
  hasGrayBg,
  children,
  locale,
  hasOrderBar,
  isFromContentful,
  stripeProduct,
  contentfulProduct,
}) {
  return (
    <div
      className={`w-screen ${hasGrayBg && "bg-primaryGray"} overflow-x-hidden`}
    >
      <section
        className={`${
          img ? "w-[100%]" : "w-[80%]"
        } mx-auto py-8 lg:py-16 flex flex-col lg:flex-row gap-16 lg:justify-center lg:items-center
      }`}
      >
        {img ? (
          <div className="relative w-[530px] h-[488px] shrink-0">
            <img src={img} alt="asset" className="absolute -top-20 left-0" />
          </div>
        ) : (
          <ProductCard
            productCardImg={productCardImg}
            productCardTitle={productCardTitle}
            icon={icon}
            whiteIcon={whiteIcon}
            href={href}
            productCardSubtitle={productCardSubtitle}
            isRed={isRed}
            locale={locale}
            isFromContentful={isFromContentful}
          />
        )}

        <div
          className={`${
            img && "w-[80%] lg:pr-16 xl:pr-32 mx-auto -mt-20 lg:mt-0"
          } flex flex-col grow`}
        >
          <div className="flex gap-12 lg:gap-16 mb-9">
            <div className="space-y-8">
              <img src="/arrow-asset.svg" alt="arrow" className="" />
              {isFromContentful ? (
                <div className="mt-auto leading-tight">{title}</div>
              ) : (
                <h2 className="mt-auto leading-tight">{title}</h2>
              )}
            </div>
          </div>
          <div>{children}</div>
          {hasOrderBar && (
            <OrderBar
              stripeProduct={stripeProduct}
              contentfulProduct={contentfulProduct}
            />
          )}
        </div>
      </section>
    </div>
  );
}
