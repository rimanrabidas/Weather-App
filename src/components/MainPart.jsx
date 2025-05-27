import { FaTemperatureHalf } from "react-icons/fa6";
import { UseApi } from "../../BioContext";
import { IoIosEye } from "react-icons/io";

  const weatherCodeMap = {
   1000: "Clear",
   1001: "Cloudy",
   1100: "Mostly Clear",
   1101: "Partly Cloudy",
   1102: "Mostly Cloudy",
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

const MainPart = ({weekday,weatherType,localDate,localTime}) => {
    
    const {weather,theme} = UseApi();
  return (
    <div className={` mainPart relative flex flex-col w-full lg:w-110 min-h-50 max-h-62 lg:h-62 h-fit pb-4 mt-15 rounded-3xl ${theme===true? "bg-gradient-to-b  from-violet-400 to-violet-600": "bg-gradient-to-b  from-zinc-500 to-zinc-700"} hover:scale-101 cursor-pointer`}>
            <div className="flex flex-row justify-between text-white pt-4 pl-4 ">
                <h1 className='text-xl font-medium'>{localDate}<div className="text-sm mb-5">{weekday}</div></h1>
                <h1 className='flex flex-col items-center text-2xl font-medium pr-4'>Today<p className='text-sm'>{localTime}</p></h1>
            </div>

<div className="flex flex-col">
<h1 className={`temp flex text-7xl pl-3 font-bold ${theme===true? "bg-gradient-to-b  from-white/100 to-violet-400": "bg-gradient-to-b  from-zinc-50 to-zinc-200"} bg-clip-text text-transparent `}>{weather.data.values.temperature.toFixed()} <p className={`text-3xl font-bold ${theme===true? "bg-gradient-to-b  from-white/100 to-violet-500": "bg-gradient-to-b  from-zinc-50 to-zinc-200"} bg-clip-text text-transparent`}> °C</p></h1>
<h2 className='flex items-end gap-5 font-bold text-2xl pl-4 pt-1 text-white/80'>{getWeatherConditionName(weatherType)}
<div className={`${weatherType===1000? "" : "absolute top-10 left-30 font-light"} font-light`}>
<div className="text-sm flex items-center gap-1"><FaTemperatureHalf />Feels like : {weather.data.values.temperatureApparent.toFixed()}°C</div>
<div className="text-sm flex items-center gap-1"><IoIosEye />Visibility : {weather.data.values.visibility.toFixed()} km</div>
</div>
<div className={`${weatherType===1000? "absolute top-6 left-38" : ""} text-xs`}>{weather.data.values.temperature.toFixed()}°C / {(weather.data.values.temperature*9/5+32).toFixed()}°F </div>
</h2>

</div>
<div className="SunnyCloudy">
  <div className={`${weatherType===1000? "" : "hidden"} absolute right-7 bottom-7 rounded-full w-20 h-20 bg-yellow-200 animate-[ping_3s_infinite] `}></div>
  <img className='absolute right-0 bottom-0 size-35 ' src={`/${weatherType}.png`} alt="Weather Icon" />
</div>

        </div>
  )
}

export default MainPart