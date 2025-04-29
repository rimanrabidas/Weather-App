import React from 'react'
import { AiOutlineHome} from 'react-icons/ai'
import { IoMdSearch } from 'react-icons/io'
import { TbListDetails } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import { UseApi } from '../../BioContext'

const Navber = ({setsearchpage,searchpage}) => {
  const {theame} = UseApi();
  return (
    <div className="flex w-full z-2 h-fit justify-center">
    <div className={` flex fixed bottom-5 flex-row justify-around items-center w-[85%] h-fit p-2 rounded-full ${theame===true? "bg-white nav" : "bg-zinc-800 navdark"} shadow-violet-200 shadow-2xl`}>
    <NavLink to={"/"} className="">
    <AiOutlineHome  className={`size-10 p-2 rounded-md ${theame===true? "text-violet-500" : "text-zinc-200"} hover:scale-105 cursor-pointer`}/>
    </NavLink>
       <div onClick={() => setsearchpage(!searchpage)} className={` navsearch  flex justify-center items-center ${theame===true? "bg-violet-500 text-violet-100" : "bg-zinc-100 text-zinc-900"} w-20 h-fit rounded-2xl hover:scale-105 cursor-pointer`}>
       <NavLink to={"/"}>
       <IoMdSearch className='size-10 p-2 cursor-pointer '/>    </NavLink> </div>
       <NavLink to={"/forecast"} className="">
        <TbListDetails className={`size-10 p-2 rounded-md ${theame===true? "text-violet-500" : "text-zinc-200"} hover:scale-105 cursor-pointer`}/>
        </NavLink>
    </div>
    </div>
  )
}

export default Navber;