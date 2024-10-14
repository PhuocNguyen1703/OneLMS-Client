"use client";

import SignInForm from "@/components/auth/sign-in/SignInForm";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { SIGNIN_MODAL } from "@/lib/constants";
import { setModalOnClose } from "@/Redux/slices/modalSlice";
import { CircleX, Facebook } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const { isOpen, modalType } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();

  const isModalOpen = isOpen && modalType === SIGNIN_MODAL;

  if (isModalOpen) {
    return (
      <Modal>
        <section className="relative w-[470px] p-10 rounded-md bg-white">
          <Button
            variant="ghost"
            className="absolute top-4 right-4 w-fit h-fit p-0 rounded-full"
            onClick={() => dispatch(setModalOnClose())}
          >
            <CircleX />
          </Button>
          <h1 className="text-4xl font-bold text-center">Sign in to Rainbow</h1>
          <p className="text-base text-center">
            Welcome back! Please sign in to continue.
          </p>
          <div className="flex items- gap-8 mt-5">
            <Button variant="outline" className="w-full gap-1 h-12 text-base">
              <Facebook />
              <p>Google</p>
            </Button>
            <Button variant="outline" className="w-full gap-1 h-12 text-base">
              <Facebook />
              <p>Facebook</p>
            </Button>
          </div>
          <div className="relative mt-5 text-center after:absolute after:top-1/2 after:left-0 after:h-[1px] after:w-full after:bg-muted-foreground">
            <span className="relative px-2 bg-white z-10 cursor-default select-none">
              or
            </span>
          </div>
          <SignInForm />
          <p className="block mt-5 text-center">
            Don&apos;t have an account? <strong>Sign up</strong>
          </p>
        </section>
      </Modal>
    );
  }
};

export default SignIn;
