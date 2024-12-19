import React from "react";
import Image from "next/image";

import { Logo } from "@/components/Logo";
import AuthForm from "@/components/authentication/AuthForm";
import Authlog from "@/public/abstract-curves-and-colors.jpeg";

const AuthenticationPage = () => {
  return (
    <main className="h-screen grid grid-cols-2 relative">
      <div className="relative w-full flex flex-col bg-muted p-10 text-primary-foreground">
        <div className="w-full h-[30%] bg-gradient-to-t from-transparent to-black/50 absolute top-0 left-0 z-10" />
        <div className="w-full h-[40%] bg-gradient-to-b from-transparent to-black/50 absolute bottom-0 left-0 z-10" />
        <Image
          src={Authlog}
          alt="Authlog"
          fill
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
        />
        <div className="relative z-20 flex items-center">
          <Logo />
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;PickAI is a game changer for me. I have been able to
              generate high quality professional headshots within minutes. It
              has also saved me countless hours of work and cost as well.&rdquo;
            </p>
            <footer className="text-sm">Mkai Ey.</footer>
          </blockquote>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center p-8 h-full">
        <AuthForm />
      </div>
    </main>
  );
};

export default AuthenticationPage;
