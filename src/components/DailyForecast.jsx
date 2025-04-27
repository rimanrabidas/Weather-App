import React from 'react'
import { GiNinjaStar, GiPressureCooker } from 'react-icons/gi'
import { UseApi } from '../../BioContext';
import { WiHumidity } from 'react-icons/wi';
import { LiaTemperatureHighSolid } from 'react-icons/lia';
import { FaArrowUp, FaCloud } from 'react-icons/fa6';
import { IoIosEye } from 'react-icons/io';

const DailyForecast = () => {
      const {weather} = UseApi();
          
      const todeyline = [
          {
              id: 1,
              pic: <p><WiHumidity  className='size-20 text-zinc-500'/></p>,
              value: weather.main.humidity
              ,
              math:" %",
              describtion: "Humidity",
          },
          {
              id: 2,
              pic: <p><LiaTemperatureHighSolid  className='size-18 text-zinc-500'/></p>,
              value: weather.main.feels_like.toFixed(),
              math:" °C",
              describtion: "Feels_Like",
          },
          {
              id: 3,
              pic: <p><FaCloud  className='size-16 text-blue-300'/></p>,
              value: weather.clouds.all,
              math: " %",
              describtion: "Clouds",
          },
          {
              id: 4,
              pic: <p><IoIosEye className='size-16  text-zinc-500'/></p>,
              value: weather.visibility/100 ,
              math:" km",
              describtion: "Visibility",
          },
          {
              id: 5,
              pic: <p><GiPressureCooker  className='size-16  text-zinc-500'/></p>,
              value: weather.main.pressure,
              math:" hpa",
              describtion: "pressure",
          },
        
          {
              id: 6,
              pic: <p><FaArrowUp className={`size-14 text-zinc-500`}  style={{transform:`rotate(${weather.wind.deg}deg)`}}/></p>,
              value: weather.wind.speed.toFixed(),
              math:" km/h",
              describtion: "Wind & Direction",
          },
      ];
  return (
    <div className='flex flex-col w-full h-fit '>

    <div className="boxshadow3 overflow-x-scroll grid grid-cols-2 w-[99%] ml-0.5 h-fit justify-around bg-gradient-to-b from-violet-50 to-white  gap-5 p-3 mt-1 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
       
    {   todeyline.map(({id,pic,value,describtion,math})=>(
<div key={id} className="flex flex-col boxshadow text-white/90 justify-between items-center bg-violet-100 min-w-23 min-h-40 rounded-3xl hover:scale-105 cursor-pointer" >
<p className='flex shadow-xl rounded-t-2xl rounded-b-[100%] justify-center text-sm font-bold w-full  pb-1 pt-1 bg-gradient-to-t from-violet-200 to-violet-600'>{describtion}</p>
<span>{pic}</span>
<h2 className='flex rounded-b-3xl value rounded-t-[100%] justify-center text-2xl font-bold pb-1 pt-1 w-full text-white/90 bg-gradient-to-b from-violet-200 to-violet-600'>{value}{math}</h2>
</div>
      ) )}
       
    </div>
</div>
  )
}

export default DailyForecast