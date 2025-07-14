import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdWifiCalling3 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <div className='w-[1920] h-[480px] bg-blue-400 mt-20'>
      <div className='w-[85%] flex justify-between  items-center m-auto h-[155px] '>
        <div>
            <img className='w-[60%]'   src="/public/Group 4104.png" alt="" />
        </div>
        <div>
            <h2 className='text-[#FFFFFF] flex text-2xl'>Follow Us On- <img className='w-[125px] h-[25px] mt-1 ms-1 flex' src="/public/Group 1000000925.png" alt="" /></h2>
        </div>
      </div>
      <img className='w-[85%] m-auto' src="/public/Line 24.png" alt="" />
      <div className='text-[#FFFFFF] flex justify-between iteams-center w-[85%] m-auto mt-8 h-[41px] '>
        <div className=' w-[23%]'>About Us <img src="/public/Line 25.png" alt="" /><p className='mt-3 font-normal'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of</p></div>
        <div  className=' w-[22%]'>Contacto Info  <img src="/public/Line 25.png" alt="" />
        <ul className='flex font-normal mt-3'><CiLocationOn className='w-[30px] me-1 h-[30px]'/> Address : Near City, New Town, Est Coener, Nava Town</ul>
       <ul className='flex font-normal mt-4'><MdWifiCalling3 className='mt-1 me-2' />+91 1234567890</ul>
        <ul className='flex font-normal mt-4'><MdWifiCalling3 className='mt-1 me-2' />+91 1234567890</ul>
 <ul className='flex gap-2 mt-4'><MdEmail className='mt-1 me-2 text-[#FFFFFF]'/>info@media123 </ul>
        </div>
        <div  className=' w-[20%] cursor-pointer'>Expiore  <img src="/public/Line 25.png" alt="" />
        <div className='flex justify-between items-center'>
        <div className=' font-normal mt-2 justify-between items-center'>
            <p>HOME</p>
            <p className='mt-3'>About Doctor</p>
            <p  className='mt-3'>Treatment</p>
            <p  className='mt-3'>Services</p>
        </div>
<div className='cursor-pointer'>
    <p  className='mt-3'>Procedure</p>
    <p  className='mt-3'>Gallery </p>
    <p  className='mt-3'>Health Tips</p>
    <p  className='mt-3'>Contacts Us</p>
</div>
       </div>
        </div>
        <div  className=' w-[20%] text-[#FFFFFF] cursor-pointer'>Our Treatment  <img src="/public/Line 25.png" alt="" />
        <p   className='mt-3'>  varicose veins Treatment</p>
          <p   className='mt-3'>  Peripheral Artery Disease</p>
            <p   className='mt-3'>  Liver Cirrhosis treatment</p>
              <p   className='mt-3'> Infertility Treatment</p>
              <p   className='mt-3'>Aortic Aneurysm Treatment</p>
        </div>
      </div>
    </div>
  )
}
