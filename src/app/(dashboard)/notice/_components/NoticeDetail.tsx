import { Button } from "@/components/ui/button";
import Image from "next/image";

const NoticeDetail = () => {
  return (
    <div className="sticky flex flex-col top-0 w-1/3 min-w-[400px] h-full border rounded-xl shadow-sm bg-background ">
      <div className="p-3">
        <div className="flex-center justify-between">
          <div className="flex-center gap-1">
            <span className="px-2 py-1 text-sm border rounded-full">
              Student
            </span>
            <span className="px-2 py-1 text-sm border rounded-full">
              Teacher
            </span>
            <span className="px-2 py-1 text-sm border rounded-full">Admin</span>
          </div>
          <span className="px-2 py-1 text-sm border rounded-full">
            2025-02-15
          </span>
        </div>
        <div className="relative w-full h-64 mt-3">
          <Image
            src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            sizes="100%"
            alt="photo"
            priority
            className="rounded-lg shadow-sm shrink-0 object-cover"
          />
        </div>
      </div>
      <div className="px-3">
        <h2 className="mt-3">Welcome to Our New Blog!</h2>
        <p className="mb-3 text-sm text-secondary-foreground">
          By <span className="font-semibold">Editor</span>
        </p>
      </div>
      <p className="flex-1 mt-3 pl-3 pr-3 mr-1 overflow-auto">{`We are excited to introduce Dark Mode!  
      This feature allows you to switch to a darker theme, reducing eye strain and improving readability.  
      You can enable Dark Mode in the settings panel under the "Appearance" section.`}</p>
      <Button className="m-4" variant="secondary" size="sm">
        Read Post
      </Button>
    </div>
  );
};

export default NoticeDetail;
