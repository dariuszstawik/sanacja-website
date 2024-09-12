import Link from "next/link";

export default function Success() {
  return (
    <section className="container my-32 max-w-lg mx-auto flex flex-col  justify-center items-center">
      <h1 className="text-center my-10">
        Dziękujemy za złożenie zamówienia - widzimy się na degustacji 28
        września!
      </h1>
      <Link href="/">wróć do strony głównej</Link>
    </section>
  );
}
