"use client"
import Image from "next/image";
import React from "react";
import clip1 from "../public/assets/main_clipart_1.jpg";
import clip2 from "../public/assets/main_clipart_2.jpg";
import Link from "next/link";
import HeaderMain from "./Head";
import { motion } from "framer-motion";


const Introduction = () => {
  return (
    <div className="flex  flex-col items-center shadow-md shadow-neutral-500 p-10">
      <motion.div
      initial={{opacity: 0, y: 200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, y:0}} 
      className="flex-col my-20  p-10 items-center">
        <div className="text-center my-10">
          <h1 className="text-6xl font-thin">Welcome to my Blog</h1>
        </div>
        <div className="flex items-center">
          <Image
            className=" ml-auto mr-auto"
            height={400}
            width={400}
            src={clip1}
          ></Image>
          <p className="lg:max-w-[60%] ml-auto mr-auto">
            Welcome to my blog, where I explore the intersections of faith,
            philosophy, and life through a unique lens. Here, I delve into
            religious and philosophical concepts, reflecting on how they shape
            our understanding of the world. As a programmer by profession, I
            find profound connections between coding and creation, considering
            how the logic and structure of programming can mirror the divine
            design of our universe. I also share insights from my passions for
            chess, fitness, and reading, each offering valuable lessons in
            strategy, discipline, and continuous growth. Join me as we journey
            through these topics, seeking wisdom in the everyday.
          </p>
        </div>
      </motion.div>
      <motion.div
      initial={{opacity: 0, x: -200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}} 
      className="w-full">
        <HeaderMain></HeaderMain>
      </motion.div>
      <motion.div
      initial={{opacity: 0, y: 200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, y:0}}
       className="my-20 flex-col p-20 rounded-md  items-center">
        <div className="flex justify-between mr-auto ml-auto max-w-[90%] items-center ">
          <h1 className="text-4xl font-thin">Join me Today!</h1>
        </div>

        <div className="flex items-center">
          <p className="lg:max-w-[60%] p-3 ml-auto mr-auto">
            I invite you to join the conversation by sharing your thoughts and
            insights on my blog posts. Whether you agree, have questions, or
            want to explore different perspectives, your voice matters here. To
            create a welcoming and open space, I've enabled anonymous
            commenting, allowing you to participate freely and without
            hesitation. I encourage you to start discussions, challenge ideas,
            and engage with others as we navigate these deep topics together.
            Let’s build a community of thoughtful, respectful dialogue where
            everyone can learn and grow from one another.
          </p>
          <Image
            className=" ml-auto mr-auto rounded-full"
            height={400}
            width={400}
            src={clip2}
          ></Image>
        </div>
      </motion.div>
    </div>
  );
};

export default Introduction;
