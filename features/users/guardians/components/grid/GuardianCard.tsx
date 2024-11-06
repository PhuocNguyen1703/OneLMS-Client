"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

const GuardianCard = ({ data }: any) => {
  const { id, name, cover, email, phone, occupation } = data;

  return (
    <Card className="w-[350px]">
      <CardHeader className="flex-row items-center justify-between p-3">
        <CardTitle>{id}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="focus:outline-none">
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
        <div className="flex items-center gap-2">
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
