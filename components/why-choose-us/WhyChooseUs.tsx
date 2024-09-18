import Image from "next/image";
import tireImage from "@/public/images/tire.png";

const WhyChooseUs = () => {
  const reasonList = [
    { icon: "01", title: "Save on your trip" },
    { icon: "02", title: "Quality tires for any season" },
    { icon: "03", title: "free fuel for new clients" },
    { icon: "04", title: "Customer satisfaction rates" },
  ];

  return (
    <section className="flex gap-14 mt-[135px] mx-16">
      <div className="flex-1">
        <p className="text-5xl font-bold">Why Choose Us?</p>
        <div className="flex mt-[60px] ml-6 w-[880px] shrink-0">
          <div className="flex flex-col justify-between">
            <div className="relative flex items-end w-fit">
              <div>
                <h3 className="font-bold text-2xl">
                  Large, deep shoulder lines
                </h3>
                <p>For better cleaning and less stone engagement</p>
              </div>
              <div className="w-[220px] h-[32px] ml-8 skew-x-[60deg] border-2 border-primary border-l-0 border-b-0"></div>
              <span className="absolute -bottom-[4px] -right-[32px] w-2 h-2 bg-red-600 rounded-full"></span>
            </div>
            <div className="relative flex items-end w-fit">
              <div>
                <h3 className="font-bold text-2xl">Special tread compound</h3>
                <p>Resistance to cuts and tears</p>
              </div>
              <div className="w-[170px] h-[22px] ml-10 skew-x-[60deg] border-2 border-primary border-l-0 border-b-0"></div>
              <span className="absolute -bottom-[4px] -right-[22px] w-2 h-2 bg-red-600 rounded-full"></span>
            </div>
            <div className="relative flex w-fit">
              <div className="w-[320px]">
                <h3 className="font-bold text-2xl">Massive block geometry</h3>
                <p>Traction on terrain and excellent resistance to damage</p>
              </div>
              <div className="w-[124px] h-[22px] ml-4 -skew-x-[60deg] border-2 border-primary border-t-0 border-l-0"></div>
              <span className="absolute -top-[4px] -right-[22px] w-2 h-2 bg-red-600 rounded-full"></span>
            </div>
          </div>
          <Image
            src={tireImage}
            width={400}
            height={400}
            alt="tire"
            className="-ml-[160px] object-center object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {reasonList.map((el) => (
          <div key={el.title} className="flex items-center gap-4 p-5 border">
            <span className="text-6xl">{el.icon}</span>
            <div className="">
              <p>{el.title}</p>
              <div className="w-[40px] h-1 mt-2 bg-[#000000] rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
