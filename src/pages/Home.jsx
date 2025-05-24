import { useState } from 'react'
import { RiMenuUnfoldFill } from 'react-icons/ri';
import Today from '../components/Today';
import Navbar from '../components/Navbar';
import { BiCurrentLocation } from 'react-icons/bi';
import Search from '../components/Search';
import TodayTwo from '../components/TodayTwo';
import { UseApi } from '../../BioContext';
import Menubar from '../components/Menubar';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaCloud, FaHeart } from 'react-icons/fa6';
import { MdOutlineLocationOn } from 'react-icons/md';
import MainPart from '../components/MainPart';
import { IoTimer } from 'react-icons/io5';
import { FiNavigation2 } from 'react-icons/fi';
import { WiRainMix } from 'react-icons/wi';

const Home = () => {

const {weather,theme,forecastWeather,setCity} = UseApi();
  const [menubar,setMenubar] = useState(false);
  const [searchPage,setSearchPage] = useState(false);
  const [homepageForecast,setHomepageForecast] = useState(true);
const [hideWeight,setHideWeight] = useState({1:true, 2:true, 3:true, 4:true, 5:true, 6:true});

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

 const handleGeolocation = () => { if (!navigator.geolocation) {alert("Geolocation is not supported by your browser");
    return;}
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      const geoApiFyKey = import.meta.env.VITE_GEOAPIFY_KEY;
      try { const res = await fetch(  `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${geoApiFyKey}` );
        const data = await res.json();
        const location = data.features[0]?.properties;
        const cityName = location.city || location.county || location.state;
        if (cityName) { setCity(cityName); 
          console.log("Detected City:", cityName);
        } else { alert("City name not found!");}
      } catch (err) { console.error("GeoApiFy error:", err);
       alert("Failed to fetch location info.");}
    },
    (error) => {console.error("Geolocation error:", error);
      alert("Unable to retrieve your location");
    } );};

    const uvIndex=weather.data.values.uvIndex;
    const clamped = Math.min(100,Math.max(0,weather.data.values.humidity));
    const fillHeight = 100 - clamped;
        const todayLine = [
            {
                id: 1,
                pic: <p><svg viewBox="0 0 100 100" width="96" height="96">
          {/* Drop outline */}
          <path
            d="M50,10 C20,60 20,40 30,70 C90,80 80,50 50,10 Z"
            fill="#e0f2fe"
            stroke="#0284c7"
            strokeWidth="1"
          />
    
          {/* Dynamic water fill M50,10 C20,50 10,80 50,130 C90,80 80,50 50,10 Z */}
          <clipPath id="dropClip">
            <path d="M50,10 C20,60 20,40 30,70 C90,80 80,50 50,10 Z" />
          </clipPath>
          <rect
            x="0"
            y={fillHeight}
            width="96"
            height="96"
            fill="#38bdf8"
            clipPath="url(#dropClip)"
          />
    
          {/* Percentage text */}
          <text
            x="50"
            y="50"
            textAnchor="middle"
            fontSize="10"
            fill="#0c4a6e"
            fontWeight="light"
          >
            {clamped}%
          </text>
        </svg></p>,
                value: weather.data.values.humidity,
                math:" %",
                description: "Humidity",
            },
            {
                id: 2,
                pic: <p><meter className={`${uvIndex<=2? " bg-red-600/70":"" || uvIndex<=5? " bg-yellow-500/80":"" || uvIndex<=11? " bg-green-600/90":""} -rotate-90 w-18  h-7 uvIndex overflow-hidden`} min="0" max="11" low="3" high='6' optimum="10" value={uvIndex}></meter></p>,
                value: uvIndex ,
                math:uvIndex<=2? " Low":"" || uvIndex<=5? " Moderate":"" || uvIndex<=7? " High":"" || uvIndex<=10? " Very High":""  || uvIndex>=11? " Extreme":"" ,
                description: "Uv Index",
            },
            {
                id: 3,
                pic: <p><FaCloud  className={`size-16 ${theme===true? "text-blue-300" : "text-zinc-100"}`}/></p>,
                value: weather.data.values.cloudCover,
                math: " %",
                description: "Clouds",
            },
            {
                id: 4,
                pic: <p><IoTimer  className={`size-16 ${theme===true? "text-zinc-500" : "text-zinc-100"}`}/></p>,
                value: weather.data.values.pressureSeaLevel.toFixed(),
                math:" hpa",
                description: "pressure",
            },
          
            {
                id: 5,
                pic: <p><FiNavigation2 className={`size-14 ${theme===true? "text-zinc-500" : "text-zinc-100"}`}  style={{transform:`rotate(${weather.data.values.windDirection}deg)`}}/></p>,
                value: weather.data.values.windSpeed,
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
    const hideToggle = (id) =>{ setHideWeight((prev) => ({...prev,[id] : !prev[id],}))}

  return (
      <div className={`w-full relative h-full ${theme===true? "bg-violet-100" : "bg-zinc-800"} overflow-hidden`}>
        { weather ? ( <div className=' flex  flex-col w-full h-full overflow-x-scroll p-5 pb-28 text-white'>
        <div className={`flex w-full header fixed top-0 pt-3 pb-1 flex-row z-2 ${theme===true? "bg-violet-100 headerLight" : "bg-zinc-800 headerDark"} pl-5 pr-5 justify-between  items-center `}>
        <RiMenuUnfoldFill onClick={() => setMenubar(!menubar)} className={` sideBerAndLocationTrack size-11 border-1 border-black/20 p-2 rounded-md ${theme===true? "text-violet-700" : "text-zinc-300"} hover:scale-105 cursor-pointer`}/>
        <span onClick={() => setSearchPage(!searchPage)} className={`boxShadow2 flex flex-row gap-1 justify-start items-center ${theme===true? "bg-gradient-to-b  from-violet-300 to-violet-600": "bg-gradient-to-b  from-zinc-500 to-zinc-700"} rounded-b-full pl-5 pr-5 pt-1`}>
          <h1 className='flex gap-0.5 font-bold text-white/90 text-md'><MdOutlineLocationOn className='size-5'/>{city}, {country}</h1> 
        </span>
        <BiCurrentLocation onClick={handleGeolocation} className={`sideBerAndLocationTrack size-11 border-1  border-black/20 p-2 rounded-md ${theme===true? "text-violet-700" : "text-zinc-300"} hover:scale-105 cursor-pointer`}/> </div>
<MainPart weatherType={weatherType} localDate={localDate} localTime={localTime} weekday={weekday} />
  <h2 className={`mt-7 pl-1 pt-1 rounded-t-sm rounded-tr-full w-[40%]  ${theme===true? "bg-violet-500" : "bg-zinc-700"} font-bold`}>Hourly Forecast</h2>
<div  className={`flex w-full gap-6 overflow-scroll h-34 pt-2 pb-2 pl-1 border-t ${theme===true? "border-violet-500" : "border-zinc-300"}  lg:h-40`}>
{forecastWeather.timelines.hourly.map((id) =>(
  <div key={id} className={`flex flex-col justify-between items-center 
   border min-w-18 h-full rounded-2xl ${theme===true? "text-violet-500" : "text-zinc-300"} p-1 shadow shadow-black/40 lg:min-w-20 `}>
    <div className="text-sm flex flex-col items-center">{weekday===new Date(id.time).toLocaleDateString('en-US',{weekday: 'long'})? "Today": new Date(id.time).toLocaleDateString('en-US',{weekday: 'short'})}
      <div className="">{new Date(id.time).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit', hour12:"true"})}</div>
    </div>
   <img className='size-10' src={`public/${id.values.weatherCode}.png`} alt="Weather Icon" />
    <div className="">{id.values.temperatureApparent.toFixed()}°C</div>
  </div>
))}
</div>
        <Today todayLine={todayLine} hideToggle={hideToggle} hideWeight={hideWeight}/>
        <TodayTwo homepageForecast={homepageForecast} setHomepageForecast = {setHomepageForecast}/>
        <Navbar setSearchPage={setSearchPage} searchPage={searchPage}/>
        <Search  setSearchPage={setSearchPage} searchPage={searchPage} handleGeolocation={handleGeolocation}/>
 <div className="flex flex-col items-center justify-center w-full h-fit text-3xl text-zinc-400 font-bold mt-16 fontstyle"> <p className='flex'>Made With <FaHeart className='size-8 ml-2 text-violet-600' /></p><p className='text-[1.2rem] font-light '>by Riman</p></div>
      <Menubar menubar = {menubar} setMenubar = {setMenubar}  setSearchPage={setSearchPage}
        searchPage={searchPage} homepageForecast={homepageForecast} setHomepageForecast = {setHomepageForecast} todayLine={todayLine} hideToggle={hideToggle} hideWeight={hideWeight}/>
    </div>
        ):(<p className='flex w-full h-screen justify-center items-center text-5xl text-zinc-950'><p className='animate-pulse flex'>Loading...<AiOutlineLoading3Quarters className='animate-spin' /></p></p>)}
    </div>
  )
}

export default Home;