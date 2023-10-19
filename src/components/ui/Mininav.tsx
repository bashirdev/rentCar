'use client'
import Image from 'next/image';
import React,{useState} from 'react';
import topBg from "../../../public/assets/img/top-obj.png"
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsSearch } from 'react-icons/bs';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { IoIosAddCircle, IoMdCall } from 'react-icons/io';
import dummyCars from '@/data';
import { Car } from '@/types/type';
import SearchModel from './SearchModel';


const Mininav = () => {
    const [search,setSearch] =useState('')
    const [searchData, setSearchData] = useState<Car[]>([])

  
     

    const hundleSubmit=(e:any)=>{
        e.preventDefault();
        const getCarBySearch=dummyCars.filter((item:any)=> item.carName.toLowerCase().includes(search.toLowerCase()))
       setSearchData(getCarBySearch)
        //@ts-ignore
        document.getElementById('my_modal_4').showModal()
        setSearch('')
    }
    
    
    return (
        <div className="navbar  overflow-hidden bg-[#111] h-[60px] pl-2 pr-2 md:pl-5 md:pr-10">
            <Image className='hidden md:block lg:block  absolute inset-0 top-0 left-0 h-[65px] w-[25%] z-0'  src={topBg} alt="topbg"  />
       <div className="container flex ">
               <div className=" flex-1 relative  items-center justify-center hidden sm:block ">
               
                      <IoMdCall className='text-white inline-block text-[12px] sm:text-[14px] md:text-[16px] lg:text-[24px]' />
                       <p className='inline-block text-white  text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]'>  +96895705036</p>
                    
             </div>
             <div className="hidden lg:block flex-1 justify-start iems-centert max-w-[254px] ">
                <ul className="menu menu-horizontal px-1 flex justify-start items-center">
                    <li>
                        <Link href='/' className="flex gap-[5px] text-gray-300 hover:text-[#4F5CEC] transition-text ease-linear duration-75   ">
                            <BsFacebook className='text-2xl  ' />  
                        </Link>
                        </li>
                    <li>
                        <Link  href='/' className=" gap-[5px] text-gray-300 hover:text-[#4F5CEC] ">
                                    <BsInstagram className='text-2xl  ' />
                                    
                        </Link>
                    </li>
        
                </ul>
            </div>

   <div className=" relative mx-w-[100px]">
  
   <form onSubmit={hundleSubmit}>
   <input type='text' 
    onChange={(e)=> setSearch(e.target.value)} value={search} 
   className="border-none
                    ring-[#4F5CEC] 
                    focus:ring-transparent
                   bg-gray-50 p-[10px]
                    rounded-md w-[150px] sm:w-[200px] md:w-[300px] md:flex-start height-[30px] " 
                    placeholder='Search' />
                <button type='submit'>
                    <BsSearch className='absolute right-4 top-3 text-[#4F5CEC] text-bold' />
             </button> 
    </form>
  </div>          
  <div className="flex-3 justify-end  flex-end gap-1 sm:gap-0 ">
    <ul className="menu  menu-horizontal px-1">
      <li>
          <Link href='/' className="flex gap-[10px] text-gray-300 hover:text-[#4F5CEC] transition-text ease-linear duration-75   ">
                 <AiOutlinePoweroff className='text-[14px] md:text-1xl lg:text-2xl ' />  LOGIN
          </Link>
     </li>
      <li>
          <Link href='/' className="flex gap-[10px] text-gray-300 hover:text-[#4F5CEC] transition-text ease-linear duration-75   ">
                 <IoIosAddCircle className='text-[14px] md:text-1xl lg:text-2xl  ' />  SIGN UP
          </Link>
     </li>
     
    </ul>

    
  </div>
        <SearchModel  searchData={searchData} />
        </div>
        </div>
    );
};

export default Mininav;