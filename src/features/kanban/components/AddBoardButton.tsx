"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import { PlusIcon, X } from "lucide-react";
import { Modal } from "@/components/modal";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AddBoardButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <GradientButton
        className="
          !px-4 rounded-full"
        size="sm"
        onClick={() => setIsOpen(true)}
      >
        <PlusIcon />
        Add board
      </GradientButton>
      {isOpen && (
        <Modal>
          <Card className="w-[500px]">
            <CardHeader className="flex flex-row justify-between pt-3 pr-3  pb-0 pl-5 border-b">
              <div>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                  Enter your email below to login to your account
                </CardDescription>
              </div>
              <Button
                variant="secondary"
                className="h-6 w-6 rounded-full text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </Button>
            </CardHeader>
            <CardContent className="h-[300px]"></CardContent>
            <CardFooter className="justify-end gap-2 p-3 border-t">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <GradientButton size="sm">Create Board</GradientButton>
            </CardFooter>
          </Card>
        </Modal>
      )}
    </>
  );
};

export default AddBoardButton;
