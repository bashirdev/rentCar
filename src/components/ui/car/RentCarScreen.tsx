'use client'
import { useState,useEffect} from 'react';
import dummyCars from '@/data';
import { Car } from '@/types/type';
import { usePathname } from 'next/navigation'
import Card from '../Card';
import { TbSearch } from 'react-icons/tb';
import Link from 'next/link';
import Rating from '../Rating';
import { BsSearch } from 'react-icons/bs';


const RentCarScreen = () => {
  const [search,setSearch] =useState('')
  const [searchData, setSearchData] = useState<Car[]>([])
  const [value, setValue] = useState(0)
 const [filterItems, setFilterItems] =useState<Car[]>([])
 const [basicActive, setBasicActive] = useState('')

const pathName=usePathname()

//@ts-ignore
const categories = [...new Set(dummyCars?.map(item => item.carName))]; 

const [currentPage, setCurrentPage] = useState(1);
const [countItem, setCountItem] = useState(8)
const indexOfLastItem = currentPage * 8;
const indexOfFirstItem = indexOfLastItem - 8;
const currentItems = dummyCars.slice(indexOfFirstItem, indexOfLastItem);

//@ts-ignore
const myRating=dummyCars?.map((item:any)=> item.bookings[0].reviews[0]);

const mergedArray=myRating.flat().map(item=> item.rating);

//@ts-ignore
const ratingUnique=[...new Set(mergedArray?.map((item) => item))] ; 



const filterByStar=(ratingItem:any)=>{
  let findItem=dummyCars.filter(item=> item?.ratingNum === ratingItem)
  setFilterItems(findItem)
}


const handleShowMore = () => {
  
  setCountItem((currentPage * currentItems.length)+8) 
  setCurrentPage(currentPage + 1);
  
  

};

const handleShowLess = () => {
  if (currentPage > 1) {
    setCountItem(countItem - 8)
    setCurrentPage(currentPage - 1);
    
  }
};


const handleFilterItem=(items:string)=>{
    setBasicActive(items)
   let filterItem=dummyCars.filter(item=> item.carName === items)
    setFilterItems(filterItem)
   
}

const itemAllSet=()=>{

   setFilterItems([])
   setBasicActive('All')

}





 

const hundleSubmit=(e:any)=>{
    e.preventDefault();
    const getCarBySearch=dummyCars.filter((item:any)=> item.carName.toLowerCase().includes(search.toLowerCase()))
    setFilterItems(getCarBySearch)
    setSearch('')
}



 const handleValueChange=(e:any)=>{
  setValue(e.target.value)
 let PricefilterItem=dummyCars.filter(item=> item.perDayPrice === Number(value))
  setFilterItems(PricefilterItem)
  
 
 }



useEffect(()=>{
  itemAllSet()
},[])



let content=null;

if(dummyCars?.length > 0){
   
    content=currentItems?.map(item=> <Card  key={item.id} item={item} /> )
    
  }



  if(filterItems?.length > 0){
    content=filterItems?.map(item=> <Card  key={item.id} item={item} /> )
    
  }
 

 
 
    
    return (
      <div className="container py-5 min-h-[100vh]">
        <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center sm:items-start">
        
       {/* sidebar */}
       <div className="w-full sm:w-3/12  ">
             <div className="w-full flex items-center justify-arround flex-col px-2 relative">
            <div className='items-start  w-full  hidden md:block px-2'>
         
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
                    <BsSearch className='absolute cursor-pointer right-8 hover:text-black-800 top-3 text-[#4F5CEC] text-bold' />
             </button> 
    </form>
      
      </div>

            <hr />

            <div className="shadow-md w-full flex mb-5 flex-col   h-max px-3 py-3">
            <div className='flex  mb-[50px]'>
           <div className=" ">
           <button onClick={itemAllSet} className={` ${basicActive === 'All' ? `tab-active text-blue-800 text-2xl` : ''} text-2xl`}>All</button>
               {categories?.map((items,ind)=>(
                <div key={ind}>
                  <div  className="flex flex-start  py-3">
                    <input checked={basicActive === items} onClick={()=>handleFilterItem(items)} value={items} type="checkbox"   className={`text-primary focus:ring-0 rounded-sm cursor-pointer`} />
                    <label htmlFor={items} className="text-gray-600 ml-3 cursor-pointer uppercase hover:text-primary">{items}</label>
                  
                </div>
                   
                </div>
               ))}
             
        </div>
           </div>

      
        </div>



            <hr />
       <div className="   shadow-md w-full flex mb-5 flex-col   h-max px-3 py-3">
         <label htmlFor="range" className="font-bold text-gray-600 py-2">Price($ {value})</label>
         <input  type="range" onChange={handleValueChange} name="price" min={Number(0)} max={Number(100)} value={value} 
         className="appearance-none 
         w-full h-0.5 bg-custom text-primary rounded outline-none  " />
        </div>
            <hr />
       <div className="   shadow-md w-full flex mb-5 flex-col   h-max px-3 py-3">
       
       {ratingUnique.map((rating:any,ind:number)=>{
        const roundedRating = Math.round(rating * 2) / 2;
        return(
          <div key={ind} className="flex items-center space-x-1">
         
          {Array.from({ length: 5 }, (_, index) => (
            <div
            onClick={()=>filterByStar(rating)}
              key={index}
              className={`star rounded-sm cursor-pointer ${
                roundedRating >= index + 1
                  ? 'text-yellow-500'
                  : roundedRating + 2.5 === index + 1
                  ? 'text-amber-500'
                  : 'text-gray-400'
              } text-2xl`}
            >
              &#9733;
            </div>
          ))}
        </div>
        )
       })}
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
              className='relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />

         
             </div>
            
              {/* {bg gradient} */}
             <div aria-hidden='true' className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
             <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:right-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />

         
             </div>

         </div>
     </div>
        {/* bg clicping path end */} 
             </div>
       
{/* sidebar end */}
       
        
        <div className="w-9/12  ">
           <Link href="/rentCarShop" className='text-2xl font-bold my-10 '>
            <span className='mb-[40px]'>{pathName}</span>
           </Link>
          <div className='flex flex-wrap  '>
            <div className=' grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-[100%] gap-5'>
              {content}
             
           
             </div>
          </div>
          <div className="flex justify-center items-center gap-5 mt-[50px] ">
  <button onClick={handleShowLess} className="btn btn-outline w-[150px] sm:w-[300px]">Previous page</button>
  <button onClick={handleShowMore} className="btn btn-outline w-[150px] sm:w-[300px]">Next</button>
</div>
        </div>
     </div>
           
    </div>
    );
};

export default RentCarScreen;