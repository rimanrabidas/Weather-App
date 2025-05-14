import { useState } from 'react'
import { RiMenuUnfoldFill } from 'react-icons/ri';
import Today from '../components/Today';
import Navber from '../components/Navber';
import { BiCurrentLocation } from 'react-icons/bi';
import Search from '../components/Search';
import TodeyTwo from '../components/TodeyTwo';
import { UseApi } from '../../BioContext';
import Manuber from '../components/Manuber';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaTemperatureHalf } from 'react-icons/fa6';
import { IoIosEye } from 'react-icons/io';

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

const Home = () => {


const {weather,theame} = UseApi();


  const [manuber,setManuber] = useState(false);
  const [searchpage,setsearchpage] = useState(false);
  const [homepageForecast,setHomepageForecast] = useState(true);

  const weatherType = weather.data.values.weatherCode;
  const timezone = weather.data.time;
  const dateObj = new Date(timezone);
  const localDate = dateObj.toLocaleDateString();
  const localTime = dateObj.toLocaleTimeString([],{hour: '2-digit', minute:'2-digit', hour12:"true"});
  const options = {weekday:'long'};
  const weekday = dateObj.toLocaleDateString('en-US',options);


  const fullname= weather.location.name;
  const parts =fullname.split(",").map(part => part.trim());
  const city = parts[0];
  const country = parts[parts.length-1];
  return (

      <div className={`w-full relative h-full ${theame===true? "bg-violet-100" : "bg-zinc-800"} overflow-hidden`}>
        { weather ? (
    <div className=' flex  flex-col w-full h-full overflow-x-scroll p-5 pb-28 text-white'>

        <div className={`flex w-full header fixed top-0 pt-3 pb-1 flex-row z-2 ${theame===true? "bg-violet-100 headerlight" : "bg-zinc-800 headerdark"} pl-5 pr-5 justify-between  items-center `}>
        <RiMenuUnfoldFill onClick={() => setManuber(!manuber)} className={` sideberandlocationtrack size-11 border-1 border-black/20 p-2 rounded-md ${theame===true? "text-violet-700" : "text-zinc-300"} hover:scale-105 cursor-pointer`}/>
        <span onClick={() => setsearchpage(!searchpage)} className={`boxshadow2 flex flex-row gap-1 justify-start items-center ${theame===true? "bg-gradient-to-b  from-violet-300 to-violet-600": "bg-gradient-to-b  from-zinc-500 to-zinc-700"} rounded-b-full pl-5 pr-5 pt-1`}>
          <h1 className='font-bold text-white/90 text-md'>{city}, {country}</h1> 
        </span>
        <BiCurrentLocation className={`sideberandlocationtrack size-11 border-1  border-black/20 p-2 rounded-md ${theame===true? "text-violet-700" : "text-zinc-300"} hover:scale-105 cursor-pointer`}/>
        </div>

        <div className={` mainpart relative flex flex-col w-full lg:w-110 min-h-50 max-h-62 lg:h-62 h-fit pb-4 mt-15 rounded-3xl ${theame===true? "bg-gradient-to-b  from-violet-400 to-violet-600": "bg-gradient-to-b  from-zinc-500 to-zinc-700"} hover:scale-101 cursor-pointer`}>
            <div className="flex flex-row justify-between text-white pt-2 pl-4 ">
                <h1 className='text-xl font-medium'>{localDate}<div className="text-sm mb-2">{weekday}</div></h1>
                <h1 className='flex flex-col justify-center items-center text-2xl font-medium pr-4'>Today<p className='text-sm'>{localTime}</p></h1>
            </div>

<div className="flex flex-col">
<h1 className={`temp flex text-7xl pl-3 font-bold ${theame===true? "bg-gradient-to-b  from-white/100 to-violet-400": "bg-gradient-to-b  from-zinc-50 to-zinc-200"} bg-clip-text text-transparent `}>{weather.data.values.temperature.toFixed()} <p className={`text-3xl font-bold ${theame===true? "bg-gradient-to-b  from-white/100 to-violet-500": "bg-gradient-to-b  from-zinc-50 to-zinc-200"} bg-clip-text text-transparent`}> °C</p></h1>
<h2 className='flex items-end gap-6 font-bold text-2xl pl-4 pt-1 text-white/80'>{getWeatherConditionName(weatherType)}
<div className="font-light">
<div className="text-sm flex items-center gap-1"><FaTemperatureHalf />Feels like : {weather.data.values.temperatureApparent.toFixed()}°C</div>
<div className="text-sm flex items-center gap-1"><IoIosEye />Visibility : {weather.data.values.visibility.toFixed()} km</div>
</div>
</h2>

</div>
<div className="SunnyCloudy">
  <img className='absolute right-5 bottom-0 size-35' src={`public/${weatherType}.png`} alt="Weather Icon" />
{/* <IoIosSunny  className='flex absolute size-25 top-23 text-yellow-400  right-17' />
<IoIosCloud className='flex absolute size-30 top-26.5 text-zinc-200 right-5' /> */}
</div>

        </div>
        <Today />
        <TodeyTwo homepageForecast={homepageForecast} setHomepageForecast = {setHomepageForecast}/>
        <Navber setsearchpage={setsearchpage}
        searchpage={searchpage}/>
        <Search 
        setsearchpage={setsearchpage}
        searchpage={searchpage}
      />
      <Manuber manuber = {manuber} setManuber = {setManuber}  setsearchpage={setsearchpage}
        searchpage={searchpage} homepageForecast={homepageForecast} setHomepageForecast = {setHomepageForecast}/>


    </div>
        ):(<p className='flex w-full h-screen justify-center items-center text-5xl text-zinc-950'><p className='animate-pulse flex'>Loading...<AiOutlineLoading3Quarters className='animate-spin' /></p></p>)}
    </div>
  

  )
}

export default Home;