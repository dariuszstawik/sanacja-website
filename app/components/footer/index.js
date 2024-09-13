"use client";
import Logo from "../logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="container mt-auto px-16 pt-16 pb-8 w-full mx-auto bg-primaryGreen">
      <div className="w-[80%] mx-auto flex flex-col xl:flex-row xl:justify-between xl:items-center bg-primaryGreen">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10 bg-primaryGreen">
          <Logo />
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <a href="https://www.facebook.com/SanacjaOstrow" target="_blank">
              <Image
                src="/fb-icon.svg"
                width="64"
                height="64"
                alt="facebook"
                className="w-10 h-10"
              />
            </a>
            <a href="https://www.facebook.com/smartequestrain/" target="_blank">
              <Image
                src="/messenger-icon.svg"
                width="64"
                height="64"
                alt="messenger"
                className="w-10 h-10"
              />
            </a>
            <a href="https://www.instagram.com/sanacja.rest/" target="_blank">
              <Image
                src="/instagram-icon.svg"
                width="64"
                height="64"
                alt="instagram"
                className="w-10 h-10"
              />
            </a>
            <a href="https://wa.me/48790480410" target="_blank">
              <Image
                src="/whatsapp-icon.svg"
                width="64"
                height="64"
                alt="whatsapp"
                className="w-10 h-10"
              />
            </a>

            {/* <a href="https://www.tiktok.com/@smart_equestrian" target="_blank"> */}
            <Image
              src="/tiktok-icon.svg"
              width="64"
              height="64"
              alt="tiktok"
              className="w-10 h-10"
            />
            {/* </a> */}

            {/* <a
              href="https://www.youtube.com/@smartequestrian3953"
              target="_blank"
            >
              <Image
                src="/yb-icon.svg"
                width="64"
                height="64"
                alt="youtube"
                className="w-10 h-10"
              />
            </a> */}
            {/*             
            <a
              href="https://www.linkedin.com/company/smart-equestrian/"
              target="_blank"
            >
              <Image
                src="/linkedin-icon.svg"
                width="64"
                height="64"
                alt="linkedin"
                className="w-10 h-10"
              />
            </a> */}
          </div>
        </div>
        <div className="mx-auto mt-6 text-sm lg:text-base flex flex-col justify-center items-center md:flex-row md:justify-end">
          <Link
            className="p-4 text-primaryOrange"
            href={`/polityka-prywatnosci`}
          >
            Polityka prywatności
          </Link>
          <Link className="p-4 text-primaryOrange" href={`/regulamin`}>
            Regulamin
          </Link>
        </div>
      </div>
      <div className="w-full mt-4 mb-8 flex justify-center items-center text-sm lg:text-base">
        <p className="mx-auto text-center text-white">
          © 2023 Sanacja. Created by Aleksandra Grzybkowska &
          <a
            href="https://stronyjaksiepatrzy.pl"
            className="text-primaryOrange"
          >
            {" "}
            Strony jak się patrzy
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
