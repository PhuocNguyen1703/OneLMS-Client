import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Box, CalendarSearch, FilePenLine, Wrench } from "lucide-react";
import Image from "next/image";

const HowWorks = () => {
  const stepList = [
    {
      icon: <CalendarSearch />,
      title: "Reservation and Booking",
      desc: "The customer selects a vehicle and rental dates, either online or at a rental office. They confirm availability, review the price, and complete the reservation by providing their personal details and payment information.",
    },
    {
      icon: <Wrench />,
      title: "Vehicle Preparation",
      desc: "The rental company ensures the car is ready by performing maintenance checks, cleaning the vehicle, and documenting any existing damages in a pre-rental inspection report.",
    },
    {
      icon: <FilePenLine />,
      title: "Pickup and Agreement",
      desc: "The customer arrives, presents a valid driver’s license, and signs a rental agreement outlining insurance options, mileage limits, and return conditions. After a final inspection with the rental agent, the vehicle is handed over to the customer.",
    },
    {
      icon: <Box />,
      title: "Return and Final Inspection",
      desc: "The customer returns the vehicle on the agreed date. The company performs a final inspection to check for any new damages or extra mileage. Final charges are processed, and any security deposits are refunded, concluding the rental.",
    },
  ];
  return (
    <section className="mt-40 text-center">
      <h2 className="text-4xl font-bold">How Rainbow Car Rental Works</h2>
      <p className="mt-2">
        The proper business solution for your developing business
      </p>
      <div className="flex justify-center gap-6 mt-[60px] ">
        {stepList.map((item) => (
          <Card key={item.title} className="w-[350px]">
            <CardHeader>
              <div className="w-fit p-2 border rounded-full">{item.icon}</div>
              <CardTitle className="!mt-4">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-left">
                {item.desc}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowWorks;
