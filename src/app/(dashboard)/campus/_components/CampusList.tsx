import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Label } from "@/shared/components/ui/label";
import { noImagePlaceholder } from "@/public/images";
import {
  ClipboardPenLine,
  ContactRound,
  EllipsisVertical,
  GraduationCap,
  House,
  MapPin,
  MapPinHouse,
  UsersRound,
} from "lucide-react";
import Image from "next/image";

const campusList = [
  {
    campusId: "CP-101",
    name: "Station Campus",
    cover:
      "https://images.unsplash.com/photo-1651238827881-7cf9aeaedde4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "09061083455",
    email: "station@/gmail.com",
    address: "6506 Runte Square, East Shenita, AR 96772",
    teacher: 25,
    student: 150,
    room: 18,
  },
  {
    campusId: "CP-102",
    name: "Rainbow Campus",
    cover:
      "https://images.unsplash.com/photo-1652487308772-83c91cdd5dc4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "09061083455",
    email: "rainbow@/gmail.com",
    address: "Apt. 953 4436 Kayla Glens, Hellerstad, FL 11425",
    teacher: 25,
    student: 150,
    room: 18,
  },
  {
    campusId: "CP-103",
    name: "Sunny Campus",
    cover:
      "https://images.unsplash.com/photo-1720245550369-a008c0b9375e?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "09061083455",
    email: "sunny@/gmail.com",
    address: "Suite 694 1399 Rafael Dale, Port Solomon, IN 14763-2547",
    teacher: 25,
    student: 150,
    room: 18,
  },
  {
    campusId: "CP-104",
    name: "rainy Campus",
    cover:
      "https://images.unsplash.com/photo-1716625862188-f421d41bfb66?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "09061083455",
    email: "rainy@/gmail.com",
    address: "Suite 621 4528 Herman Rapids, Nolanmouth, NC 35068-3384",
    teacher: 25,
    student: 150,
    room: 18,
  },
  {
    campusId: "CP-105",
    name: "Island Campus",
    cover:
      "https://images.unsplash.com/photo-1702368708477-284bbdc2b595?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "09061083455",
    email: "island@/gmail.com",
    address: "7019 Shantay Mount, North August, AK 48987-5715",
    teacher: 25,
    student: 150,
    room: 18,
  },
  {
    campusId: "CP-106",
    name: "Denmark Campus",
    cover:
      "https://images.unsplash.com/photo-1706016897942-c63593d76754?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "09061083455",
    email: "denmark@/gmail.com",
    address: "744 Mueller View, Lake Bryonburgh, UT 32212-7714",
    teacher: 25,
    student: 150,
    room: 18,
  },
];

const CampusList = () => {
  return (
    <div className="flex flex-wrap gap-4 px-2 py-1 max-h-fit overflow-y-auto">
      {campusList.map((campus) => (
        <Card key={campus.campusId} className="w-[350px]">
          <CardHeader className="relative p-0 w-full h-[200px]">
            <Image
              src={campus.cover || noImagePlaceholder}
              fill
              sizes="100%"
              priority
              alt="cover"
              className="object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent className="flex flex-col p-4">
            <h3 className="text-3xl font-semibold">{campus.name}</h3>
            <span className="text-sm font-semibold">{campus.campusId}</span>
            <div className="flex-center mt-2 text-sm gap-1 ">
              <MapPinHouse size={18} />
              <span className="line-clamp-1">{campus.address}</span>
            </div>
            <div className="flex-center justify-between mt-2 py-2 text-sm border-y">
              <div className="flex-center gap-1">
                <UsersRound size={18} />
                <strong>{campus.teacher}</strong>
                <span className="text-gray-400">teacher</span>
              </div>
              <div className="flex-center gap-1">
                <GraduationCap size={18} />
                <strong>{campus.student}</strong>
                <span className="text-gray-400">student</span>
              </div>
              <div className="flex-center gap-1">
                <House size={18} />
                <strong>{campus.room}</strong>
                <span className="text-gray-400">room</span>
              </div>
            </div>
            <div className="flex-center mt-4">
              <span className="p-2 border border-gray-300 rounded-full">
                <ContactRound size={18} />
              </span>
              <div className="ml-2 leading-0">
                <span className="font-semibold">{campus.phone}</span>
                <p className="text-sm text-gray-400">{campus.email}</p>
              </div>
              <Button variant="outline" size="icon" className="ml-auto">
                <ClipboardPenLine size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CampusList;
