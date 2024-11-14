import React from "react";
import background from "../public/images/background.jpg";
import Image from "next/image";

const HeaderMain = () => {
  return (
    <div className="relative">
      <Image
        src={background}
        className="w-[85%] ml-auto mr-auto h-[500px] opacity-30 bg-cover"
        alt="image"
      ></Image>
    </div>
  );
};

export default HeaderMain;
