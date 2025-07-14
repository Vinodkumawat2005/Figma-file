import React from 'react'
import { AiFillThunderbolt } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdWifiCalling3 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    <div>
   {/* <div className='w-full h-50' style={{backgroundImage:"url('/add.png')"}}>
<h1 className='text-[#0074AE] font-[40px]'>CONTACTS US</h1>
   </div> */}
   <div className='flex w-[90%]'>
    <img className='w-[45%] p-10' src="/public/map.png" alt="" />
    <div className='p-10'>
        <h1 className='font-bold text-2xl'>Contact Information</h1>
        <p className='text-[#333333]'>Contact Dr. Deepak Agarwal Vascular Surgeon Interventional & Pain Clinic, Jaipur - the best Vascular & Pain Clinic in jaipur</p>
   
   <div className='w-[90%] shadow-xl mt-4'>
<p className='p-4'>Clinic Address</p>
<h2 className='text-[#FF6320] ps-4'>Dr. Deepak Agarwal Vascular Surgeon Interventional & Pain Clinic</h2>
<div className='mt-5  pb-8 flex justify-around items-center'>
    <div className='flex w-[40%]'>
         <CiLocationOn  className=' w-[30%] mt-2 '/>
         <p>Near City, New Town, Est Coener, Nava Town</p>
    </div>
    <div>
        <p className='flex'><MdWifiCalling3 className='mt-1 me-2' /> +91 1234567890</p>
               <p className='flex'><MdEmail className='mt-1 me-2'/>info@media123</p>

    </div>
</div>
   </div>
    <div className='w-[90%] shadow-xl mt-4'>
<p className='p-4'>Hospital Address</p>
<h2 className='text-[#FF6320] ps-4'>Dr. Deepak Agarwal Vascular Surgeon Interventional & Pain Clinic </h2>
<div className='mt-5  pb-8 flex justify-around items-center'>
    <div className='flex w-[40%]'>
         <CiLocationOn  className=' w-[30%] mt-2 '/>
         <p>Near City, New Town, Est Coener, Nava Town</p>
    </div>
    <div>
        <p className='flex'><MdWifiCalling3 className='mt-1 me-2' /> +91 1234567890</p>
               <p className='flex'><MdEmail className='mt-1 me-2'/>info@media123</p>

    </div>
