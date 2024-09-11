export default function CallToAction({ title, subtitle }) {
  return (
    <div className="w-screen h-32 bg-primaryGreen flex justify-between items-center px-[10%] mx-auto">
      <img src="/arrow-asset-white.svg" alt="arrow" className="text-white" />
      <span>
        <h2 className="text-4xl text-primaryOrange">{title}</h2>
        <h3 className="text-4xl text-white">{subtitle}</h3>
      </span>
    </div>
  );
}
