import React from 'react'
import { AiOutlineHome} from 'react-icons/ai'
import { IoMdSearch } from 'react-icons/io'
import { TbListDetails } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

const Navber = ({setsearchpage,searchpage}) => {
  return (
    <div className="flex w-full z-2 h-fit justify-center">
    <div className='nav flex fixed bottom-5 flex-row justify-around items-center w-[85%] h-fit p-2 rounded-full bg-white shadow-violet-200 shadow-2xl'>
    <NavLink to={"/"} className="">
    <AiOutlineHome  className='size-10 p-2 rounded-md text-violet-500 hover:scale-105 cursor-pointer'/>
    </NavLink>
       <div onClick={() => setsearchpage(!searchpage)} className=" navsearch  flex justify-center items-center bg-violet-500 w-20 h-fit rounded-2xl text-violet-100 hover:scale-105 cursor-pointer">
       <NavLink to={"/"}>
       <IoMdSearch className='size-10 p-2 cursor-pointer '/>    </NavLink> </div>
       <NavLink to={"/forecast"} className="">
        <TbListDetails className='size-10 p-2 rounded-md text-violet-500 hover:scale-105 cursor-pointer'/>
        </NavLink>
    </div>
    </div>
  )
}

export default Navber;