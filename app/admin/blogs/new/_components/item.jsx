"use client"
import React, { useState } from 'react';
import { styles } from './styles';

const Item = ({setContent}) => {
  // State to store selected styles
  const [appliedStyles, setAppliedStyles] = useState([]);
  const [text, setText] = useState("");
  
  // Function to handle adding styles to the array
  const handleStyleChange = (style) => {
    // Append the selected style if it's not already in the array
    if (!appliedStyles.includes(style)) {
      setAppliedStyles([...appliedStyles, style]);
    }
  };

  return (
    <div className="flex flex-col border-black border p-10 rounded-lg my-5">
      <h1 className="font-thin py-5">Blog Element</h1>

      {/* Toolbar for text styling options */}
      <div className="flex flex-wrap gap-5 w-full my-2">
        {/* Bold, Italic, Underline buttons */}
        <button onClick={() => handleStyleChange(styles[0].bold)} className="border border-black px-2 rounded-md">B</button>
        <button onClick={() => handleStyleChange(styles[0].italic)} className="border border-black px-2 rounded-md">I</button>
        <button onClick={() => handleStyleChange(styles[0].underline)} className="border border-black px-2 rounded-md">U</button>

        {/* Font Family Selector */}
        <select onChange={(e) => handleStyleChange(e.target.value)} className="border border-gray-300 rounded-lg">
          {styles[0].font_familys.map((font, index) => (
            <option className={`${font}`} key={index} value={font}>{font.split("-")[1]}</option>
          ))}
        </select>

        {/* Font Size Selector */}
        <select onChange={(e) => handleStyleChange(e.target.value)} className="border border-gray-300 rounded-lg">
          {styles[0].font_sizes.map((size, index) => (
            <option key={index} value={size}>{size.split("-")[1]}</option>
          ))}
        </select>

        {/* Text Alignment Selector */}
        <select onChange={(e) => handleStyleChange(e.target.value)} className="border border-gray-300 rounded-lg">
          {styles[0].text_align.map((align, index) => (
            <option key={index} value={align}>{align.split("-")[1]}</option>
          ))}
        </select>

        {/* Background Color Selector */}
        <select className="border border-gray-300 rounded-lg"  onChange={(e) => handleStyleChange(e.target.value)}>
          {styles[0].background_colors.map((bgColor, index) => (
            <option className={`${bgColor}`} key={index} value={bgColor}>
              {bgColor.split("-")[1]}
            </option>
          ))}
        </select>

        {/* Text Color Selector */}
        <select className="border border-gray-300 rounded-lg"  onChange={(e) => handleStyleChange(e.target.value)}>
          {styles[0].text_colors.map((textColor, index) => (
            <option className={`${textColor}`} key={index} value={textColor}>
              {textColor.split("-")[1]}
            </option>
          ))}
        </select>

        {/* Line Height Selector */}
        <select className="border border-gray-300 rounded-lg" onChange={(e) => handleStyleChange(e.target.value)}>
          {styles[0].line_height.map((lineHeight, index) => (
            <option key={index} value={lineHeight}>
              {lineHeight.split("-")[1]}
            </option>
          ))}
        </select>

        {/* Spacing Selector */}
        <select className="border border-gray-300 rounded-lg" onChange={(e) => handleStyleChange(e.target.value)}>
          {styles[0].spacing.map((space, index) => (
            <option key={index} value={space}>
              {space}
            </option>
          ))}
        </select>

        {/* Border Radius Selector */}
        <select className="border border-gray-300 rounded-lg" onChange={(e) => handleStyleChange(e.target.value)}>
          {styles[0].border_radius.map((radius, index) => (
            <option key={index} value={radius}>
              {radius.split("-")[1]}
            </option>
          ))}
        </select>

        {/* Shadow Selector */}
        <select className="border border-gray-300 rounded-lg" onChange={(e) => handleStyleChange(e.target.value)}>
          {styles[0].shadows.map((shadow, index) => (
            <option key={index} value={shadow}>
              {shadow.split("-")[1]}
            </option>
          ))}
        </select>

        {/* Append and Remove buttons */}
        
        <button onClick={() => setAppliedStyles([])} className="border border-black bg-red-500 text-white px-2 rounded-md">
          Remove styles
        </button>
        <button onClick={() => setContent({ text: text, styles: appliedStyles })} className="border ml-auto border-black bg-green-500 text-white px-2 rounded-md">
          Save
        </button>
      </div>

      {/* Textarea for content */}
      <textarea
        className={`border border-gray-300 rounded-md p-5 ${appliedStyles.join(" ")}`}
        cols={75}
        rows={10}
        placeholder="Enter text here"
        value={text}
        onChange={(e)=> setText(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Item;
