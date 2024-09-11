import Image from "next/image";

const BuyButton = ({ onClick }) => {
  return (
    <button
      className="py-2 px-6 m-6 text-base uppercase border border-smartOrange rounded-full flex justify-center items-center gap-4 bg-smartOrange hover:bg-orange-300 active:bg-smartOrange transition transition-duration-300"
      onClick={onClick}
    >
      <Image
        src="/cart-icon.svg"
        width="61"
        height="52"
        className="w-6"
        alt="buy"
      />
      Dodaj do koszyka
    </button>
  );
};

export default BuyButton;
