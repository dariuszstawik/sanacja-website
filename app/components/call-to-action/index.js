import Link from "next/link";

export default function CallToAction({ title, subtitle }) {
  return (
    <div className="w-screen h-72 lg:h-32 bg-primaryGreen flex flex-col lg:flex-row justify-center gap-4 lg:justify-between items-center px-[10%] mx-auto">
      <img
        src="/arrow-asset-white.svg"
        alt="arrow"
        className="text-white mr-auto"
      />
      <Link href="/zarezerwuj">
        <h2 className="text-4xl text-primaryOrange">{title}</h2>
        <h3 className="text-4xl text-white">{subtitle}</h3>
      </Link>
    </div>
  );
}
