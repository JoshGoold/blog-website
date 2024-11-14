
import React from 'react'
import { motion } from 'framer-motion'

const Blog = ({blogData, id}) => {
  return (
    <div id={id} className='p-10 cursor-pointer relative shadow-lg shadow-grey rounded-lg'>
        {blogData.content.map((element, index)=>(
            <div key={index} className={`${element.styles.join(" ")} p-5`}>
                <section>{element.text}</section>
            </div>
        ))}  
        <ul className='flex gap-3 p-3 bottom-0 absolute '>
            <li>❤️<small>{blogData?.likes?.length || 0}</small></li>
            <li>📩<small>{blogData?.comments?.length || 0}</small></li>
        </ul>
    </div>
  )
}

export default Blog
