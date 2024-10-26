import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { noImagePlaceholder } from "@/public/images";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";

const campusList = [
  {
    campusId: "CP101",
    name: "Station Campus",
    cover:
      "https://images.unsplash.com/photo-1651238827881-7cf9aeaedde4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "09061083455",
    email: "station@gmail.com",
    address: "6506 Runte Square, East Shenita, AR 96772",
  },
  {
    campusId: "CP102",
    name: "Rainbow Campus",
    cover:
      "https://images.unsplash.com/photo-1652487308772-83c91cdd5dc4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "09061083455",
    email: "rainbow@gmail.com",
    address: "Apt. 953 4436 Kayla Glens, Hellerstad, FL 11425",
  },
  {
    campusId: "CP103",
    name: "Sunny Campus",
    cover:
      "https://images.unsplash.com/photo-1720245550369-a008c0b9375e?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "09061083455",
    email: "sunny@gmail.com",
    address: "Suite 694 1399 Rafael Dale, Port Solomon, IN 14763-2547",
  },
  {
    campusId: "CP104",
    name: "rainy Campus",
    cover:
      "https://images.unsplash.com/photo-1716625862188-f421d41bfb66?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "09061083455",
    email: "rainy@gmail.com",
    address: "Suite 621 4528 Herman Rapids, Nolanmouth, NC 35068-3384",
  },
  {
    campusId: "CP105",
    name: "Island Campus",
    cover:
      "https://images.unsplash.com/photo-1702368708477-284bbdc2b595?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "09061083455",
    email: "island@gmail.com",
    address: "7019 Shantay Mount, North August, AK 48987-5715",
  },
  {
    campusId: "CP106",
    name: "Denmark Campus",
    cover:
      "https://images.unsplash.com/photo-1706016897942-c63593d76754?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    phone: "09061083455",
    email: "denmark@gmail.com",
    address: "744 Mueller View, Lake Bryonburgh, UT 32212-7714",
  },
];

const CampusList = () => {
  return (
    <div className="flex flex-1 py-4 flex-wrap overflow-y-auto">
      {campusList.map((campus) => (
        <Card key={campus.campusId} className="w-1/3">
          <CardHeader className="relative">
            <CardTitle>{campus.name}</CardTitle>
            <Button
              variant="ghost"
              className="absolute top-0 right-1 w-8 h-8 p-0 rounded-full"
            >
              <EllipsisVertical size={20} />
            </Button>
          </CardHeader>
          <CardContent className="flex">
            <Image
              src={campus.cover || noImagePlaceholder}
              width={220}
              height={300}
              priority
              style={{ width: "220px", height: "auto" }}
              alt="cover"
              className="object-cover"
            />
            <div className="flex flex-col space-y-2 ml-4">
              <div className="flex items-center space-x-2">
                <Label className="">Campus No :</Label>
                <span>{campus.campusId}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Label className="">Phone Number :</Label>
                <span>{campus.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Label className="">Email :</Label>
                <span>{campus.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Label className="">Address :</Label>
                <span>{campus.address}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CampusList;
