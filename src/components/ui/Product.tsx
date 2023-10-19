'use client'
import React, { useState , useEffect } from 'react';
import Card from './Card';
import dummyCars from '@/data';
import { Car } from '@/types/type';


const Product = () => {
 
const [filterItems, setFilterItems] =useState<Car[]>([])
const [basicActive, setBasicActive] = useState('')

//@ts-ignore
const categories = [...new Set(dummyCars?.map(item => item.carName))]; 

const [currentPage, setCurrentPage] = useState(1);
const [countItem, setCountItem] = useState(8)
const indexOfLastItem = currentPage * 8;
const indexOfFirstItem = indexOfLastItem - 8;
const currentItems = dummyCars.slice(indexOfFirstItem, indexOfLastItem);

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

useEffect(()=>{
  itemAllSet()
},[])



let content=null;

if(dummyCars?.length > 0){
   
    content=currentItems?.map(item=> <Card key={item.id} item={item} /> )
    
  }



  if(filterItems?.length > 0){
    content=filterItems?.map(item=> <Card key={item.id} item={item} /> )
    
  }
 

  




    return (
      <>
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
        {/* bg clicping path End*/}
        <div className='container py-6 pb-16'>
        <div className="text-center">
        <h4 className='text-[18px]  text-blue-600 py-1'>WHAT WE OFFER</h4>
          <h1 className='text-2xl font-bold border-b-2 border-indigo-800 inline-block '>CHOOSE YOUR CAR</h1>
          <p className='text-[16] max-w-[400px] text-center m-auto py-3 mb-10'>Proin gravida nibh vel velit auctor  aliquet. Aenean sollicitudin, lorem
           quis bibendum auctor.</p>
        </div>
        <div className='flex justify-center items-center mb-[50px]'>
           <div className="tabs ">
           <button onClick={itemAllSet} className={`tab tab-lifted ${basicActive === 'All' ? `tab-active text-blue-800 font-bold text-2xl` : 'tab-lifted'} text-2xl`}>All</button>
               {categories?.map((items,ind)=>(
                <div key={ind}>
                     <button onClick={()=>handleFilterItem(items)} className={`tab  font-bold  ${basicActive === items ? `tab-active text-blue-800 text-2xl tab-lifted ` : 'tab-lifted'}`}>{items}</button> 
                </div>
               ))}
             
        </div>
           </div>
        
          
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 ease-in-out">
         {content}
             
           
              </div>
              <div className="flex justify-center items-center gap-5 mt-[50px] ">
  <button onClick={handleShowLess} className="btn btn-outline w-[150px] sm:w-[300px]">Previous page</button>
  <button onClick={handleShowMore} className="btn btn-outline w-[150px] sm:w-[300px]">Next</button>
</div>
         
        </div>
        </>
    );
};

export default Product;