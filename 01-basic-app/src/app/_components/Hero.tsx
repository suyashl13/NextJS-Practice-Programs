import Image, { StaticImageData } from "next/image";
import React from "react";

export default function Hero({
  imgData,
  imgAlt,
  title,
}: {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}) {
  return <div className="relative h-screen">
    <div className="absolute -z-10 inset-0">
      <Image 
        src={imgData}
        alt={imgAlt}
        fill
        style={{objectFit: 'cover'}}
      />
      </div>
      <div className="flex justify-center place-items-center items-center h-[100vh]">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
  </div>;
}
