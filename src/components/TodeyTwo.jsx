import React from 'react'
import { GiNinjaStar } from 'react-icons/gi'

const TodeyTwo = () => {
  return (
    <div className="flex flex-col w-full h-fit ">

    <div className="flex flex-row justify-between items-center mt-5 ">
            <div className="size-8"><GiNinjaStar className='chakra size-8 text-violet-600  '/></div>
            <h1 className="boxshadow2 flex relative z-1 flex-row justify-center items-center text-xl font-bold text-white/90 pl-5 pr-5 pb-2 pt-2 rounded-b-[50%] rounded-t-[50%] outline-none bg-gradient-to-b from-violet-100 via-violet-600 to-violet-100"> Sun Position</h1>


                                          {/*bekar hai bhai*/}
            <div className="outline-1 outline-violet-600 w-[50%] left-10 absolute "></div>
            <div className=" outline-1 outline-violet-600 w-[50%] right-10 absolute "></div>
    

            <p className="flex flex-row justify-center items-center text-md  ">
            <GiNinjaStar className='chakra2 size-8 text-violet-600 '/>
            </p>
        </div>

    <div className="flex boxshadow mt-6 flex-col w-full justify-center items-center bg-white h-34 rounded-2xl">
    <div className=' sunposition relative flex flex-col w-full h-full rounded-2xl text-black justify-center items-center'>
       <div className="flex absolute w-20 z-2 h-6 bg-black justify-center items-center rounded-full">
       <div className="flex absolute w-20 z-2 h-5 bg-white justify-center items-center rounded-full text-[0.7rem]"> Horizon</div>
       </div>
        <div className="flex w-28 h-14 rounded-t-full border-2 border-b-0  border-yellow-400"></div>
        <div className="flex w-28 h-14 rounded-b-full border-2 border-t-0 border-black/90"></div>
        <div className="absolute flex outline-1 z-1 w-[93%] "></div>
    </div>
    </div>
    </div>
  )
}

export default TodeyTwo