"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  children: ReactNode;
}
const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Link
        href={`https://api.whatsapp.com/send?phone=+62895801066893&text=Hallo Primafli!`}
        className="fixed flex items-center gap-2 bottom-4 right-4 rounded-full px-2 py-1 outline-none bg-green-500 text-white transition-opacity duration-200 z-10"
        target="_blank"
      >
        <FaWhatsapp size={35} className="rounded-full" />
        Hubungi Kami
      </Link>
    </>
  );
};

export default MainLayout;
