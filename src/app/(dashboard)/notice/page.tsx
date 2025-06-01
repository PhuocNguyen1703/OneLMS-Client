import Header from "@/app/(dashboard)/notice/_components/Header";
import { Button } from "@/components/ui/button";
import { noticeList } from "@/data/notice";
import Image from "next/image";
import NoticeDetail from "./_components/NoticeDetail";
import AddNewNoticeForm from "./create/page";

const NoticePage = () => {
  return (
    <section className="flex flex-col flex-1 h-full pb-4">
      <Header />
      <div className="flex flex-1 gap-4 px-4 overflow-y-auto">
        <div className="flex flex-col w-2/3 gap-4">
          {noticeList.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between p-3 border rounded-xl shadow-sm bg-background hover:border-sky-600"
            >
              <div className="flex-center gap-3">
                <Image
                  src={item.image}
                  width={60}
                  height={60}
                  alt="photo"
                  priority
                  className="h-14 w-14 rounded-sm shadow-sm shrink-0 object-cover"
                />
                <div className="flex flex-col justify-around h-full">
                  <h4>{item.title}</h4>
                  <p className="text-xs text-secondary-foreground">
                    By <span className="font-semibold">{item.author}</span>
                  </p>
                </div>
              </div>
              <span className="h-fit px-2 py-1 text-sm border rounded-full">
                {item.createdAt}
              </span>
            </div>
          ))}
        </div>
        <NoticeDetail />
      </div>
    </section>
  );
};

export default NoticePage;
