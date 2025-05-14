import React, { useState } from 'react'
import { UseApi } from '../../BioContext';
import { GiNinjaStar } from 'react-icons/gi';
import { FiNavigation2 } from 'react-icons/fi';

const HourlyForecast = () => {
  //humidity//
  
  const[humidity,setHumidity] = useState(true);
  const[temprature,setTemprature] = useState(false);
  const[wind,setWind] = useState(false);

 const handleHumidity = () => {
  setHumidity(!humidity);
  setTemprature(false);
  setWind(false);
  setHumidity(true)
 }
 const handleTemprature = () => {
  setTemprature(!temprature);
  setHumidity(false);
  setWind(false);
  setTemprature(true)
 }
 const handleWind = () => {
  setWind(!wind);
  setTemprature(false);
  setHumidity(false);
  setWind(true)
 }

      const {forecastweather,theame} = UseApi();

  return (<>   
   <div className="flex flex-row justify-between items-center mt-16 ">
    <div className="size-8"><GiNinjaStar className={`chakra size-8 ${theame===true? "text-violet-600":"text-zinc-400"}`}/></div>
    <h1 className={`boxshadow2 flex relative z-1 flex-row justify-center items-center text-xl font-bold text-white/90 pl-5 pr-5 pb-2 pt-2 rounded-b-[50%] rounded-t-[50%] outline-none ${theame===true? "bg-gradient-to-b from-violet-100 via-violet-600 to-violet-100" : "bg-zinc-700"}`}>Hourly details</h1>


                                  {/*bekar hai bhai*/}
<div className={`outline-1 ${theame===true? "outline-violet-600":"outline-zinc-400"} w-[50%] left-10 absolute `}></div>
<div className={`outline-1 ${theame===true? "outline-violet-600":"outline-zinc-400"} w-[50%] right-10 absolute `}></div>


    <p className="flex flex-row justify-center items-center ">
    <GiNinjaStar className={`chakra2 size-8 ${theame===true? "text-violet-600":"text-zinc-400"}`}/>
    </p>
</div>
<div className="mt-5 p-2 rounded-t-2xl flex w-full h-fit justify-around bg-violet-500">
  <div onClick={handleHumidity} className="bg-violet-400 p-1 pl-2 pr-2 rounded-full">Humidity</div>
  <div onClick={handleWind} className="bg-violet-400 p-1 pl-2 pr-2 rounded-full">Wind</div>    
  <div onClick={handleTemprature} className="bg-violet-400 p-1 pl-2 pr-2 rounded-full">Temperature</div>
  </div>
    <div className={` flex flex-row w-[100%] h-[9rem] ${theame===true? "bg-gradient-to-b from-violet-50 to-white boxshadow3" : "bg-gradient-to-b from-zinc-800 to-zinc-600 boxshadow3dark"} gap-5 p-3  rounded-b-2xl overflow-scroll`}>
      { forecastweather.timelines.hourly.map((id) => (
        
    <div key={id} className={`  h-full min-w-16   flex flex-col justify-end items-center `}>
{temprature?
  <div className={`${temprature===false? "hidden":"block"} w-[60%] h-full flex flex-col justify-end items-center`}><div className="text-sm text-violet-500">{id.values.temperature.toFixed()}°C </div>
      <div style={{height: `${id.values.temperature.toFixed()*1.5}%`, backgroundColor: `rgb(255,${215-id.values.temperature.toFixed()*3},${130-id.values.temperature.toFixed()*3})`}} className={`w-full rounded-2xl`}> </div>
</div>:""}

     {humidity?
      <div className={`${humidity===true? "block":"hidden"} w-[60%] h-full flex flex-col justify-end items-center`}><div className="text-sm text-violet-500">{id.values.humidity.toFixed()}% </div>
      <div style={{height: `${id.values.humidity.toFixed()*1.5}%`, backgroundColor: `rgb(165,${150-id.values.humidity.toFixed()*3},${255-id.values.humidity.toFixed()})`}} className={`${theame===true? " bg-violet-500 " : " bg-gradient-to-bl from-zinc-500 to-zinc-700"} w-full rounded-2xl`}> </div>
</div>: ""}

{wind?
  <div className={`${wind===false? "hidden":"block"} w-[115%] h-full flex flex-col justify-between items-center`}>
  <div className="text-violet-500 text-sm">{id.values.windSpeed} kph</div>
<FiNavigation2 style={{rotate:`${id.values.windDirection}deg`}} className={`text-black size-11`} />
<div className=""></div>
</div>:""
}
<div className="text-violet-500 text-sm ">{new Date(id.time).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit', hour12:"true"})}</div>
      </div>
        ) )
    }
       </div>
       </>
  )
}

export default HourlyForecast