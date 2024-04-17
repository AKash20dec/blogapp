import Navbar from "@/componants/Navbar/Navbar"
import Image from "next/image";
import Link from "next/link";
import '../auth.css'



export default function Signup() {
  return (
    <div className='authout' >
        <Navbar/>
        <div className="authin">
          <div className="left"></div>
          <div className="right"> </div>
          <form style={{
            display:"flex",
            flexDirection:"column"}} >
            <div className="forminput_cont" >
              <label>Name</label>
              <input type="text" placeholder="Enter your name"/>
            </div>
            <div className="forminput_cont">
              <label>Email</label>
              <input type="email" placeholder="Enter your Email"/>
            </div>
            <div className="forminput_cont">
              <label>Password</label>
              <input type="password" placeholder="Enter your Password"/>
            </div>
            <div className="forminput_cont">
              <label>Confirm Password</label>
              <input type="Password" placeholder="Confirm your Password"/>
            </div>
            <button type="submit" className="main_button">Register</button>
            <p className="authlink">Already have an account? <Link href="/auth/signIn">Login</Link></p>
          </form>
        </div>
   
     
      
    </div>
  );
}
