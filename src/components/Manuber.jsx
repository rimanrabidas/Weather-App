import React from 'react'
import { FiMinimize2 } from 'react-icons/fi'
import { IoMoon, IoSunny } from 'react-icons/io5';
import { UseApi } from '../../BioContext';

const Manuber = ({manuber,setManuber}) => {
 const {setTheame,theame } = UseApi();

  return (
    <div  className= {` ${manuber === false ? "hidden" : "fixed"}  top-0 left-0 z-50  w-screen h-full bg-black/70`} >
        <div className= {`relative flex  w-[70%] h-full ${theame===true? "bg-violet-100" : "bg-zinc-800"} rounded-tr-2xl rounded-br-2xl`}>
        <FiMinimize2 onClick={() => setManuber(!manuber)} className=' sideberandlocationtrack size-11 border-1 border-black/20 p-2 rounded-md text-violet-700 hover:scale-105 cursor-pointer absolute top-2 right-2' />

<div onClick={() => setTheame(!theame)} className="ThemeIcon flex justify-center items-center size-11 border-1 border-black/20 p-2 rounded-md hover:scale-105 cursor-pointer absolute top-2 left-2">

{theame===false?
 <IoSunny  className=' ThemeChange size-12 text-yellow-400'  /> : 
 <IoMoon className=' ThemeChange size-12 text-zinc-900'/>
}
 </div>
       
        </div>
    </div>
  )
}

export default Manuber;