</div>
   </div>
    </div>
  
   </div>
    <div className='flex w-full justify-between bg-[#ECF9FF]' style={{backgroundImage:"url('/backimages.png')"}}>
              <div  className='w-[581px] h-[447px] mt-[41px] ms-[154px] '>
  
                <h2 className='text-3xl font-semibold text-[#333333] 
  '>Have You Any Suggestion Or Queries?</h2>

  <p className='font-light  text-[#333333] leading-[26px] mt-3'>Contact Dr. Deepak Agarwal Vascular Surgeon Interventional & Pain Clinic, Jaipur - the best Vascular & Pain Clinic in jaipur</p>
     <div className='bg-[#FFFFFF] p-4 mt-10 text-gray-500 shadow-xl w-[70%]'>
                <input type="text" placeholder='YOUR NAME'  className=' border-1 font-[20px] m-auto w-[100%] p-2 h-8   ps-2 outline-none' />

                <input type="email" placeholder='YOUR EMAIL'  className=' border-1 mt-5 font-[20px] m-auto w-[100%] p-2 h-8 ps-2 outline-none' />

        <input type="number" placeholder='YOUR NUMBER'  className=' border-1  mt-5  font-[20px] m-auto w-[100%] p-2 h-8  ps-2 outline-none' />

        <input type='message' placeholder='message'  className=' border-1  mt-5  font-[20px] m-auto w-[100%] p-2 h-13 ps-2 outline-none' />
     <button className='w-[300px] text-[#FFFFFF] cursor-pointer h-[53px] flex justify-center items-center  mt-6 text-lg bg-[#0074AE] font-bold rounded-sm'>Book An Appointment
  
  <FaAngleRight className='text-[white] ms-[10px]'/>
  
  
      </button>
     </div>
 
              </div>
              <div>
                <img className='h-[541px]' src="/public/Layer 0 39.png" alt="" />
              </div>
          </div>
    <div
     className="w-[85%] m-auto  bg-cover bg-center mt-20"
     style={{ backgroundImage: "url('/image 8.png')" }}
   >
     <p className='flex justify-center items-center pt-10 text-[#FF6320]'>Testimonies</p>
   <p className='text-[#333333] font-bold text-[30px] m-auto flex justify-center items-center'>What Oue Customer Are Talking About Us</p>
   <p className='text-[#4D4D4D] font-normal w-[75%] mt-4 m-auto'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going</p>
   <div className='w-[90%] flex justify-between m-auto'>
   <div className='w-[23%]'>
     <div className="group w-[100%] m-auto h-50 mt-8 bg-[#0000000D] rounded-b-[50px] border-b-[4px] border-b-transparent hover:border-b-[#FF6320] transition-all duration-300">
     <AiFillThunderbolt className="text-[gray] m-auto pt-1 group-hover:text-[#FF6320] transition-colors duration-300" />
     <p className="mt-4 ms-3 text-[#333333]">
       There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
     </p>
   </div>
   <p className='m-auto text-[#FF6320] mt-4 ms-15'>Stiven Smith</p>
   <p className=' ms-16'>Customer</p>
   </div>
   <div className='w-[23%]'>
     <div className="group w-[100%] m-auto h-50 mt-8 bg-[#0000000D] rounded-b-[50px] border-b-[4px] border-b-transparent hover:border-b-[#FF6320] transition-all duration-300">
     <AiFillThunderbolt className="text-[gray] m-auto pt-1 group-hover:text-[#FF6320] transition-colors duration-300" />
     <p className="mt-4 ms-3 text-[#333333]">
       There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
     </p>
   </div>
   <p className='m-auto text-[#FF6320] mt-4 ms-15'>Stiven Smith</p>
   <p className=' ms-16'>Customer</p>
   </div>
   <div className='w-[23%]'>
     <div className="group w-[100%] m-auto h-50 mt-8 bg-[#0000000D] rounded-b-[50px] border-b-[4px] border-b-transparent hover:border-b-[#FF6320] transition-all duration-300">
     <AiFillThunderbolt className="text-[gray] m-auto pt-1 group-hover:text-[#FF6320] transition-colors duration-300" />
     <p className="mt-4 ms-3 text-[#333333]">
       There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
     </p>
   </div>
   <p className='m-auto text-[#FF6320] mt-4 ms-15'>Stiven Smith</p>
   <p className=' ms-16'>Customer</p>
   </div>
   <div className='w-[23%]'>
     <div className="group w-[100%] m-auto h-50 mt-8 bg-[#0000000D] rounded-b-[50px] border-b-[4px] border-b-transparent hover:border-b-[#FF6320] transition-all duration-300">
     <AiFillThunderbolt className="text-[gray] m-auto pt-1 group-hover:text-[#FF6320] transition-colors duration-300" />
     <p className="mt-4 ms-3 text-[#333333]">
       There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
     </p>
   </div>
   <p className='m-auto text-[#FF6320] mt-4 ms-15'>Stiven Smith</p>
   <p className=' ms-16'>Customer</p>
   </div>
   </div>
   </div>
    <div className='w-[90%]  m-auto mt-20 '>
