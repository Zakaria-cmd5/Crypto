'use client'

import { useRouter } from "next/navigation";
import { LogoIcon } from "./icons/icons";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-800 text-white h-14 flex items-center">
      <div className="max-w-5xl mx-auto px-2 w-full">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <LogoIcon />
          <p className="font-semibold">
            <span className="text-yellow-500">C</span>ypto
            <span className="text-yellow-500">U</span>pdate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
