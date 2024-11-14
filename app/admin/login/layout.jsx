"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const layout = () => {
  const [admindata, setAdminData] = useState({
    email: "",
    password: "",
  });

  

  useEffect(()=>{
    const pageUrl = window.location.href;
    async function view(){
      const response = await fetch('/api/insights/view', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Page-URL": pageUrl,  // Add the page URL here
        }});
      const data = await response.json();
      if(data.Success){
        console.log("page viewed")
      } else{
        console.log("Unsuccessful view")
      }
    }
  },[])

  async function handleLogin(e) {
    e.preventDefault();
    try {
      if (admindata.email === "" || admindata.password === "") {
        return alert("Please fill in all fields");
      }
  
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({
          email: admindata.email,
          password: admindata.password,
        }), 
      });
  
      const data = await response.json();
      if (response.ok) {
        // handle successful login
        localStorage.setItem("token", data.token)
        window.location.href = "/admin/dashboard";
        console.log("Login successful", data);
      } else {
        // handle login error
        console.error("Login failed", data);
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error occurred logging in admin:", error);
      alert("Error occurred");
    }
  }
  
  return (
    <div>
      <form onSubmit={handleLogin}>
        <motion.ul
          initial={{ opacity: 0, y: 200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-10 p-20 justify-center items-center"
        >
          <li className="font-thin text-2xl">Admin Login</li>
          <li className="flex-col flex">
            <label htmlFor="">Email</label>
            <input
              onChange={(e) =>
                setAdminData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              className="border border-black rounded-lg p-3"
              type="text"
              name="email"
              placeholder="Enter email here"
            />
          </li>
          <li className="flex-col flex">
            <label htmlFor="">Password</label>
            <input
            onChange={(e) =>
                setAdminData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              className="border border-black rounded-lg p-3"
              type="password"
              name="password"
              placeholder="Enter password here"
            />
          </li>
          <li>
            <button
              type="submit"
              className="bg-black text-white hover:-translate-y-1 hover:scale-105 transition-all hover:shadow-lg shadow-grey duration-200 rounded-lg px-14 py-2"
            >
              Login
            </button>
          </li>
          <li>
            <Link href="/" className="font-thin cursor-pointer hover:underline">
              Go Back Home
            </Link>
          </li>
        </motion.ul>
      </form>
    </div>
  );
};

export default layout;
