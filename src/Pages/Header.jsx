import React from 'react';
import { MdWifiCalling3 } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <div className='flex w-full '>
        <div className='text-3xl underline  w-[318px] h-[138px] mt-2'>
          <img  src="/public/group 4791.png" alt="Logo" className="h-full w-full" />
        </div>
        <div className='w-full'>
          <div className='flex  '>
            <div className='flex justify-between items-center gap-4  h-[30px]'>
                <ul className='flex gap-2'><MdWifiCalling3 className='mt-1' /> +91 1234567890</ul>
                <ul className='flex gap-2'> <CiLocationOn  className='mt-1'/>Near City, New Town, Est Coener, Nava Town</ul>
                <ul className='flex gap-2'><MdEmail className='mt-1'/>info@media123
</ul>
            </div>
            <div className="flex mt-2 ms-10">
      <ul className="flex gap-4">
        <li><FaFacebookF /></li>
        <li><FaInstagram /></li>
        <li><FaTwitter /></li>
        <li><FaLinkedinIn /></li>
      </ul>
    </div>
        
        
        </div> 
        <div className='bg-[#0074AE] h-[93px] flex'>
            <ul className='flex gap-3 items-center cursor-pointer  ps-4' >
              <a href="/">
                    <li className=' uppercase text-[#FFFFFF] text-[18px] '>Home</li>
              </a>
          
                <a href="/conatct">
                <li className=' uppercase text-[#FFFFFF] text-[11px] '>About Doctor</li>
                </a>
                
                <li className=' uppercase text-[#FFFFFF] text-[11px] '>Treatment</li>
                <li className=' uppercase text-[#FFFFFF] text-[11px] '>SERVICES</li>
                <li className=' uppercase text-[#FFFFFF] text-[11px] '>Procedure</li>
                <li className=' uppercase text-[#FFFFFF] text-[11px] '>Procedure</li>

              
                        <li className=' uppercase text-[#FFFFFF] text-[11px] '>Gallery</li>    
                
      
                <a href="details">
                  <li className=' uppercase text-[#FFFFFF] text-[11px] '>Health Tips</li>  
                </a>
              
            <a href="/doctor"><li className=' uppercase text-[#FFFFFF] text-[11px] '>Doctor</li>
            </a>   
            </ul>
            <div className=' flex w-[270px] h-[50px] bg-[white] text-[#0074AE] text-2xl
 rounded-sm mt-6 items-center ps-3 ms-10 cursor-pointer'>Book Appointment  <FaChevronCircleRight className='ms-2'/>
</div>
            </div> 
        </div>
        
      
      </div>
     
    </div>
  );
}
