import Approuch from "@/components/Approuch";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Primafli",
  description: "Simplify your life with Technology",
};
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Services />
      <Review />
      <Testimonial />
      <Approuch />
      <Contact />
      <Footer />
    </>
  );
}
