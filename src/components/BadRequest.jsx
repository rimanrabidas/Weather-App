import React from 'react'
import { ImBlocked } from 'react-icons/im'
import { RiRefreshLine } from 'react-icons/ri';

const BadRequest = () => {
   
  return (
    <div className='w-screen h-screen text-black flex flex-col justify-center items-center bg-violet-100 '>
           <div className={` w-[80%] h-fit bg-white rounded-2xl flex  flex-col gap-5  justify-center items-center p-5 shadow-2xl shadow-black/30`}>
               
                   <ImBlocked className="size-14 text-red-600"/>
              <h1 className="text-2xl font-bold">Page Not Found</h1>
              <p className={` flex flex-col justify-center items-center text-sm text-black/80 gap-1`}> 
              <p className='text-md'> Error</p>
              <p className='text-4xl'>404</p>
             </p>
              <button className="w-full h-10 bg-blue-700 rounded-2xl flex justify-center items-center gap-1.5 text-white cursor-pointer" onClick={() => window.location.reload()} ><RiRefreshLine className="size-5"/>Try Again</button>
               </div>
           </div>
  )
}

export default BadRequest