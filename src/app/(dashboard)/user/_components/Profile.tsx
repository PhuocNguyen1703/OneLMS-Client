import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FloatingLabelInput } from "@/components/ui/floating-input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const user = {
  id: "G12345",
  name: "John Doe",
  cover:
    "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  email: "johndoe@example.com",
  gender: "Male",
  occupation: "Teacher",
  phone: 1234567890,
  address: "6506 Runte Square, East Shenita, AR 96772",
  status: "Active",
};

const Profile = () => {
  return (
    <div className="flex gap-5">
      <Card className="w-[350px]">
        <CardHeader className="flex-row items-center space-y-0">
          <span>No: S123456</span>
          <span className="ml-auto text-xs bg-green-200 text-green-800 font-semibold py-1 px-2 rounded-sm">
            Active
          </span>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="w-fit p-2 border rounded-full">
            <Avatar className="w-32 h-32">
              <AvatarImage
                src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="avatar"
                className="object-cover"
              />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
          </div>
          <span className="mt-6 text-sm text-gray-500 text-center">
            Allowed *.jpeg, *.jpg, *.png, *.gif
            <br /> max size of 3 Mb
          </span>
          <div className="flex-center justify-between space-x-3 w-full mt-10">
            <Label htmlFor="banned" className="flex flex-col">
              <span className="text-base">Banned</span>
              <span className="text-gray-500 font-normal">
                Apply disable account
              </span>
            </Label>

            <Switch id="banned" />
          </div>
          <div className="flex-center justify-between space-x-3 w-full mt-5">
            <Label htmlFor="verify-email" className="flex flex-col">
              <span className="text-base">Email verified</span>
              <span className="text-gray-500 font-normal">
                Disabling this will automatically send the user a verification
                email
              </span>
            </Label>

            <Switch id="verify-email" />
          </div>
        </CardContent>
        <CardFooter className="mt-6 justify-center">
          <Button variant="destructive">Delete User</Button>
        </CardFooter>
      </Card>
      <Card className="flex-1">
        <CardHeader>
          <span className="font-semibold text-xl">Information</span>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-x-4 gap-y-6">
          <FloatingLabelInput
            label="No."
            id="id-number"
            className="text-base"
          />
          <FloatingLabelInput label="City" id="122" className="text-base" />
          <FloatingLabelInput label="City" id="122" className="text-base" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
