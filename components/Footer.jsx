"use client"
import React from "react";

import { Github, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
    
    className="p-10 flex text-white image bg-black lg:flex-row flex-col items-center lg:justify-around">
      <ul className="flex lg:flex-col lg:my-0 my-10 cursor-pointer gap-2">
        <li className=" hover:shadow-md shadow-neutral-400 p-2 rounded-md">
          About
        </li>
        <li className=" hover:shadow-md shadow-neutral-400 p-2 rounded-md">
          Contact
        </li>
        <li className=" hover:shadow-md shadow-neutral-400 p-2 rounded-md">
          Join Today
        </li>
        <li className=" hover:shadow-md shadow-neutral-400 p-2 rounded-md">
          Priacy Policy
        </li>
      </ul>
      <h1 className="text-2xl lg:my-0 my-10">Joshua's Blog &copy;</h1>
      <ul className="flex lg:items-start items-center flex-col cursor-pointer lg:my-0 my-10 gap-2">
        <li className="flex gap-1 hover:shadow-md shadow-neutral-400 p-2 rounded-md">
          <Github /> JoshGoold
        </li>
        <li className="flex gap-1 hover:shadow-md shadow-neutral-400 p-2 rounded-md">
          <Instagram /> IGYCCTAB
        </li>
        <li className="flex gap-1 hover:shadow-md shadow-neutral-400 p-2 rounded-md">
          <Youtube />
          Riot ov
        </li>
      </ul>
    </motion.div>
  );
};

export default Footer;
