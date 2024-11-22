import { Button } from "@/components/ui/button";
import Modal from "../Modal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";

const GuardianView = () => {
  return (
    <Modal>
      <Card className="min-w-[700px]">
        <CardHeader className="relative border-b p-4">
          <CardTitle>Quick information</CardTitle>
          <span>G123456</span>
          <Button
            variant="ghost"
            className="absolute top-4 right-4 p-1 h-fit w-fit"
          >
            <X size={22} />
          </Button>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-16 w-16">
                <AvatarImage
                  src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="avatar"
                  className="object-cover"
                />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">William</p>
                <p className="text-xs">wil@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div>
                <p className="text-gray-400 font-semibold">Contact</p>
                <span>08061083455</span>
              </div>
              <div>
                <p className="text-gray-400 font-semibold">Occupation</p>
                <span>Designer</span>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <span className=" font-semibold">Children Detail</span>
            <div className="p-4 mt-4 border rounded-md">
              <div className="flex items-center justify-between pb-3 mb-3 border-b">
                <span>S123456</span>
                <span>Active</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="avatar"
                      className="object-cover"
                    />
                    <AvatarFallback>?</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">William</p>
                    <p className="text-xs">wil@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-gray-400 ">Gender</p>
                    <span>Male</span>
                  </div>
                  <div>
                    <p className="text-gray-400 ">Date of Joined</p>
                    <span>18 Mar 2018</span>
                  </div>
                </div>
                <Button size="sm">View Detail</Button>
              </div>
            </div>
            <div className="p-4 mt-4 border rounded-md">
              <div className="flex items-center justify-between pb-3 mb-3 border-b">
                <span>S123456</span>
                <span>Active</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="avatar"
                      className="object-cover"
                    />
                    <AvatarFallback>?</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">William</p>
                    <p className="text-xs">wil@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-gray-400 ">Gender</p>
                    <span>Male</span>
                  </div>
                  <div>
                    <p className="text-gray-400 ">Date of Joined</p>
                    <span>18 Mar 2018</span>
                  </div>
                </div>
                <Button size="sm">View Detail</Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-4 pb-4 mt-4 justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button>View Detail</Button>
        </CardFooter>
      </Card>
    </Modal>
  );
};

export default GuardianView;
