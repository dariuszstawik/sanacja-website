// import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import { Providers } from "./GlobalRedux/provider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanacja Cafe & Rest",
  description:
    "Restauracja w Ostrowie Wielkopolskim. Klimatyczne miejsce do jedzenia wśród domów jednorodzinnych.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
