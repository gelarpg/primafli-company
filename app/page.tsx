import Approuch from "@/components/Approuch";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MainLayout from "@/layout/MainLayout";

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

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Clients />
      <Services />
      {/* <Review /> */}
      {/* <Testimonial /> */}
      <Approuch />
      <Contact/>
    </MainLayout>
  );
}
