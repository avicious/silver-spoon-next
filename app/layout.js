import { Mukta, Italiana } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Form from "@/components/layout/form";

const mukta = Mukta({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const italiana = Italiana({
  weight: "400",
  variable: "--font-italiana",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Silver Spoon",
  description:
    "Silver Spoon is a popular multi-cuisine restaurant known for its delicious food and quick delivery. They offer home delivery, catering, and have multiple locations in Delhi and Gurgaon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mukta.className} ${italiana.variable}`}>
        <Header />
        {children}
        <Form />
        <Footer />
      </body>
    </html>
  );
}
