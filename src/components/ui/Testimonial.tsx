'use client'
import {HiUserCircle} from 'react-icons/hi'
import dummyCars from "@/data";
import Image from "next/image";
import Slider from "react-slick";

const Testimonial = () => {

  //@ts-ignore
    const userTestimonial=dummyCars?.map((item:any)=> item.bookings[0].reviews);
  

    const settings = {
        dots: true,
        infinite: true,
       
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 4000,
      };

    return (
        <div className='container  px-4'>
           <div className="text-center">
        <h4 className='text-[18px]  text-blue-600 py-1'>What they are all saying</h4>
          <h1 className='text-2xl font-bold border-b-2 border-indigo-800 inline-block '>Testimonial</h1>
         
        </div> 
       <div className="flex  w-full">
          <div className="w-full  mb-8">
          <Slider {...settings}>
   
  
   {userTestimonial[0]?.map((item:any,ind:number)=>(

   <div  key={ind} className=''>

     <div className="bg-white p-4 rounded shadow flex flex-col">
       <div className="text-center flex justify-center items-center">
       <HiUserCircle className='text-[100px] font-bold ' />
         <div className='flex flex-col'>
         <p className="mt-2 font-semibold">Jane Smith</p>
         <p className='text-base '>Graphic Designer</p>
        </div>        
       </div>
       <p className='p-10 mx-w-[500px]'>{item.comment}</p>
       
     </div>
   </div>
  
   
   
   ))}

</Slider>
           </div> 

      </div>
      {/* bg clicping path */}
      <div>
         <div className="relative isolate  ">
             <div aria-hidden='true' className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
             <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />

         
             </div>
            
              {/* {bg gradient} */}
             <div aria-hidden='true' className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
             <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />

         
             </div>

         </div>
     </div>
        {/* bg clicping path end */}
 </div>

    );
};

export default Testimonial;