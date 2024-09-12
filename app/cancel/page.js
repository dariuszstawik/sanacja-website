import Link from "next/link";

export default function Success() {
  return (
    <section className="container my-32 max-w-lg mx-auto flex flex-col  justify-center items-center">
      <h1 className="text-center my-10">Twoje zamówienie zostało anulowane</h1>
      <Link href="/" className="">
        wróć do strony głównej
      </Link>
    </section>
  );
}
