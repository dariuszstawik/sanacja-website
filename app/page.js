import Image from "next/image";
import ProductCard from "./components/product-card";
import ParagraphWithImage from "./components/paragraph-with-image";
import CallToAction from "./components/call-to-action";
import MenuOffer from "./components/menu-offer";
import Navbar from "./components/navbar";
import NavbarHomepage from "./components/navbar-homepage";

export default function Home() {
  return (
    <main>
      <NavbarHomepage />
      <div className="pt-28 relative w-screen h-[300px] lg:h-screen overflow-hidden">
        <Image
          src="/strona.internetowa-sanacja-1.png"
          alt="zdjęcie pracownika"
          fill={true}
          sizes={"100vw"}
          className="w-full object-cover"
        />
      </div>
      <div className="w-[80%] text-xl font-bold mx-auto my-16">
        W pierwszej kolejności przedstawiamy Państwu nową odsłonę Sanacji. Na
        naszych talerzach zawitałyNOWE SMAKI, opcje BEZGLUTENOWE oraz produkty
        BEZLAKTOZY. W tym celu zapraszamy Państwana degustację, która odbędzie
        się w naszym lokalu w Ostrowie Wielkopolskim przy ulicy Strzeleckiej 18
        już28.września o godzinie 17:30. Piszemy nową historię Sanacji.
      </div>

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

      <section className="pt-28" id="degustacja">
        <div className="w-screen h-32 bg-primaryGreen flex justify-between items-center px-[10%] mx-auto">
          <img
            src="/arrow-asset-white.svg"
            alt="arrow"
            className="text-white"
          />
          <span>
            <h2 className="text-4xl text-primaryOrange">
              Zamów stolik już dziś!
            </h2>
            <h3 className="text-4xl text-white">
              28 września odbędzie się DEGUSTACJA!
            </h3>
          </span>
        </div>
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
      <div className="w-[80%] text-lg mx-auto my-16">
        Organizujemy dla Państwa wieczórpełen spokoju, bogatych smaków i pięknej
        muzyki na żywo.Już 28.września zapraszamy do spędzenia z nami sobotniego
        wieczoru kończącego lato. Dobre jedzenie,śpiew młodej artystki oraz
        lampki i powiew świeżego powietrza to coś, na co każdy zasługuje po
        tygodniupracy. Daj się ponieść przyjemności i odwiedź nas 28.
        września.Sprawdź menu poniżej!
      </div>
      <ParagraphWithImage
        title={
          <>
            Menu sanacyjne{" "}
            <span className="text-primaryOrange">
              dla prawdziwych smakoszy wykwintnego mięsa
            </span>
          </>
        }
        productCardImg="/menu-sanacyjne.jpg"
        icon="/menu-sanacyjne-min.svg"
        productCardTitle="Sanacyjne"
        href="/"
        // productCardSubtitle="Złóż rezerwację"
      >
        Sanacyjną wersje menu otwieraCARPACCIO WOŁOWE. Jest to rodzajprzystawki
        składającej się z bardzo cienko pokrojonego mięsa wołowegoułożonego na
        liściach rukoli oraz dodatków takich jak oliwki i kapary. Oczywiścienie
        może zabraknąć również parmezu.Mniam!Głównym daniem są nasze
        pokazowePoLIKI WOŁOWE. KRuche, soczystei rozpływające się w ustach mięso
        polane sosem borowikowym na bazie śmietany.Bukiet grillowanych warzyw
        otula mięso ułożone na kaszy z kawałkami papryczki.Jeżeli jeszcze nie
        spróbowaliście naszych policzków to najwyższy czas o zmienić.Jakość
        gwarantowana!Na koniec uczty „dla smakoszy mięsa” mamy w
        zanadrzuszarlOTKĘ. RÓWniekrucha słodycz, która na talerzu podana jest w
        towarzystwie gałki lodówwaniliowych.Słodkości nigdy nie za wiele!
      </ParagraphWithImage>
      <hr className="w-screen h-1 text-black my-10" />
      <ParagraphWithImage
        title={
          <>
            Menu Vege{" "}
            <span className="text-primaryOrange">
              podobno dla tych, któym ciężko dogodzić smakiem!
            </span>
          </>
        }
        productCardImg="/menu-vege.jpg"
        icon="/menu-vege-min.svg"
        productCardTitle="Vege"
        href="/"
        // productCardSubtitle="Złóż rezerwację"
      >
        Wegetariańskie menu na dobre zawitało w naszej restauracji. Początkiem
        nowej,bezmięsnej historii w Sanacji jestPASTA Z AVOCADO z włoskimi
        paluchami, serwowana z oliwą i czarnym sezamem. Głęboki, maślany smak
        idealnieprzygotuje wasze podniebienia do tego, co czeka na was w daniu
        głównym.Dalikatnie, lecz z pazurem smaku!GnOCCHITO nasze danie główne w
        wersji „Vege”. Głęboki smak parmezanu,suszonych pomidorów przełamany
        szpinakiem.Nic dodać - nic ująć, pychota!Ze słodkości mamy w tym
        menubezę. NIE ma nic słodszego, co mogłobyzamknąć wasze kubki smakowe.
        Do bezy oczywiście niezastąpione w swym smakui towarzystwie:maliny i
        truskawki.SłODko - kwaśno!
      </ParagraphWithImage>

      <hr className="w-screen h-1 text-black my-10" />
      <ParagraphWithImage
        title={
          <>
            Menu Rybne{" "}
            <span className="text-primaryOrange">
              dla tych, co kochają delikatność!
            </span>
          </>
        }
        productCardImg="/menu-rybne.jpg"
        icon="/menu-rybne-min.svg"
        productCardTitle="Rybne"
        href="/"
        // productCardSubtitle="Złóż rezerwację"
      >
        Czy widzicie teGRZANECZKI Z ŁOSOSIEM? Czyste orzeźwienie smakowe.To
        właśnie nimi otwieramy naszą ostatnią propozycję menu
        degustacyjnego.Łosoś w towarzystwie granatu i truskawki...Yes,
        please!Główne danie -dorSZ W SOSIE POROWO-WINNYM PODany na ryżu z
        grillowaną fasolką szparagową, marchewką i brokułem.Kompozycja
        pełnasmaków!Do delikatności ryb nic tak nie pasuje jak kwaśne i lekkie
        przełamanie.AutorsKIE LODY JEŻYNOWE PRZYGOtowywane przez nas na miejscu.
        Niskokaloryczne desery to jest to!
      </ParagraphWithImage>

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
          productCardImg="/menu-sanacyjne.jpg"
          icon="/sanacja-icon.svg"
          productCardTitle="Kasa fiskalna"
          productCardSubtitle="Napiwkomat"
          href="/"
          // productCardSubtitle="Złóż rezerwację"
        >
          To co nas wyróznia nie lezy w posiłkach... Serwujemy dania najwyzszej
          jakosci, które podajemy wprawnie na schludnych talerzach - TO FAKT.
          ALE wyróznia nas cos wiecej niz spozywanie posiłków przyrzadzonych
          przez fachowego kucharza w obcym miejscu. Nas wyróznia to własnie
          „obce” miejsce. Nasze wnetrze emanujace historia lat 20. XX wieku
          oniesmiło juz niejednego. Zobacza Panstwo u nas poniemiecka kasę
          fiskalną z lat wojennych, gramofon, maszyny do pisania i wiele, wiele
          innych antyków z tamtych lat. Na antykach nie konczymy - dopiero nimi
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
          productCardTitle="Sala wiosenna"
          productCardSubtitle="Miejsce dla artystów i muzyki na żywo"
          href="/"
          // productCardSubtitle="Złóż rezerwację"
        >
          Kto nie jest „winny” niech pierwszy wychyli kieliszek. Wieczory, które
          zaciesniaja relacje miedzy ludzmi to to, co lubimy najbardziej. Nie ma
          nic lepszego na wieczór niz lampka dobrego wina i unoszacy sie zapach
          swiezo przygotowanego jedzenia. Dla tych „niewinnych” co alkoholu nie
          pija, serwujemy szeroka game swiezo wyciskanych soków z naszej
          wyciskarki wolnoobrotowej KUVINGS D9900 Max Filter Technology.
          „Innowacyjna technologia zastosowana w modelu D9900 sprawia, ze sok
          staje sie jeszcze bardziej gładki i aksamitny.” To nie nasze słowa,
          ale skoro producent tak pisze to... - nic tylko przyjsc do Sanacji i
          pic.
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
          Jestesmy za unowoczesnieniem - unowoczesniamy dania, składniki czy
          sposoby na spedzanie u nas czasu, ALE pielegnujemy historie, która
          miała miejsce w stosunkowo niedalekiej przeszłosci. Wierzymy, ze w
          kazdym „-leciu” sa Ci, co cierpia i Ci, których lata tetnia pełnia
          zycia towarzystkiego, bez troski o polityczne rozrachunki. W sanacji
          bierzemy przykład z tych drugich, z szacukiem wspominajac tych, którzy
          w lata 20. XX wieku poswiecili swoje zycie dla wiekszej idei. Sanacja
          jest jak odskocznia od dzisiejszych „szybkich” czasów. Wchodzisz i
          zapominasz o codziennych zmartwieniach. Nie wierzysz? Przyjdz i poczuj
          to na swojej skórze.
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
          Uwielbiamy przezywac z Wami chwile, które sa dla Was najcenniejsze.
          Kochamy zyc w Waszej pamieci i napawac Wasze serca ciepłem nawet po
          upływie czasu. Nasze wnetrza sa niezapomniane, eleganckie i maja w
          sobie magiczna intymnosc. To sa własnie te cechy, które przekazujemy
          naszym gosciom w waznych dla nich chwilach. Stajemy na wysokosci
          powierzonego nam zadania. Na momenty wydarzen stajemy sie Wasza
          przestrzenia. To własnie Wy przezywacie u nas swoje momenty wzruszenia
          i radosci - nawet Alpaki mozna do nas zaprosic. Dziekujemy Wam za
          zaufanie! To Wy tworzycie historie Sanacji - to Wasze wydarzenia pisza
          nasza historie!
        </ParagraphWithImage>
      </section>
      <CallToAction
        title="Muzyka na żywo i jedzenie to coś co kochamy!"
        subtitle="Do zobaczenia na degustacji!"
      />
      <div className="relative w-screen h-[300px] lg:h-[440px] overflow-hidden">
        <Image
          src="/alpaki.jpg"
          alt="zdjęcie pracownika"
          fill={true}
          sizes={"100vw"}
          className="w-full object-cover"
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
        </div>

        <ParagraphWithImage
          title={
            <>
              <span className="block">
                <span className="text-primaryOrange">Telefon:</span> +48 790 480
                410{" "}
              </span>{" "}
              <span className="text-primaryOrange">ul. Strzelecka 18,</span>{" "}
              63-400 Ostrów Wlkp.
            </>
          }
          productCardImg="/wydarzenia-okolicznosciowe-kontakt.jpg"
          icon="/sanacja-icon.svg"
          productCardTitle="Wydarzenia okolicznościowe"
          productCardSubtitle="Wypełnij formularz"
          href="/"
          // productCardSubtitle="Złóż rezerwację"
        >
          Organizujemy wydarzenia na ponad 40 osób, jak i te kameralne. Zadzwon,
          badz wypełnij ponizszy formularz. Przystepnosc cenowa, piekne wnetrze
          i niezapomniana atmosfera - czego chciec wiecej! Do usłyszenia nasz
          Drogi Czytelniku! Przekonaj sie na własnej skórze czy te piekne słowa
          moga byc naprawde prawdziwe. PS. Dla wtajemniczonych jestesmy
          nastawieni takze pokojowo
        </ParagraphWithImage>
      </section>
    </main>
  );
}
