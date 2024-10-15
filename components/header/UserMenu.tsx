"use client";

import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";

const UserMenu = () => {
  const user = false;
  const dispatch = useDispatch();

  if (user) return;

  return <Button className="ml-5">Sign In</Button>;
};

export default UserMenu;
