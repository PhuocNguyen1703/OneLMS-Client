"use client";

import bannerImage from "@/public/images/banner.webp";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative inset-x-0 top-0 w-full overflow-hidden ">
      <Image
        src={bannerImage}
        width={1819}
        height={850}
        alt="banner"
        className="w-full h-full max-h-[850px] object-cover object-center"
      />
      <h1 className="absolute top-[10rem] left-1/2 -translate-x-1/2  w-full max-w-5xl text-center text-primary text-6xl font-bold">
        Drive Your Adventure with Rainbow
        <br></br>
        Your Journey, Our Wheels
      </h1>
    </section>
  );
};

export default Banner;
