import React from 'react'
import { UseApi } from '../../BioContext';

const HourlyForecast = () => {
      const {forecastweather,theame} = UseApi();
  return (
    <div className={` flex flex-row w-[98%] ml-1 h-[9rem] ${theame===true? "bg-gradient-to-b from-violet-50 to-white boxshadow3" : "bg-gradient-to-b from-zinc-800 to-zinc-600 boxshadow3dark"} gap-5 p-3  mt-5 rounded-2xl overflow-scroll`}>
      { forecastweather.list.map((id) => (
        
    <div key={id} className={`${theame===true? "boxshadow2 bg-gradient-to-bl from-violet-300 to-violet-600" : "boxshadow2 bg-gradient-to-bl from-zinc-500 to-zinc-700"}  h-full min-w-20 rounded-2xl flex flex-col justify-between items-center p-0.5`}>
      <div className="text-md">{id.weather[0].main}</div>
      <div className="flex flex-row mt-0.5"> <div className="text-sm">{id.main.temp.toFixed()}°C </div>
      <img className='size-10' src={`https://openweathermap.org/img/wn/${id.weather[0].icon}@2x.png`} alt="" /></div>
     
      <div className=" ml-1.5 text-sm text-white/90">{id.dt_txt}</div>
      </div>
        ) )
    }
       </div>
  )
}

export default HourlyForecast