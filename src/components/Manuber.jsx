import React from 'react'
import { FiMinimize2 } from 'react-icons/fi'
import { IoMoon, IoSunny } from 'react-icons/io5';
import { UseApi } from '../../BioContext';
import { TiHome } from 'react-icons/ti';
import { MdSearch } from 'react-icons/md';
import { FaArrowTrendUp, FaLinkedin, FaSquareGithub } from 'react-icons/fa6';
import { IoMdMoon } from 'react-icons/io';
import { FaTelegramPlane, FaTwitterSquare } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Manuber = ({manuber,setManuber, setsearchpage,
  searchpage,homepageForecast,setHomepageForecast}) => {
 const {setTheame,theame,} = UseApi();
 const handleSearchBer = () =>{
  setsearchpage(!searchpage);
  setManuber(!manuber);
 };

  return (
    <div  className= {` ${manuber === false ? "hidden" : "fixed"}  top-0 left-0 z-50  w-screen h-full bg-black/70`} >
        <div className= {`relative flex flex-col lg:w-[30%] w-[70%] h-full ${theame===true? "bg-violet-100" : "bg-zinc-800"} rounded-tr-2xl rounded-br-2xl `}>
        <FiMinimize2 onClick={() => setManuber(!manuber)} className={` sideberandlocationtrack size-11 border-1 border-black/20 p-2 rounded-md ${theame===true? "text-violet-700" : "text-zinc-200"} hover:scale-105 cursor-pointer absolute top-2 right-2`} />

<div onClick={() => setTheame(!theame)} className="ThemeIcon flex justify-center items-center size-11 border-1 border-black/20 p-2 rounded-md hover:scale-105 cursor-pointer absolute top-2 left-2">

{theame===false?
 <IoSunny  className=' ThemeChange size-12 text-yellow-400'  /> : 
 <IoMoon className=' ThemeChange size-12 text-zinc-900'/>
}

 </div>
       <div className={` flex flex-col gap-4 w-full h-[75%] mt-13 p-2 ${theame===true? "text-black/80" : "text-white/80"}`}>
       <div className="w-full h-[1px] bg-zinc-300"></div>

<NavLink to={"/"} onClick={() => setManuber(!manuber)} className="flex w-full h-fit text-xl gap-5 items-center"><TiHome className='size-8'/>  Home</NavLink>
<div onClick={handleSearchBer}  className="flex w-full h-fit text-xl gap-5 items-center"><MdSearch  className='size-8'/> Search </div>
<NavLink to={"/forecast"} className="flex w-full h-fit text-xl gap-5 items-center"><FaArrowTrendUp className='size-8'/>  Forecast</NavLink>

        <div className={`flex w-full h-fit items-center flex-row gap-5  `}><IoMdMoon className='size-8 ' /><p className='text-xl'>Theame </p>
        <button onClick={() => setTheame(!theame)} className={`w-12 h-5 rounded-full  manushadow ${theame===true? "bg-black" : "bg-amber-400"} flex items-center`}> <div className={`w-6 h-4  rounded-full  ${theame===true? "bg-white ml-0.5" : "ml-5.5 bg-black/80"} `}></div></button>
          </div>
          <div className="flex w-full h-fit items-center flex-row gap-5  "><p>Hourly Forecast On Homepage</p>
          <button onClick={() => setHomepageForecast(!homepageForecast)} className={`w-12 h-5 rounded-full  manushadow ${homepageForecast===false? "bg-black" : "bg-amber-400"} flex items-center`}> <div className={`w-6 h-4  rounded-full  ${homepageForecast===false? "bg-white ml-0.5" : "ml-5.5 bg-black/80"} `}></div></button>
          </div>
       </div>

       <div className={`flex flex-col w-full h-20 items-center justify-center gap-2 ${theame===true? "text-black/80" : "text-white/80"}`}>
        <div className=" flex w-full h-fit gap-2 items-center justify-center"> <p> Contact me</p>  / <p>Socials</p> </div>
        <div className="flex w-full h-fit gap-5 items-center justify-center">
        <FaLinkedin className='size-6' />
        <FaSquareGithub className='size-6' />
        <FaTwitterSquare className='size-6' />
        <FaTelegramPlane className={`size-6 ${theame===true? "text-violet-100 bg-black/80" : "bg-white/80 text-black/80"}  rounded-sm p-[2px]`} />
        </div>
       </div>

        </div>
    </div>
  )
}

export default Manuber;