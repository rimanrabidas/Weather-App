import { UseApi } from '../../BioContext';
import { WiRainMix } from 'react-icons/wi';
import { LiaTemperatureHighSolid } from 'react-icons/lia';
import {  FaCloud } from 'react-icons/fa6';
import { BsDropletFill } from 'react-icons/bs';
import { IoTimer } from 'react-icons/io5';
import { FiNavigation2 } from 'react-icons/fi';

const DailyForecast = ({selectDay}) => {
      const {weather,theme} = UseApi();
          
   const uvIndex = selectDay.values.uvIndex;
   const pressureSeaLevel = selectDay.values.pressureSeaLevel.toFixed();
       const todayLine = [
           {
               id: 1,
               pic: <p><BsDropletFill  className={`size-16 ${theme===true? "text-zinc-500" : "text-zinc-100"}`}/></p>,
               value: selectDay.values.humidity,
               math:" %",
               description: "Humidity",
           },
           {
               id: 2,
               pic: <p><LiaTemperatureHighSolid  className={`size-18 ${theme===true? "text-zinc-500" : "text-zinc-100"}`}/></p>,
               value: uvIndex ,
               math:uvIndex<=2? " Low":"" || uvIndex<=5? " Moderate":"" || uvIndex<=7? " High":"" || uvIndex<=10? " Very High":""  || uvIndex>=11? " Extreme":"" ,
               description: "Uv Index",
           },
           {
               id: 3,
               pic: <p><FaCloud  className={`size-16 ${theme===true? "text-blue-300" : "text-zinc-100"}`}/></p>,
               value: selectDay.values.cloudCover,
               math: " %",
               description: "Clouds",
           },
           {
               id: 4,
               pic: <p><IoTimer  className={`size-16 ${theme===true? "text-zinc-500" : "text-zinc-100"}`}/></p>,
               value: pressureSeaLevel,
               math:" hpa",
               description: "pressure",
           },

           {
               id: 5,
               pic: <p><FiNavigation2 className={`size-14 ${theme===true? "text-zinc-500" : "text-zinc-100"}`}  style={{transform:`rotate(${weather.data.values.windDirection}deg)`}}/></p>,
               value: selectDay.values.windSpeed.toFixed(),
               math:" kph",
               description: "Wind & Direction",
           },
             {
               id: 6,
               pic: <p><WiRainMix className={`size-18 ${theme===true? "text-zinc-500" : "text-zinc-100"}`}  style={{transform:`rotate(${weather.location.name}deg)`}}/></p>,
               value: weather.data.values.precipitationProbability,
               math:" mm",
               description: "Precipitation",
           },
       ];
   
  return ( <>
   {selectDay && (<div className='flex flex-col w-full h-fit lg:absolute lg:right-5 lg:top-[28%]  lg:w-[60%] '>

    <div className={`overflow-x-scroll grid grid-cols-2 lg:grid-cols-6 w-[99%] ml-0.5 h-fit justify-around ${theme===true? "bg-gradient-to-b from-violet-50 to-white boxShadow3 " : "bg-gradient-to-b from-zinc-800 to-white/10 boxShadow3dark"}  gap-5 p-3 mt-1 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl`}>
       
    {   todayLine.map(({id,pic,value,description,math})=>(
 <div key={id} className={`flex flex-col boxShadow text-white/90 justify-between items-center ${theme===true? "bg-violet-100 " : "bg-gradient-to-b from-zinc-400 to-zinc-700 "}min-w-23 min-h-40 rounded-3xl hover:scale-105 cursor-pointer`} >
    <p className={`flex shadow-xl rounded-t-2xl rounded-b-[100%] justify-center text-sm font-bold w-full  pb-1 pt-1 ${theme===true? "bg-gradient-to-t from-violet-200 to-violet-600" : "bg-gradient-to-t from-zinc-700 to-zinc-600"}`}>{description}</p>
 <span>{pic}</span>
 <h2 className={`flex flex-row rounded-b-3xl value rounded-t-[100%] justify-center text-2xl font-bold pb-1 pt-1 w-full text-white/90 ${theme===true? "bg-gradient-to-t from-violet-200 to-violet-600" : "bg-gradient-to-t from-zinc-600 to-zinc-700"}`}>{value}{math}</h2>
 </div>
         )  )}
       
    </div>
</div>)}
</>  )
}

export default DailyForecast;