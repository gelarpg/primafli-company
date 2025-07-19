import React from 'react'

const Review = () => {
  return (
   <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 ">
        {/* Title */}
        <div className="max-w-2xl text-start mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            Primafli Reviews
          </h2>
          <p className="mt-1 text-gray-600">
            See how game-changing companies are making the most of every
            engagement with Preline.
          </p>
        </div>
        {/* End Title */}
        {/* Card Blog */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 sm:items-center gap-8">
            <div className="sm:order-2">
              <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
                <img
                  className="size-full absolute top-0 start-0 object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Blog Image"
                />
              </div>
            </div>
            {/* End Col */}

            <div className="sm:order-1">
              <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800">
                <a
                  className="hover:text-blue-600 focus:outline-hidden focus:text-blue-600"
                  href="#"
                >
                  To say that switching to Primafli has been life-changing is an
                  understatement. My business has tripled since then.
                </a>
              </h2>

              {/* Avatar */}
              <div className="mt-6 sm:mt-10 flex items-center">
                <div className="shrink-0">
                  <img
                    className="size-10 sm:h-14 sm:w-14 rounded-full"
                    src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Blog Image"
                  />
                </div>

                <div className="ms-3 sm:ms-4">
                  <p className="sm:mb-1 font-semibold text-gray-800">
                    Louise Donadieu
                  </p>
                  <p className="text-xs text-gray-500">
                    Strategic Marketing Consultant
                  </p>
                </div>
              </div>
              {/* End Avatar */}

              <div className="mt-5">
                <a
                  className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
                  href="#"
                >
                  Read more
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Card Blog */}
      </div>
  )
}

export default Review