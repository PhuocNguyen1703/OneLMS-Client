"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const UserMenu = () => {
  const user = false;

  if (user) return;

  return (
    <Button className="ml-5" asChild>
      <Link href="/sign-in">Sign In</Link>
    </Button>
  );
};

export default UserMenu;
