import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/componants/Navbar/Navbar'
import './addblog.css'

export default function Addblog() {
  return (
    <div className=''>
      <Navbar/>
      <div className="addblog_in p-20  ">
        <h1 className="head1">Add Blog</h1>
        <form style={{width:"70%",minWidth:"250px",display:"flex",flexDirection:"column"}}>
          <div className='forminput_cont'>
            <label >Blog Name: </label>
            <input type="text" placeholder="Enter Blog name"/>
          
          </div>
          <div className='forminput_cont'>
            <label >Blog Discription </label>
            <textarea placeholder='Enter Blog Discription'></textarea>
          </div>
          <div className='forminput_cont'>
            <label htmlFor="uploadimg">Upload image :</label>
            <input type="file" id="uploadimg" name="uploadimg" accept="image/*"/>
          </div>

          <div className='paragraph'>
            <div className='forminput_cont'>
              <label>Paragraph Title</label>
              <input type="text" placeholder='Enter paragraph Title'/>
            </div>
            <div className='forminput_cont'>
              <label >Paragraph Description</label>
              <textarea placeholder='Enter Paragraph Description'></textarea>
            </div>
            <div className='forminput_cont'>
              <label >Paragraph Image</label>
              <input type="file"  />
            </div>
            <button type='submit' className="main_button">+ Add More Paragraphs</button>
          </div>
          <button type='submit' className="main_button">+ Submit</button>
        </form>
      </div>
    </div>
  )
}