import Image from "next/image";

const TrustedBySection = () => {
  const brands = [
    { name: "LoveHolidays", logo: "/logos/1682521234-merchant-lovelyholidays-mode-black.svg.svg" },
    { name: "Voi", logo: "/logos/1665565526-merchant-voi-mode-black.svg.svg" },
    { name: "Printify", logo: "/logos/1684830083-merchant-printify-mode-black.svg.svg" },
    { name: "Veeps", logo: "/logos/1665565513-merchant-veeps-mode-black.svg.svg" },
    { name: "La Martina", logo: "/logos/1665565959-merchant-la-martina-mode-black.svg.svg" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
         
          <div className="mb-8 md:mb-0 md:w-1/3 text-center md:text-left">
            <p className="text-sm uppercase tracking-wider text-gray-700 font-medium">
              WE HAVE 500+ CUSTOMERS WORLDWIDE
            </p>
          </div>

          {/*  logos */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end gap-8 md:gap-12 lg:gap-16 md:w-2/3">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="h-12 flex items-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                style={{ width: "120px" }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={48}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
