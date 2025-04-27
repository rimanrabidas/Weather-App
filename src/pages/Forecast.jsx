import React, { useState } from 'react'
import { IoChevronBack } from 'react-icons/io5';
import Navber from '../components/Navber';
import { GiNinjaStar } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import ForecastMain from '../components/ForecastMain';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';
import SunRiseSetTime from '../components/sunRiseSetTime';
import { UseApi } from '../../BioContext';



const Forecast = () => {

    const {theame}= UseApi()
    ;
      const [searchpage,setsearchpage] = useState(false);
  return (
    <div className={`w-full h-full ${theame===true? "bg-violet-100" : "bg-zinc-800"} overflow-hidden pb-30`} >
        
<div className="flex relative flex-col w-full h-full overflow-x-scroll p-5  text-white">


 <div className="flex w-full header fixed top-0 pt-3 pb-1 flex-row z-2 bg-violet-100 pl-5 pr-5 justify-between  items-center ">
  <NavLink to={"/"}>
        <IoChevronBack className=' sideberandlocationtrack size-11 border-1 border-black/20 p-2 rounded-md text-violet-700 hover:scale-105 cursor-pointer'/></NavLink>
        <span onClick={() => setsearchpage(!searchpage)} className="boxshadow2 flex flex-row gap-1 justify-start items-center bg-gradient-to-b  from-violet-300 to-violet-600 rounded-b-full pl-5 pr-5 pt-1">
          <h1 className='font-bold text-white/90 text-md'>Forecast</h1> 
        </span>
        <div className=" size-11  p-2 "></div>
        </div>

       
                                    {/*repit*/}


        <div className="flex flex-row justify-between items-center mt-16 ">
                    <div className="size-8"><GiNinjaStar className='chakra size-8 text-violet-600  '/></div>
                    <h1 className="boxshadow2 flex relative z-1 flex-row justify-center items-center text-xl font-bold text-white/90 pl-5 pr-5 pb-2 pt-2 rounded-b-[50%] rounded-t-[50%] outline-none bg-gradient-to-b from-violet-100 via-violet-600 to-violet-100">3 Hourly Forecast</h1>
        
        
                                                  {/*bekar hai bhai*/}
                    <div className="outline-1 outline-violet-600 w-[50%] left-10 absolute "></div>
                    <div className="outline-1 outline-violet-600 w-[50%] right-10 absolute "></div>
            
        
                    <p className="flex flex-row justify-center items-center ">
                    <GiNinjaStar className='chakra2 size-8 text-violet-600 '/>
                    </p>
        </div>

<HourlyForecast/>
<ForecastMain/>
 <div className="flex flex-row w-fit h-7 bg-violet-500 rounded-tr-[2rem] pl-8 pr-8 rounded-tl-2xl ml-0.5 mt-6 text-xl">Highlights</div>
    <DailyForecast/>
  
    
  <SunRiseSetTime/>

                                   {/*repit*/}

 <Navber/>
</div>


    </div>
  )
}

export default Forecast