<p className='flex justify-center items-center pt-10 text-[#FF6320]'>Health Tips</p>
<p className='text-[#333333] font-bold text-[30px] m-auto flex justify-center items-center'>Latest News & Blogs</p>
<p className='text-[#4D4D4D] font-normal w-[75%] mt-4 m-auto'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going</p>
      <div className='w-[90%] h-[450px]  mt-10  m-auto flex justify-between'>
      <div className='w-[24%] shadow-xl mb-4 relative group'>

  <div className="relative">
    <img src="/public/Rectangle 919 (1).png" alt="" className="w-full" />

    
    <div className="absolute inset-0 bg-[#00000099]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
      <img className='w-[100px]  h-[30px]  absolute bottom-2 right-2' src="/public/Group 2763.png" alt="" />
    </div>
  </div>

  <h3 className='text-[#333333] font-semibold  ms-3'>Now you can see the better</h3>

  <img className='w-[85%] ms-3 mt-2' src="/public/Group 2758.png" alt="" />

  <p className='mt-2 text-[#343434] ms-3'>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
  </p>

  <img className='bg-[#E0E0E0] w-[90%] h-[1px] mt-5 text-[#E0E0E0]' src="/public/Line 25.png" alt="" />

  <div className='flex justify-between items-center mt-8 ms-3'>
    <p className='text-sm'>By: Dr. Zoni’s</p>
    <img className='me-1' src="/public/Group 4376.png" alt="" />
  </div>
</div>
         <div className='w-[24%] shadow-xl mb-4 relative group'>

  <div className="relative">
    <img src="/public/Rectangle 919 (2).png" alt="" className="w-full" />

    
    <div className="absolute inset-0 bg-[#00000099] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
  </div>

  <h3 className='text-[#333333] font-semibold  ms-3'>Now you can see the better</h3>

  <img className='w-[85%] ms-3 mt-2' src="/public/Group 2758.png" alt="" />

  <p className='mt-2 text-[#343434] ms-3'>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
  </p>

  <img className='bg-[#E0E0E0] w-[90%] h-[1px] mt-5 text-[#E0E0E0]' src="/public/Line 25.png" alt="" />

  <div className='flex justify-between items-center mt-8 ms-3'>
    <p className='text-sm'>By: Dr. Zoni’s</p>
    <img className='me-1' src="/public/Group 4376.png" alt="" />
  </div>
</div>
        <div className='w-[24%] shadow-xl mb-4 relative group'>

  <div className="relative">
    <img src="/public/Rectangle 919 (1).png" alt="" className="w-full" />

    
    <div className="absolute inset-0 bg-[#00000099] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
  </div>

  <h3 className='text-[#333333] font-semibold  ms-3'>Now you can see the better</h3>

  <img className='w-[85%] ms-3 mt-2' src="/public/Group 2758.png" alt="" />

  <p className='mt-2 text-[#343434] ms-3'>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
  </p>

  <img className='bg-[#E0E0E0] w-[90%] h-[1px] mt-5 text-[#E0E0E0]' src="/public/Line 25.png" alt="" />

  <div className='flex justify-between items-center mt-8 ms-3'>
    <p className='text-sm'>By: Dr. Zoni’s</p>
    <img className='me-1' src="/public/Group 4376.png" alt="" />
  </div>
</div>
   <div className='w-[24%] shadow-xl mb-4 relative group'>

  <div className="relative">
    <img src="/public/Group 4381.png" alt="" className="w-full" />

    
    <div className="absolute inset-0 bg-[#00000099] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
  </div>

  <h3 className='text-[#333333] font-semibold  ms-3'>Now you can see the better</h3>

  <img className='w-[85%] ms-3 mt-2' src="/public/Group 2758.png" alt="" />

  <p className='mt-2 text-[#343434] ms-3'>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
  </p>

  <img className='bg-[#E0E0E0] w-[90%] h-[1px] mt-5 text-[#E0E0E0]' src="/public/Line 25.png" alt="" />

  <div className='flex justify-between items-center mt-8 ms-3'>
    <p className='text-sm'>By: Dr. Zoni’s</p>
    <img className='me-1' src="/public/Group 4376.png" alt="" />
  </div>
</div>

  
      </div>
      
      </div>
    </div>
  )
}
