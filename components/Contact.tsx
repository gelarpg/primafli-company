import React, { SyntheticEvent } from "react";
import { HiMiniArrowRight } from "react-icons/hi2";
import { TbMail, TbMap } from "react-icons/tb";

const Contact = () => {
  const handleSendMessage = (e: SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Kontak kami
          </h1>
          <p className="mt-1 text-gray-600">
            Kami senang untuk membantu Anda. Jangan ragu untuk menghubungi tim
            kami melalui formulir di bawah ini.
          </p>
        </div>

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458363.4042408648!2d107.77815345!3d-7.343325199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68a6a364a7c085%3A0x301e8f1fc28b8f0!2sKabupaten%20Garut%2C%20Jawa%20Barat!5e1!3m2!1sid!2sid!4v1754537997000!5m2!1sid!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg w-[30rem] h-[30rem]"
          ></iframe>
          <div className="divide-y divide-gray-200">
            {/* Icon Block */}
            <div className=" flex gap-x-7 py-6">
              <TbMap className="text-3xl text-gray-800" />
              <div className="grow">
                <h3 className="font-semibold text-gray-800">Alamat</h3>

                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800"
                  href="#"
                >
                  Garut, Jawa Barat, Indonesia
                  <HiMiniArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            {/* End Icon Block */}

            {/* Icon Block */}
            <div className=" flex gap-x-7 py-6">
              <TbMail className="text-3xl text-gray-800" />
              <div className="grow">
                <h3 className="font-semibold text-gray-800">
                  Hubungi kami lewat email
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Jika anda memiliki pertanyaan lebih lanjut, hubungi kami
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800"
                  href="#"
                >
                  example@site.com
                </a>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
