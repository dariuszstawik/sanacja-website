import ProductCard from "../product-card";

export default function MenuOffer({ hasAdditionalContent }) {
  return (
    <>
      <div className="w-[80%] mx-auto my-16 flex justify-between">
        <ProductCard
          productCardImg="/menu-sanacyjne.jpg"
          alt=""
          productCardTitle="Sanacyjne"
          // productCardSubtitle="Złóż rezerwację"
          icon="/menu-sanacyjne-min.svg"
          href="/"
        />
        <ProductCard
          productCardImg="/menu-vege.jpg"
          alt=""
          productCardTitle="Vege"
          // productCardSubtitle="Złóż rezerwację"
          icon="/menu-vege-min.svg"
          href="/"
        />

        <ProductCard
          productCardImg="/menu-rybne.jpg"
          alt=""
          productCardTitle="Rybne"
          // productCardSubtitle="Złóż rezerwację"
          icon="/menu-rybne-min.svg"
          href="/"
        />
      </div>
      {hasAdditionalContent && (
        <div className="w-[80%] text-lg mx-auto my-16">
          Ważne: Prosimy o podanie ilości osób przy jednym stole podczas
          dokonywania płatności, bądź kontakttelefoniczny/mailowy w celu
          uzupełnienia tej informacji. Z góry dziękujemy!
        </div>
      )}
    </>
  );
}
