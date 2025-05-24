import { UseApi } from '../../BioContext';
import { IoIosEye } from 'react-icons/io';
import { GiNinjaStar } from 'react-icons/gi';
import { FaTemperatureHalf } from 'react-icons/fa6';
import { RiArrowDownSFill } from 'react-icons/ri';

const ForecastMain = ({selectDay,setSelectDay}) => {

   const weatherCodeMap = {
  1000: "Clear",
  1100: "Mostly Clear",
  1101: "Partly Cloudy",
  1102: "Mostly Cloudy",
  1001: "Cloudy",
  2000: "Fog",
  2100: "Light Fog",
  4000: "Drizzle",
  4001: "Rain",
  4200: "Light Rain",
  4201: "Heavy Rain",
  5000: "Snow",
  5001: "Flurries",
  5100: "Light Snow",
  5101: "Heavy Snow",
  6000: "Freezing Drizzle",
  6001: "Freezing Rain",
  6200: "Light Freezing Rain",
  6201: "Heavy Freezing Rain",
  7000: "Ice Pellets",
  7101: "Heavy Ice Pellets",
  7102: "Light Ice Pellets",
  8000: "Thunderstorm"
};
 function getWeatherConditionName(code) {
  return weatherCodeMap[code] || "Unknown Condition";
}
console.log(selectDay)

 const {theme,dailyForecastWeather} = UseApi();

  return (
    <div className=""> 
      <div className="flex flex-row justify-between items-center mt-15 ">
    <div className="size-8"><GiNinjaStar className={`Rotate size-8 ${theme===true? "text-violet-600":"text-zinc-400"}`}/></div>
    <h1 className={`boxShadow2 flex relative z-1 flex-row justify-center items-center text-xl font-bold text-white/90 pl-5 pr-5 pb-2 pt-2 rounded-b-[50%] rounded-t-[50%] outline-none ${theme===true? "bg-gradient-to-b from-violet-100 via-violet-600 to-violet-100" : "bg-zinc-700"}`}>Next 5 Days Forecast</h1>


                                  {/*useLess hai bhai*/}
    <div className={`outline-1 ${theme===true? "outline-violet-600":"outline-zinc-400"} w-[50%] left-10 absolute `}></div>
    <div className={`outline-1 ${theme===true? "outline-violet-600":"outline-zinc-400"} w-[50%] right-10 absolute `}></div>


    <p className="flex flex-row justify-center items-center ">
    <GiNinjaStar className={`Rotate2 size-8 ${theme===true? "text-violet-600":"text-zinc-400"}`}/>
    </p>
</div>
<div className=" w-full relative text-violet-500 h-34 mt-5 flex gap-5 overflow-y-scroll pl-1 lg:w-fit">
  {dailyForecastWeather.data.timelines[0].intervals.slice(-5).map((id,index) => (
  <div onClick={() => setSelectDay(id)} key={index} className={`flex flex-col justify-between items-center p-2 border  min-w-18 h-[90%] rounded-2xl ${theme===true? "text-violet-600":"text-zinc-100"} ${selectDay?.startTime === id.startTime? `${theme===true? "bg-gradient-to-t from-violet-500 via-orange-50/5 to-violet-600  text-white " : "bg-gradient-to-t from-zinc-500 via-orange-50/5 to-zinc-600  text-white "}` :'text-violet-500'} `}>
  <div className="">{index  === 0? "Tomorrow" : new Date(id.startTime).toLocaleDateString('en-US',{weekday: 'long'})}</div>
  <img className='size-10' src={`public/${id.values.weatherCode}.png`} alt="Weather Icon" />
  <div className="">{id.values.temperature.toFixed()}°C</div>
  <div className={`${selectDay?.startTime === id.startTime? `text-violet-500 block ` :'hidden'} absolute -bottom-2`}><RiArrowDownSFill className={`${theme===true? "text-violet-500" : "text-zinc-200"} size-10`}/></div>
    </div>
))}
</div>
   {selectDay && (<div className={` mainPart relative flex flex-col w-full lg:w-110 min-h-50 max-h-62 lg:h-62 h-fit pb-4 mt-2 rounded-3xl ${theme===true? "bg-gradient-to-b  from-violet-400 to-violet-600": "bg-gradient-to-b  from-zinc-500 to-zinc-700"} hover:scale-101 cursor-pointer `}>
            <div className="flex flex-row justify-between text-white pt-4 pl-4 ">
                <h1 className='text-xl font-medium'>{new Date(selectDay.startTime).toLocaleDateString()}<div className="text-sm mb-5">{new Date(selectDay.startTime).toLocaleDateString('en-US',{weekday: 'long'})}</div></h1>
                <h1 className='flex flex-col items-center text-2xl font-medium pr-4'>{selectDay.startTime===dailyForecastWeather.data.timelines[0].intervals[dailyForecastWeather.data.timelines[0].intervals.length-5].startTime? "Tomorrow" : new Date(selectDay.startTime).toLocaleDateString('en-US',{weekday: 'long'})}<p className='text-sm'>{new Date(selectDay.startTime).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit', hour12:"true"})}</p></h1>
            </div>
<div className="flex flex-col">
<h1 className={`temp flex text-7xl pl-3 font-bold ${theme===true? "bg-gradient-to-b  from-white/100 to-violet-400": "bg-gradient-to-b  from-zinc-50 to-zinc-200"} bg-clip-text text-transparent `}>{selectDay.values.temperature.toFixed()} <p className={`text-3xl font-bold ${theme===true? "bg-gradient-to-b  from-white/100 to-violet-500": "bg-gradient-to-b  from-zinc-50 to-zinc-200"} bg-clip-text text-transparent`}> °C</p></h1>
<div className='flex items-end gap-5 font-bold text-2xl pl-4 pt-1 text-white/80'>

{getWeatherConditionName(selectDay.values.weatherCode)}
<div className="font-light">
<div className="text-sm flex items-center gap-1"><FaTemperatureHalf />Feels like : {selectDay.values.temperatureApparent.toFixed()}°C</div>
<div className="text-sm flex items-center gap-1"><IoIosEye />Visibility : {selectDay.values.visibility.toFixed()} km</div>
</div>
</div>

</div>
<div className="SunnyCloudy">
<img className='absolute right-4 bottom-0 size-35' src={`public/${selectDay.values.weatherCode}.png`} alt="Weather Icon" />
</div>

        </div>)
}
            </div>
  )
}

export default ForecastMain