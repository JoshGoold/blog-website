"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <motion.div 
      initial={{opacity: 0, y: 200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, y:0}} 
      className="text-center font-thin text-2xl">
        <h1>Admin Dashboard</h1>
      </motion.div>
      <motion.div 
      initial={{opacity: 0, y: 200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, y:0}} 
      className="flex gap-9 p-5">
        <span className='cursor-pointer hover:underline'><Link href="/admin/blogs/new">New Blog</Link></span>
        <span className='cursor-pointer hover:underline'>Insigths</span>
        <span className='cursor-pointer hover:underline'>Edit</span>
        <span className='cursor-pointer hover:underline'>Co-pilot</span>
      </motion.div>
      <motion.div
      initial={{opacity: 0, y: 200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, y:0}} 
       className="text-center font-thin my-20 p-20">
        <h1 className='text-2xl my-5'>Welcome to the Admin Dashboard</h1>
        <p>
          Speak with AI to help with writing ideas and grammar<br/>
          Create new blog posts, and edit existing ones!
        </p>
      </motion.div>
    </div>
  )
}

export default page
