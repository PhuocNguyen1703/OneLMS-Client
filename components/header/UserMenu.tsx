"use client";

import { Button } from "@/components/ui/button";
import { SIGNIN_MODAL } from "@/lib/constants";
import { setModalOnOpen } from "@/Redux/slices/modalSlice";
import { useDispatch } from "react-redux";

const UserMenu = () => {
  const user = false;
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(setModalOnOpen(SIGNIN_MODAL));
  };

  if (user) return;

  return (
    <Button className="ml-5" onClick={handleOpenModal}>
      Sign In
    </Button>
  );
};

export default UserMenu;
