"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

const GuardianCard = ({ data }: any) => {
  const { id, name, cover, email, phone, occupation } = data;

  return (
    <Card className="">
      <CardHeader className="flex-row items-center justify-between p-3">
        <CardTitle>{id}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="focus:outline-hidden">
            <Button variant="ghost" size="icon">
              <EllipsisVertical size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="border-y p-3">
        <div className="flex-center gap-2">
          <Avatar>
            <AvatarImage src={cover} alt="avatar" className="object-cover" />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-xs">{email}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p>Occupation</p>
            <p>{occupation}</p>
          </div>
          <div>
            <p>Contact</p>
            <p>{phone}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-3">
        <Button variant="outline">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default GuardianCard;
