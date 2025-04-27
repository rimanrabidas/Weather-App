import React from 'react'
import { UseApi } from '../../BioContext';

const HourlyForecast = () => {
      const {forecastweather} = UseApi();
  return (
    <div className="boxshadow3 flex flex-row w-[98%] ml-1 h-[9rem] bg-gradient-to-b from-violet-50 to-white gap-5 p-3  mt-5 rounded-2xl overflow-scroll">
      { forecastweather.list.map((id) => (
        
    <div key={id} className="boxshadow2 bg-gradient-to-bl p-0.5 from-violet-300 to-violet-600 h-full min-w-20 rounded-2xl flex flex-col justify-between items-center">
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