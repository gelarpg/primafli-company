import MainLayout from "@/layout/MainLayout";
import { getProducts } from "@/lib/dataMaster";
import Link from "next/link";
import React from "react";
export async function generateMetadata() {
  const title = "Primafli | Permudah Perjalanan Bisnis Anda";
  const description = `Primafli adalah perusahaan teknologi yang berfokus pada inovasi digital untuk membantu bisnis Anda berkembang di era digital.`;

  return {
    title: title,
    description,
    openGraph: {
      title: title,
      description,
      images: [
        {
          url: "/image/brand.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description,
      images: ["/image/brand.png"],
    },
  };
}
export default function Page() {
  const products = getProducts();
  return (
    <MainLayout>
      <div className="max-w-7xl lg:mx-auto mx-2 mb-32">
        <h1 className="text-lg text-gray-800 mt-16">Produk Kami</h1>
        <span className="text-sm text-gray-600 ">Hubungi kami untuk akun demo</span>
        <hr className="pb-3 text-gray-200" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Link
              key={product.id}
              className="bg-white border border-gray-200 hover:shadow-md rounded-lg p-4 text-gray-700 hover:text-sky-700 cursor-pointer"
              href={product.url}
              target="_blank"
            >
              <img
                src={`https://api.microlink.io/?url=${encodeURIComponent(
                  product.url
                )}&screenshot=true&embed=screenshot.url`}
                alt={product.name}
                className="rounded-lg w-full h-32 object-cover pointer-events-none select-none"
              />

              <p className="text-lg font-semibold">{product.name}</p>
              <p className="text-gray-600">{product.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
