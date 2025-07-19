import React from 'react'

const Hero = () => {
  return (
    <div className="overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
          <h1 className="font-semibold text-gray-600 text-5xl md:text-6xl">
            <span className="text-gray-800 ">Primafli:</span> Transforming ideas
            into reality
          </h1>
          <div className="mt-5 max-w-4xl">
            <p className="text-neutral-400 text-lg">
              It is a creative hub where imagination meets craftsmanship to
              transform ideas into tangible realities. At Primafli, we
              specialize in turning conceptual visions into concrete forms,
              whether it be through design, artistry, or technological
              innovation.
            </p>
          </div>
        </div>
      </div>
  )
}

export default Hero