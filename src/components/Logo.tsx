import React from "react";
import Link from "next/link";
import { SparklesIcon } from "lucide-react";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <SparklesIcon className="size-8" strokeWidth={1.5} />
      <span className="text-lg font-semibold">PickAI</span>
    </Link>
  );
};
