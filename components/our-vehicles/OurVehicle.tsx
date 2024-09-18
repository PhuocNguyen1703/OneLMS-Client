"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import carImg from "@/public/images/car.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import {
  Briefcase,
  DoorClosed,
  EllipsisVertical,
  Heart,
  Star,
  UserRound,
} from "lucide-react";
import { Button } from "../ui/button";

const OurVehicle = () => {
  return (
    <section className="mt-[135px] max-w-[1140px] pb-[400px] px-10 mx-auto">
      <p>Our Vehicles</p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        centeredSlidesBounds={true}
        updateOnWindowResize={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.79,
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className=" my-[25px] px-5 border w-full h-[350px]"
      >
        <SwiperSlide className="!w-[550px] !h-[300px]">
          <Card className="relative w-full h-full border-primary">
            <CardHeader className="flex-row justify-between items-center pb-0">
              <CardTitle>Toyota Camry</CardTitle>
              <div className="flex items-center">
                <Heart />
                <EllipsisVertical />
              </div>
            </CardHeader>
            <div className="flex items-center gap-1 pl-6">
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
            </div>
            <CardContent className="relative py-6">
              <h6>8-speed Automatic</h6>
              <p>2.5L 4-Cylinder 203HP</p>
              <div>
                <p>Brand: Toyota</p>
                <p>Model: 2021</p>
              </div>
              <Image
                src={carImg}
                width={300}
                height={150}
                alt="car"
                className="absolute top-1/2 right-0 -translate-y-1/2 "
              />
            </CardContent>
            <CardFooter className="flex items-center gap-3 mb-5">
              <span className="flex items-center text-lg">
                <Briefcase /> 5
              </span>
              <span className="flex items-center text-lg">
                <UserRound />4
              </span>
              <span className="flex items-center text-lg">
                <DoorClosed />4
              </span>
            </CardFooter>
            <Button className="absolute left-6 -bottom-5">$90/Day</Button>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="!w-[550px] !h-[300px]">
          <Card className="relative w-full h-full border-primary">
            <CardHeader className="flex-row justify-between items-center pb-0">
              <CardTitle>Toyota Camry</CardTitle>
              <div className="flex items-center">
                <Heart />
                <EllipsisVertical />
              </div>
            </CardHeader>
            <div className="flex items-center gap-1 pl-6">
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
            </div>
            <CardContent className="relative py-6">
              <h6>8-speed Automatic</h6>
              <p>2.5L 4-Cylinder 203HP</p>
              <div>
                <p>Brand: Toyota</p>
                <p>Model: 2021</p>
              </div>
              <Image
                src={carImg}
                width={300}
                height={150}
                alt="car"
                className="absolute top-1/2 right-0 -translate-y-1/2 "
              />
            </CardContent>
            <CardFooter className="flex items-center gap-3 mb-5">
              <span className="flex items-center text-lg">
                <Briefcase /> 5
              </span>
              <span className="flex items-center text-lg">
                <UserRound />4
              </span>
              <span className="flex items-center text-lg">
                <DoorClosed />4
              </span>
            </CardFooter>
            <Button className="absolute left-6 -bottom-5">$90/Day</Button>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="!w-[550px] !h-[300px]">
          <Card className="relative w-full h-full border-primary">
            <CardHeader className="flex-row justify-between items-center pb-0">
              <CardTitle>Toyota Camry</CardTitle>
              <div className="flex items-center">
                <Heart />
                <EllipsisVertical />
              </div>
            </CardHeader>
            <div className="flex items-center gap-1 pl-6">
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
            </div>
            <CardContent className="relative py-6">
              <h6>8-speed Automatic</h6>
              <p>2.5L 4-Cylinder 203HP</p>
              <div>
                <p>Brand: Toyota</p>
                <p>Model: 2021</p>
              </div>
              <Image
                src={carImg}
                width={300}
                height={150}
                alt="car"
                className="absolute top-1/2 right-0 -translate-y-1/2 "
              />
            </CardContent>
            <CardFooter className="flex items-center gap-3 mb-5">
              <span className="flex items-center text-lg">
                <Briefcase /> 5
              </span>
              <span className="flex items-center text-lg">
                <UserRound />4
              </span>
              <span className="flex items-center text-lg">
                <DoorClosed />4
              </span>
            </CardFooter>
            <Button className="absolute left-6 -bottom-5">$90/Day</Button>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="!w-[550px] !h-[300px]">
          <Card className="relative w-full h-full border-primary">
            <CardHeader className="flex-row justify-between items-center pb-0">
              <CardTitle>Toyota Camry</CardTitle>
              <div className="flex items-center">
                <Heart />
                <EllipsisVertical />
              </div>
            </CardHeader>
            <div className="flex items-center gap-1 pl-6">
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
            </div>
            <CardContent className="relative py-6">
              <h6>8-speed Automatic</h6>
              <p>2.5L 4-Cylinder 203HP</p>
              <div>
                <p>Brand: Toyota</p>
                <p>Model: 2021</p>
              </div>
              <Image
                src={carImg}
                width={300}
                height={150}
                alt="car"
                className="absolute top-1/2 right-0 -translate-y-1/2 "
              />
            </CardContent>
            <CardFooter className="flex items-center gap-3 mb-5">
              <span className="flex items-center text-lg">
                <Briefcase /> 5
              </span>
              <span className="flex items-center text-lg">
                <UserRound />4
              </span>
              <span className="flex items-center text-lg">
                <DoorClosed />4
              </span>
            </CardFooter>
            <Button className="absolute left-6 -bottom-5">$90/Day</Button>
          </Card>
        </SwiperSlide>
        <SwiperSlide className="!w-[550px] !h-[300px]">
          <Card className="relative w-full h-full border-primary">
            <CardHeader className="flex-row justify-between items-center pb-0">
              <CardTitle>Toyota Camry</CardTitle>
              <div className="flex items-center">
                <Heart />
                <EllipsisVertical />
              </div>
            </CardHeader>
            <div className="flex items-center gap-1 pl-6">
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
              <Star size={16} />
            </div>
            <CardContent className="relative py-6">
              <h6>8-speed Automatic</h6>
              <p>2.5L 4-Cylinder 203HP</p>
              <div>
                <p>Brand: Toyota</p>
                <p>Model: 2021</p>
              </div>
              <Image
                src={carImg}
                width={300}
                height={150}
                alt="car"
                className="absolute top-1/2 right-0 -translate-y-1/2 "
              />
            </CardContent>
            <CardFooter className="flex items-center gap-3 mb-5">
              <span className="flex items-center text-lg">
                <Briefcase /> 5
              </span>
              <span className="flex items-center text-lg">
                <UserRound />4
              </span>
              <span className="flex items-center text-lg">
                <DoorClosed />4
              </span>
            </CardFooter>
            <Button className="absolute left-6 -bottom-5">$90/Day</Button>
          </Card>
        </SwiperSlide>

        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};

export default OurVehicle;
