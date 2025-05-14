import { UseApi } from '../../BioContext';
import { WiRainMix } from 'react-icons/wi';
import { LiaTemperatureHighSolid } from 'react-icons/lia';
import {  FaCloud } from 'react-icons/fa6';
import { BsDropletFill } from 'react-icons/bs';
import { IoTimer } from 'react-icons/io5';
import { FiNavigation2 } from 'react-icons/fi';

const DailyForecast = () => {
      const {weather,theame} = UseApi();
          
   const uvIndex=weather.data.values.uvIndex;
   
       const todeyline = [
           {
               id: 1,
               pic: <p><BsDropletFill  className={`size-16 ${theame===true? "text-zinc-500" : "text-zinc-100"}`}/></p>,
               value: weather.data.values.humidity,
               math:" %",
               describtion: "Humidity",
           },
           {
               id: 2,
               pic: <p><LiaTemperatureHighSolid  className={`size-18 ${theame===true? "text-zinc-500" : "text-zinc-100"}`}/></p>,
               value: uvIndex ,
               math:uvIndex<=2? " Low":"" || uvIndex<=5? " Moderate":"" || uvIndex<=7? " High":"" || uvIndex<=10? " Very High":""  || uvIndex>=11? " Extreme":"" ,
               describtion: "Uv Index",
           },
           {
               id: 3,
               pic: <p><FaCloud  className={`size-16 ${theame===true? "text-blue-300" : "text-zinc-100"}`}/></p>,
               value: weather.data.values.cloudCover,
               math: " %",
               describtion: "Clouds",
           },
           {
               id: 4,
               pic: <p><IoTimer  className={`size-16 ${theame===true? "text-zinc-500" : "text-zinc-100"}`}/></p>,
               value: weather.data.values.pressureSeaLevel.toFixed(),
               math:" hpa",
               describtion: "pressure",
           },
         
           {
               id: 5,
               pic: <p><FiNavigation2 className={`size-14 ${theame===true? "text-zinc-500" : "text-zinc-100"}`}  style={{transform:`rotate(${weather.data.values.windDirection}deg)`}}/></p>,
               value: weather.data.values.windSpeed,
               math:" kph",
               describtion: "Wind & Direction",
           },
             {
               id: 6,
               pic: <p><WiRainMix className={`size-18 ${theame===true? "text-zinc-500" : "text-zinc-100"}`}  style={{transform:`rotate(${weather.location.name}deg)`}}/></p>,
               value: weather.data.values.precipitationProbability,
               math:" mm",
               describtion: "Precipitation",
           },
       ];
   
  return (
    <div className='flex flex-col w-full h-fit lg:absolute lg:right-5 lg:top-[45%]  lg:w-[60%] '>

    <div className={`overflow-x-scroll grid grid-cols-2 lg:grid-cols-6 w-[99%] ml-0.5 h-fit justify-around ${theame===true? "bg-gradient-to-b from-violet-50 to-white boxshadow3 " : "bg-gradient-to-b from-zinc-800 to-white/10 boxshadow3dark"}  gap-5 p-3 mt-1 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl`}>
       
    {   todeyline.map(({id,pic,value,describtion,math})=>(
 <div key={id} className={`flex flex-col boxshadow text-white/90 justify-between items-center ${theame===true? "bg-violet-100 " : "bg-gradient-to-b from-zinc-400 to-zinc-700 "}min-w-23 min-h-40 rounded-3xl hover:scale-105 cursor-pointer`} >
    <p className={`flex shadow-xl rounded-t-2xl rounded-b-[100%] justify-center text-sm font-bold w-full  pb-1 pt-1 ${theame===true? "bg-gradient-to-t from-violet-200 to-violet-600" : "bg-gradient-to-t from-zinc-700 to-zinc-600"}`}>{describtion}</p>
 <span>{pic}</span>
 <h2 className={`flex flex-row rounded-b-3xl value rounded-t-[100%] justify-center text-2xl font-bold pb-1 pt-1 w-full text-white/90 ${theame===true? "bg-gradient-to-t from-violet-200 to-violet-600" : "bg-gradient-to-t from-zinc-600 to-zinc-700"}`}>{value}{math}</h2>
 </div>
         )  )}
       
    </div>
</div>
  )
}

export default DailyForecast