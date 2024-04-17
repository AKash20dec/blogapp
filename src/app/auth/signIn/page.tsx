"use client"
import Navbar from "@/componants/Navbar/Navbar"
import Image from "next/image";
import Link from "next/link";
import '../auth.css'



export default function SignIn() {
  return (
    <div className='authout' >
        <Navbar/>
        <div className="authin">
          <div className="left"></div>
          <div className="right"> </div>
          <form style={{
            display:"flex",
            flexDirection:"column"}} >
           
            <div className="forminput_cont">
              <label>Email</label>
              <input type="email" placeholder="Enter your Email"/>
            </div>
            <div className="forminput_cont">
              <label>Password</label>
              <input type="password" placeholder="Enter your Password"/>
            </div>
           
            <button type="submit" className="main_button">Login</button>
            <p className="authlink">Don't have an account? <Link href="/auth/signUp">Register</Link></p>
          </form>
        </div>
   
     
      
    </div>
  );
}
