"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.jpg";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <ul className="flex items-center cursor-pointer  justify-end p-10">
      <motion.li
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mr-auto"
      >
        <Link href="/">
        <Image
          title="Home"
          height={100}
          width={100}
          className="rounded-full"
          src={logo}
          alt="Logo"
        />
        </Link>
        
      </motion.li>
      {/* <motion.li
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1}}
        className="flex items-center"
      >
        <Search
          name="Search"
          size={40}
          className="opacity-70 rounded-full p-2 border-neutral-500 shadow-black hover:shadow-lg"
        />{" "}
        &nbsp;{" "}
        <input
          type="text"
          className="border-neutral-400 p-1 lg:mt-0   border rounded-md"
          placeholder="Search for blogs"
        />
      </motion.li> */}
      <motion.li
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1}}
      >
        <Link
          href="/"
          className="hover:shadow-md shadow-neutral-400 p-2 rounded-md"
        >
          Home
        </Link>
      </motion.li>
      <motion.li
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1}}
      >
        <Link
          href="/blogs"
          className="hover:shadow-md shadow-neutral-400 p-2 rounded-md"
        >
          Blogs
        </Link>
      </motion.li>
      <motion.li
       initial={{ opacity: 0 }}
       transition={{ duration: 1 }}
       whileInView={{ opacity: 1}}
      >
        <Link
          href="/admin/login"
          className="hover:shadow-md shadow-neutral-400 p-2 rounded-md"
        >
          Admin
        </Link>
      </motion.li>
     
    </ul>
  );
};

export default NavBar;
