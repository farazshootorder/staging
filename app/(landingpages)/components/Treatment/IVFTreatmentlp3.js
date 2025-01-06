import Image from 'next/image'
import React, { memo } from 'react'

const data = [
  {
    id: 1,
    title: "IVF - Invitro Fertilization",
    description:
      "IVF, where the best egg and sperm are fertilized with advanced techniques. The ovaries are stimulated with safe medications to produce more eggs and combine with healthy sperm to create embryos.",
    image: "/images/lp/treatments/updated/Infertility_Treatments/IVF.jpg",
  },
  {
    id: 2,
    title: "IVM - Invitro Maturation of Oocytes",
    description:
      "IVM, a specialised fertility treatment for women with PCOS. Immature eggs are collected from the ovaries, are matured in the lab and fertilized with healthy sperm to form an embryo.",
    image: "/images/lp/treatments/updated/Infertility_Treatments/IVM.png",
  }
]

// Optimized Image Component
const OptimizedImage = memo(({ src, alt, ...props }) => (
  <Image
    src={src}
    alt={alt}
    {...props}
    loading="lazy"
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRsdHR8fIR0hISEdISEhISEhISEiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    onError={(e) => {
      e.currentTarget.src = '/images/lp/fallback.jpg';
    }}
  />
));

OptimizedImage.displayName = 'OptimizedImage';

const IVFTreatmentlp3 = () => {
  return (
    <>
     <div className="w-full mt-6 lg:mt-8 flex gap-1 sm:gap-4 justify-center">
      {data.map((item) => (
        <>
          <div className="w-[300px] h-[340px] sm:h-[450px] flex flex-col px-3 py-4 bg-white rounded-[25px] transform hover:shadow-lg transition-all">
           
            <Image
              src={item.image}
              alt={item.title}
              width={316}
              height={199}
              className="rounded-xl mx-auto object-cover"
            />
            <h3 className="mt-3 lg:text-[26px] text-[22px] leading-[1.1]">
              {item.title}
            </h3>
            <p className="mt-2 lg:text-base text-xs font-lato">
              {item.description}
            </p>
          </div>
        </>
      ))}

      </div>
    </>
  )
}

export default IVFTreatmentlp3