import { GiNinjaStar } from 'react-icons/gi'
import { UseApi } from '../../BioContext'
import { FaAngleDoubleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import HourlyForecast from './HourlyForecast';

const TodayTwo = ({homeForecast}) => {
  const {theme,dailyForecastWeather} = UseApi();
  return (
    <div className="flex flex-col w-full h-fit ">

    <div className="flex flex-row justify-between items-center mt-5 lg:mt-10">
            <div className="size-8"><GiNinjaStar className={`Rotate size-8 ${theme===true? "text-violet-600":"text-zinc-400"}`}/> </div>
            <h1 className={`boxShadow2 flex relative z-1 flex-row justify-center items-center text-xl font-bold text-white/90 pl-5 pr-5 pb-2 pt-2 rounded-b-[50%] rounded-t-[50%] outline-none ${theme===true? "bg-gradient-to-b from-violet-100 via-violet-600 to-violet-100" : "bg-zinc-700"}`}> Sun Position</h1>


                                          {/*Useless hai bhai*/}
            <div className={`outline-1 ${theme===true? "outline-violet-600":"outline-zinc-400"} w-[50%] left-10 absolute `}></div>
            <div className={`outline-1 ${theme===true? "outline-violet-600":"outline-zinc-400"} w-[50%] right-10 absolute `}></div>
    

            <p className="flex flex-row justify-center items-center text-md  ">
            <GiNinjaStar className={`Rotate2 size-8 ${theme===true? "text-violet-600":"text-zinc-400"}`}/>
            </p>
        </div>

    <div className={`flex boxShadow mt-6 flex-col lg:w-[60%] lg:ml-[20%]  w-full justify-center items-center ${theme===true? "bg-white ":"bg-zinc-800 "} h-36 rounded-2xl mb-[-2rem]`}>
    <div className={` relative flex flex-col w-full text-sm  h-full rounded-2xl ${theme===true? " text-black/80 sunPosition":" text-white/80 sunPositionDark"} justify-center items-center`}>
       <div className={`flex absolute w-20 z-1 h-6 ${theme===true? " bg-black":" bg-white/80"} justify-center items-center rounded-full`}>
       <div className={`flex absolute w-20 h-5 ${theme===true? " bg-white":" bg-zinc-800"} justify-center items-center rounded-full text-[0.7rem]`}> Horizon </div>
       </div>
        <div className="flex justify-center items-center w-28 h-14 rounded-t-full border-2 border-b-0  border-yellow-400 ">Day</div>
        <div className={`flex justify-center items-center w-28 h-14 rounded-b-full border-2 border-t-0 ${theme===true? " border-black/90":" border-white/80"}`}> Night</div>
        <div className="absolute flex outline-1 w-[93%] "></div>
        <div className="absolute flex flex-col items-center  left-7">Sunrise
    <div className="">{new Date(dailyForecastWeather.data.timelines[0].intervals[0].values.sunriseTime).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit', hour12:"true"})}</div>
        </div>
    <div className="absolute flex flex-col items-center right-7">Sunset
       <div className=""></div>{new Date(dailyForecastWeather.data.timelines[0].intervals[0].values.sunsetTime).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit', hour12:"true"})}</div>
       <span className="w-28 h-28 absolute rounded-full">
       {/* <div className="w-3 h-3 bg-amber-500 rounded-full ml-[63%] "><div className=" w-3 h-3 bg-amber-600 rounded-full animate-ping "></div></div> */}
       </span>
    </div> 
    </div>

    {homeForecast && <HourlyForecast/>}
    
    <NavLink to={"/forecast"} className="flex justify-center items-center mt-20 w-full h-fit"><div className={`flex items-center justify-center flex-row lg:w-[50%] w-full h-12 rounded-2xl text-xl gap-1 ${theme===true? "bg-violet-500/50":"bg-zinc-600"} shadow-md shadow-black/60 `}><p>Forecast Data </p><FaAngleDoubleRight className='size-6 animate-pulse' /></div></NavLink>
    
    </div>
  )
}

export default TodayTwo