import Image from "next/image";
import car_desert from "@/public/images/car_desert.webp";
import car_forest from "@/public/images/car_forest.webp";
import { Button } from "../ui/button";

const WhyYouChoose = () => {
  return (
    <section className="flex justify-center gap-14 w-full bg-primary px-2 py-20 mt-[60px]">
      <div className="grid grid-cols-2 items-start gap-8">
        <Image
          src={car_forest}
          width={450}
          height={580}
          alt="car"
          className="rounded-xl"
        />
        <Image
          src={car_desert}
          width={450}
          height={580}
          alt="car"
          className="mt-16 rounded-xl"
        />
      </div>
      <div className="max-w-[540px] text-white">
        <h3 className="text-xl">Why you choose Rainbow rental</h3>
        <h1 className="text-5xl mt-3">
          Rent a car from local owner in your country
        </h1>
        <p className="mt-5 text-lg leading-8">
          Be inspired by our extensive range of motor homes available for hire,
          all of which are well-equipped to cater for you and your family&apos;s
          holiday adventure. Whether you are looking for a short break or a more
          extensive tour further afield, we have the perfect motor home for
          you.We cannot wait to rent one of our motor homes to you and with
          safety and hygiene top of our priority list, you can holiday with us
          in confidence.
        </p>
        <Button variant="secondary" className="mt-6 text-xl">
          Explore
        </Button>
      </div>
    </section>
  );
};

export default WhyYouChoose;
