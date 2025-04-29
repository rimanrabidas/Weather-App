import React, { useState } from 'react'
import { RiMenuUnfoldFill } from 'react-icons/ri';
import Today from '../components/Today';
import Navber from '../components/Navber';
import { BiCurrentLocation } from 'react-icons/bi';
import Search from '../components/Search';
import TodeyTwo from '../components/TodeyTwo';
import { IoIosCloud, IoIosSunny } from 'react-icons/io';
import { UseApi } from '../../BioContext';
import Manuber from '../components/Manuber';

const Home = () => {

  

const {weather,time,localTimeDate,
  localTimeMonth,localWeekDay,theame} = UseApi();



  const [manuber,setManuber] = useState(false);
  const [searchpage,setsearchpage] = useState(false);
  return (

      <div className={`w-full relative h-full ${theame===true? "bg-violet-100" : "bg-zinc-800"} overflow-hidden`}>
        { weather ? (
    <div className=' flex  flex-col w-full h-full overflow-x-scroll p-5 pb-32 text-white'>

        <div className={`flex w-full header fixed top-0 pt-3 pb-1 flex-row z-2 ${theame===true? "bg-violet-100 headerlight" : "bg-zinc-800 headerdark"} pl-5 pr-5 justify-between  items-center `}>
        <RiMenuUnfoldFill onClick={() => setManuber(!manuber)} className={` sideberandlocationtrack size-11 border-1 border-black/20 p-2 rounded-md ${theame===true? "text-violet-700" : "text-zinc-300"} hover:scale-105 cursor-pointer`}/>
        <span onClick={() => setsearchpage(!searchpage)} className={`boxshadow2 flex flex-row gap-1 justify-start items-center ${theame===true? "bg-gradient-to-b  from-violet-300 to-violet-600": "bg-gradient-to-b  from-zinc-500 to-zinc-700"} rounded-b-full pl-5 pr-5 pt-1`}>
          <h1 className='font-bold text-white/90 text-md'>{weather.name},</h1> 
          <p className='font-bold text-white/90 text-sm'>{weather.sys.country}</p>
        </span>
        <BiCurrentLocation className={`sideberandlocationtrack size-11 border-1  border-black/20 p-2 rounded-md ${theame===true? "text-violet-700" : "text-zinc-300"} hover:scale-105 cursor-pointer`}/>
        </div>

        <div className={` mainpart relative flex flex-col w-full min-h-50 max-h-55 h-fit pb-4 mt-15 rounded-3xl ${theame===true? "bg-gradient-to-b  from-violet-400 to-violet-600": "bg-gradient-to-b  from-zinc-500 to-zinc-700"} hover:scale-101 cursor-pointer`}>
            <div className="flex flex-row justify-between text-white p-4 ">
                <h1 className='text-2xl font-medium'>{`${localWeekDay}, ${localTimeDate} ${localTimeMonth}`}</h1>
                <h1 className='flex flex-col justify-center items-center text-2xl font-medium'>Today<p className='text-sm'>{time}</p></h1>
            </div>

<div className="flex flex-col">
<h1 className={`temp flex text-7xl pl-3 font-bold ${theame===true? "bg-gradient-to-b  from-white/100 to-violet-400": "bg-gradient-to-b  from-zinc-50 to-zinc-200"} bg-clip-text text-transparent `}>{weather.main.temp.toFixed()} <p className={`text-3xl font-bold ${theame===true? "bg-gradient-to-b  from-white/100 to-violet-500": "bg-gradient-to-b  from-zinc-50 to-zinc-200"} bg-clip-text text-transparent`}> °C</p></h1>
<h2 className='font-bold text-xl pl-4 pt-1 text-white/90'> {weather.weather[0].main}</h2>
</div>
<div className="SunnyCloudy">
<IoIosSunny  className='flex absolute size-25 top-23 text-yellow-400  right-17' />
<IoIosCloud className='flex absolute size-30 top-26.5 text-zinc-200 right-5' />
</div>

        </div>
        <Today />
        <TodeyTwo/>
        <Navber setsearchpage={setsearchpage}
        searchpage={searchpage}/>
        <Search 
        setsearchpage={setsearchpage}
        searchpage={searchpage}
      />
      <Manuber manuber = {manuber} setManuber = {setManuber}/>



    </div>
        ):(<p>Loading...</p>)}
    </div>
  

  )
}

export default Home;