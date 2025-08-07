import Link from "next/link";
import React from "react";
import { TbPhoneCall } from "react-icons/tb";

const Approuch = () => {
  return (
    <div className="bg-white">
      {/* Approach */}
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
        {/* Title */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-gray-800 font-semibold text-2xl md:text-4xl md:leading-tight">
            Pendekatan Kami di Primafli Technology Solution
          </h2>
          <p className="mt-1 text-neutral-400">
            Kami percaya bahwa setiap solusi digital yang sukses berawal dari
            pemahaman mendalam dan proses yang terstruktur. Kami tidak hanya
            membangun aplikasi, melainkan menjadi mitra strategis Anda dalam
            setiap tahapan pengembangan, memastikan hasil yang optimal dan
            berkelanjutan.
          </p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
            <img
              className="w-full object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Features Image"
            />
          </div>
          {/* End Col */}

          {/* Timeline */}
          <div>
            {/* Heading */}
            <div className="mb-4">
              <h3 className="text-gray-500 text-xs font-medium uppercase">
                Steps
              </h3>
            </div>
            {/* End Heading */}

            {/* Item */}
            <div className="flex gap-x-5 ms-1">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-500 font-semibold text-xs uppercase rounded-full">
                    1
                  </span>
                </div>
              </div>
              {/* End Icon */}

              {/* Right Content */}
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-neutral-400">
                  <span className="text-gray-800">
                    Konsultasi & Penemuan (Discovery):
                  </span>
                  Kami memulai dengan mendengarkan. Tim ahli kami akan bekerja
                  sama dengan Anda untuk memahami proses bisnis, kebutuhan
                  sistem, dan peluang yang ada.
                </p>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}

            {/* Item */}
            <div className="flex gap-x-5 ms-1">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-500 font-semibold text-xs uppercase rounded-full">
                    2
                  </span>
                </div>
              </div>
              {/* End Icon */}

              {/* Right Content */}
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm lg:text-base text-neutral-400">
                  <span className="text-gray-800">
                    Analisis Sistem & Perancangan (Analysis & Design):
                  </span>
                  Berdasarkan informasi dari tahap konsultasi, kami melakukan
                  analisis mendalam terhadap kebutuhan teknis dan fungsional.
                  Kami merancang arsitektur sistem yang kokoh, serta merencanakan setiap
                  detail untuk memastikan solusi yang tepat guna dan
                  berorientasi pengguna.
                </p>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}

            {/* Item */}
            <div className="flex gap-x-5 ms-1">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-500 font-semibold text-xs uppercase rounded-full">
                    3
                  </span>
                </div>
              </div>
              {/* End Icon */}

              {/* Right Content */}
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-neutral-400">
                  <span className="text-gray-800">
                    Pengembangan & Implementasi (Development &
                    Implementation):
                  </span>
                  Dengan blueprint yang jelas, tim pengembang kami mulai menulis
                  kode dan membangun aplikasi Anda dengan teknologi terbaru dan
                  praktik terbaik. Kami menjaga transparansi dalam proses ini,
                  dengan pembaruan rutin dan kesempatan untuk masukan. 
                </p>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}

            {/* Item */}
            <div className="flex gap-x-5 ms-1">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                <div className="relative z-10 size-8 flex justify-center items-center">
                  <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-gray-500 font-semibold text-xs uppercase rounded-full">
                    4
                  </span>
                </div>
              </div>
              {/* End Icon */}

              {/* Right Content */}
              <div className="grow pt-0.5 pb-8 sm:pb-12">
                <p className="text-sm md:text-base text-neutral-400">
                  <span className="text-gray-800">
                    Pengujian & Peluncuran (Testing & Deployment):
                  </span>
                  Kualitas adalah prioritas utama. Setiap fitur diuji secara
                  menyeluruh untuk memastikan fungsionalitas, keamanan, dan
                  kinerja yang optimal. Setelah melewati serangkaian pengujian
                  ketat dan mendapatkan persetujuan Anda, aplikasi siap untuk
                  diluncurkan ke pengguna akhir.
                </p>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}

          </div>
          {/* End Timeline */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default Approuch;
