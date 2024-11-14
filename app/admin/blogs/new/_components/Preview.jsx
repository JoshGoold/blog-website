import React from 'react'

const Preview = ({content}) => {

    async function saveBlog(){
        const response = await fetch("/api/blogs/new", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify({
              contents: content
            }), 
          })
        const data = await response.json();
        if(data.Success){
            alert(data.Message)
        } else{
            alert(data.Message)
        }
    }

  return (
    <div>
      {content.map((element, index)=> (
        <div key={index} className={`${Array.isArray(element.styles) ? element.styles.join(" ") : ''}`}>
            {element.text}
        </div>
      ))}
      <button onClick={saveBlog} className='bg-green-500 text-white rounded-md p-2'>Upload Blog</button>
    </div>
  )
}

export default Preview
