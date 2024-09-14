import Image from "next/image";
import ProductCard from "./components/product-card";
import ParagraphWithImage from "./components/paragraph-with-image";
import CallToAction from "./components/call-to-action";
import MenuOffer from "./components/menu-offer";
import NavbarHomepage from "./components/navbar-homepage";
import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ContactForm from "./components/contact-form";

async function getContentfulContent() {
  const resContent = await client.getEntries({
    content_type: "products",
  });
  return resContent.items;
}

export default async function Home() {
  const contentfulProducts = await getContentfulContent();
  return (
    <main>
      <NavbarHomepage />
      <div className="mt-28 relative w-screen h-[300px] lg:h-[85vh] overflow-hidden">
        <Image
          src="/hero-image.jpg"
          alt="zdjęcie pracownika"
          fill={true}
          sizes={"100vw"}
          className="w-full object-cover object-top"
        />
        <h1
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-primaryOrange 
        [text-shadow:_7px_5px_20px_#000000]"
        >
          Tworzymy nową historię
        </h1>
      </div>
      <div className="w-[80%] text-xl font-bold mx-auto my-16">
        W pierwszej kolejności przedstawiamy Państwu nową odsłonę Sanacji. Na
        naszych talerzach zawitały NOWE SMAKI, opcje BEZGLUTENOWE oraz produkty
        BEZ LAKTOZY. W tym celu zapraszamy Państwa na degustację, która odbędzie
        się w naszym lokalu w Ostrowie Wielkopolskim przy ulicy Strzeleckiej 18
        już 28.września o godzinie 17:30. Piszemy nową historię Sanacji.
      </div>

      <MenuOffer />
      {/* <div className="w-[80%] mx-auto my-16 flex justify-between">
        <ProductCard
          productCardImg="/menu-sanacyjne-sm.jpg"
          alt=""
          productCardTitle="Sanacyjne"
          // productCardSubtitle="Złóż rezerwację"
          icon="/menu-sanacyjne-min.svg"
          href="/zarezerwuj"
        />
        <ProductCard
          productCardImg="/menu-vege.jpg"
          alt=""
          productCardTitle="Vege"
          // productCardSubtitle="Złóż rezerwację"
          icon="/menu-vege-min.svg"
          href="/zarezerwuj"
        />

        <ProductCard
          productCardImg="/menu-rybne.jpg"
          alt=""
          productCardTitle="Rybne"
          // productCardSubtitle="Złóż rezerwację"
          icon="/menu-rybne-min.svg"
          href="/zarezerwuj"
        />
      </div> */}

      <section className="pt-28" id="degustacja">
        <CallToAction
          title="Zamów stolik już dziś!"
          subtitle="28 września odbędzie się DEGUSTACJA!"
        />
      </section>

      <div className="relative w-screen h-[300px] lg:h-[440px] overflow-hidden">
        <Image
          src="/strona.internetowa-sanacja-2.jpg"
          alt="zdjęcie pracownika"
          fill={true}
          sizes={"100vw"}
          className="w-full object-cover"
        />
      </div>
      <div className="w-[80%] text-xl font-bold mx-auto my-16">
        Organizujemy dla Państwa{" "}
        <span className="text-primaryOrange">
          wieczórpełen spokoju, bogatych smaków i pięknej muzyki na żywo.{" "}
        </span>{" "}
        Już 28 września zapraszamy do spędzenia z nami sobotniego wieczoru
        kończącego lato. Dobre jedzenie, śpiew młodej artystki oraz lampki i
        powiew świeżego powietrza to coś, na co każdy zasługuje po tygodniu
        pracy. Daj się ponieść przyjemności i odwiedź nas 28 września.{" "}
        <span className="text-primaryOrange">Sprawdź menu poniżej!</span>
      </div>

      <ul>
        {contentfulProducts.map((contentfulProduct, i) => {
          return (
            <li key={i}>
              <ParagraphWithImage
                productCardImg={`https:${contentfulProduct.fields.image.fields.file.url}`}
                alt=""
                title={documentToReactComponents(
                  contentfulProduct.fields.title
                )}
                productCardTitle={contentfulProduct.fields.cardTitle}
                icon={`https:${contentfulProduct.fields.icon.fields.file.url}`}
                isFromContentful
                href="/zarezerwuj"
                contentfulProduct={contentfulProduct}
              >
                {documentToReactComponents(
                  contentfulProduct.fields.description
                )}
              </ParagraphWithImage>
              <hr className="w-screen h-1 text-black my-10" />
            </li>
          );
        })}
      </ul>

      <CallToAction
        title="Muzyka na żywo i jedzenie to coś co kochamy!"
        subtitle="Do zobaczenia na degustacji!"
      />
      <MenuOffer hasAdditionalContent />

      <section id="o-nas">
        <CallToAction
          title="Zamów stolik już dziś!"
          subtitle="Termin degustacji 28.09 godz. 17:30"
        />

        <div className="relative w-screen h-[300px] lg:h-[440px] overflow-hidden">
          <Image
            src="/sanacja-wnetrze.jpg"
            alt="zdjęcie pracownika"
            fill={true}
            sizes={"100vw"}
            className="w-full object-cover"
          />
          <h2
            className="xl:text-5xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-primaryOrange 
        [text-shadow:_7px_5px_20px_#000000]"
          >
            O nas
          </h2>
        </div>
        <ParagraphWithImage
          title={
            <>
              <span className="text-primaryOrange">Sanacja</span> to przede
              wszystkim intymność. To miejsce dla kogoś, kto{" "}
              <span className="text-primaryOrange">chce spędzić</span> ze swoimi
              bliskimi{" "}
              <span className="text-primaryOrange">wyjątkowy czas.</span>
            </>
          }
          productCardImg="/kasa-napiwkomat.jpg"
          icon="/sanacja-icon.svg"
          productCardTitle="Kasa fiskalna"
          productCardSubtitle="Napiwkomat"
          href="/"
          // productCardSubtitle="Złóż rezerwację"
        >
          <span className="text-primaryOrange">
            To co nas wyróznia nie lezy w posiłkach...
          </span>{" "}
          Serwujemy dania najwyzszej jakosci, które podajemy wprawnie na
          schludnych talerzach - TO FAKT.{" "}
          <span className="text-primaryOrange">ALE wyróznia nas </span> coś
          więcej niz spożywanie posiłków przyrządzonych przez fachowego kucharza
          w obcym miejscu. Nas wyróznia to własnie „obce” miejsce. Nasze{" "}
          <span className="text-primaryOrange">
            wnętrze emanujące historią lat 20. XX wieku
          </span>
          onieśmieliło juz niejednego. Zobaczą Państwo u nas poniemiecką kasę
          fiskalną z lat wojennych, gramofon, maszyny do pisania i wiele, wiele
          innych antyków z tamtych lat. Na antykach nie kończymy - dopiero nimi
          zaczynamy.
        </ParagraphWithImage>
        <hr className="w-screen h-1 text-black my-10" />
        <ParagraphWithImage
          title={
            <>
              <span className="text-primaryOrange">Sanacja</span> to muzyka.
              Koncerty, kolacje degustacyjne
              <span className="text-primaryOrange">
                winne i niewinne wieczory
              </span>{" "}
              dla par oraz grona znajomych
            </>
          }
          productCardImg="/sala-wiosenna.jpg"
          icon="/sanacja-icon.svg"
          productCardTitle="Sala klasyczna"
          productCardSubtitle="Miejsce dla artystów i muzyki na żywo"
          href="/zarezerwuj"
          // productCardSubtitle="Złóż rezerwację"
        >
          <p>
            Kto nie jest „winny” niech pierwszy wychyli kieliszek.{" "}
            <span className="text-primaryOrange">
              Wieczory, które zaciesniaja relacje miedzy ludzmi{" "}
            </span>{" "}
            to to, co lubimy najbardziej. Nie ma nic lepszego na wieczór niż
            lampka dobrego wina i{" "}
            <span className="text-primaryOrange">
              unoszący się zapach swieżo przygotowanego jedzenia.
            </span>
          </p>
          <p>
            Dla tych „niewinnych” co alkoholu nie piją,{" "}
            <span className="text-primaryOrange">
              serwujemy szeroką gamę świeżo wyciskanych soków{" "}
            </span>
            z naszej wyciskarki wolnoobrotowej KUVINGS D9900 Max Filter
            Technology. „Innowacyjna technologia zastosowana w modelu D9900
            sprawia, że sok staje się jeszcze bardziej gładki i aksamitny.” To
            nie nasze słowa, ale skoro producent tak pisze to...{" "}
            <span className="text-primaryOrange">
              - nic tylko przyjść do Sanacji i pić.
            </span>
          </p>
        </ParagraphWithImage>

        <ParagraphWithImage
          title={
            <>
              <span className="text-primaryOrange">Sanacja</span> to kunszt
              wielu projektantów z poprzednich dziesięcioleci.{" "}
              <span className="text-primaryOrange">Nowoczesny budynek,</span>{" "}
              który{" "}
              <span className="text-primaryOrange">kryje w sobie historię</span>
            </>
          }
          productCardImg="/sala-zimowa.jpg"
          icon="/sanacja-icon.svg"
          productCardTitle="Sala zimowa"
          productCardSubtitle="Miejsce dla tych, któzy najbardziej cenią spokój"
          href="/"
          // productCardSubtitle="Złóż rezerwację"
        >
          <span className="text-primaryOrange">
            Jesteśmy za unowocześnieniem
          </span>{" "}
          - unowocześniamy dania, składniki czy sposoby na spędzanie u nas
          czasu, ALE pielęgnujemy historię, która miała miejsce w stosunkowo
          niedalekiej przeszłosci.{" "}
          <span className="text-primaryOrange">Wierzymy, ze </span> w każdym
          „-leciu” są Ci, co cierpią i Ci, których{" "}
          <span className="text-primaryOrange">
            lata tętnią pełnią życia towarzystkiego, bez troski o{" "}
          </span>{" "}
          polityczne <span className="text-primaryOrange">rozrachunki</span>. W
          sanacji bierzemy przykład z tych drugich, z szacunkiem wspominając
          tych, którzy w latach 20. XX wieku poświęcili swoje życie dla większej
          idei. Sanacja jest jak odskocznia od dzisiejszych „szybkich” czasów.{" "}
          <span className="text-primaryOrange">
            Wchodzisz i zapominasz o codziennych zmartwieniach.{" "}
          </span>{" "}
          Nie wierzysz? Przyjdź i poczuj to na swojej skórze.
        </ParagraphWithImage>

        <ParagraphWithImage
          title={
            <>
              <span className="text-primaryOrange">Sanacja</span> to miejsce dla
              wielu, aby wspominać.{" "}
              <span className="text-primaryOrange">
                to, co w życiu najpiękniejsze,
              </span>{" "}
              z tymi, którzy są dla nas najważniejsi.
            </>
          }
          productCardImg="/wydarzenia-okolicznosciowe.jpg"
          icon="/sanacja-icon.svg"
          productCardTitle="Wydarzenia okolicznościowe"
          productCardSubtitle="Nic dodać - nic ująć, miłość"
          href="/"
          // productCardSubtitle="Złóż rezerwację"
        >
          <p>
            <span className="text-primaryOrange">
              Uwielbiamy przeżywać z Wami chwile,
            </span>{" "}
            które są dla Was najcenniejsze. Kochamy żyć w Waszej pamięci i
            napawać Wasze serca ciepłem{" "}
            <span className="text-primaryOrange">nawet po upływie czasu.</span>{" "}
            Nasze wnętrza są niezapomniane, eleganckie i mają w sobie magiczną
            intymność. To są właśnie te cechy, które{" "}
            <span className="text-primaryOrange">
              przekazujemy naszym gościom{" "}
            </span>{" "}
            w ważnych dla nich chwilach. Stajemy na wysokości powierzonego nam
            zadania. Na <span className="text-primaryOrange">momenty </span>{" "}
            wydarzeń stajemy się Waszą przestrzenią. To właśnie Wy przeżywacie u
            nas swoje momenty wzruszenia i radości - nawet Alpaki można do nas
            zaprosic.
          </p>
          <p>
            {" "}
            Dziękujemy Wam za zaufanie! To Wy tworzycie historię Sanacji -{" "}
            <span className="text-primaryOrange">
              to Wasze wydarzenia piszą naszą historie!{" "}
            </span>
          </p>
        </ParagraphWithImage>
      </section>
      <CallToAction
        title="Muzyka na żywo i jedzenie to coś co kochamy!"
        subtitle="Do zobaczenia na degustacji!"
      />
      <div className="relative w-screen h-[300px] lg:h-[460px] overflow-hidden">
        <Image
          src="/alpaki-cropped.jpg"
          alt="zdjęcie pracownika"
          fill={true}
          sizes={"100vw"}
          className="w-full object-cover object-top"
        />
      </div>
      <CallToAction
        title="Zamów stolik już dziś!"
        subtitle="Termin degustacji 28.09 godz. 17:30"
      />
      <MenuOffer hasAdditionalContent />

      <section className="pt-28" id="kontakt">
        <div className="relative w-screen h-[300px] lg:h-[440px] overflow-hidden">
          <Image
            src="/kontakt.jpg"
            alt="zdjęcie pracownika"
            fill={true}
            sizes={"100vw"}
            className="w-full object-cover"
          />
          <h2
            className="xl:text-5xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-primaryOrange 
        [text-shadow:_7px_5px_20px_#000000]"
          >
            Kontakt
          </h2>
        </div>

        <ParagraphWithImage
          title={
            <>
              <span className="block">
                <span className="text-primaryOrange">Telefon:</span>{" "}
                <a href="tel:+48790480410" className="whitespace-nowrap">
                  +48 790 480 410{" "}
                </a>
              </span>{" "}
              <span className="text-primaryOrange">ul. Strzelecka 18,</span>{" "}
              <span className="block whitespace-nowrap">
                63-400 Ostrów Wlkp.
              </span>
            </>
          }
          productCardImg="/wydarzenia-okolicznosciowe-kontakt.jpg"
          icon="/sanacja-icon.svg"
          productCardTitle="Wydarzenia okolicznościowe"
          productCardSubtitle="Wypełnij formularz"
          href="/"
          // productCardSubtitle="Złóż rezerwację"
        >
          <p>
            <span className="text-primaryOrange">Organizujemy wydarzenia </span>{" "}
            <b>na ponad 40 osób, jak i te kameralne</b>. Zadzwon, bądź wypełnij
            poniższy formularz.{" "}
            <span className="text-ptimaryOrange">
              Przystępność cenowa, piękne wnętrze i niezapomniana atmosfera{" "}
            </span>{" "}
            - czego chcieć więcej!{" "}
          </p>{" "}
          <p>
            Do usłyszenia nasz Drogi Czytelniku! Przekonaj się na własnej skórze
            czy{" "}
            <span className="text-primaryOrange">
              te piękne słowa mogą być naprawdę prawdziwe.
            </span>{" "}
          </p>{" "}
          <p>
            <span className="text-primaryOrange">PS.</span> Dla wtajemniczonych
            jesteśmy nastawieni także pokojowo.
          </p>
        </ParagraphWithImage>
      </section>
      <ContactForm />
    </main>
  );
}
