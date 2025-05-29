import { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import ForecastMain from "../components/ForecastMain";
import DailyForecast from "../components/DailyForecast";
import { UseApi } from "../../BioContext";
import { FaHeart } from "react-icons/fa6";
// import SunriseSunset from "../components/SunriseSunset";
import SunriseSunset from "../components/SunriseSunset";

const Forecast = () => {
  const { theme, dailyForecastWeather } = UseApi();
  const intervals = dailyForecastWeather.data.timelines[0].intervals;
  const fitDFW = intervals[intervals.length - 5];
  const [selectDay, setSelectDay] = useState(fitDFW);
  const [searchPage, setSearchPage] = useState(false);
  return (
    <div
      className={`w-full h-full ${
        theme === true ? "bg-violet-100" : "bg-zinc-800"
      } overflow-hidden pb-20`}
    >
      <div className="flex relative flex-col w-full h-full overflow-x-scroll p-5  text-white">
        <div
          className={`flex w-full header fixed top-0 pt-3 pb-1 flex-row z-2 ${
            theme === true
              ? "bg-violet-100 headerLight"
              : "bg-zinc-800 headerDark"
          } pl-5 pr-5 justify-between  items-center`}
        >
          <NavLink to={"/"}>
            <IoChevronBack
              className={`sideBerAndLocationTrack size-11 border-1 border-black/20 p-2 rounded-md ${
                theme === true ? "text-violet-700" : "text-zinc-100"
              } hover:scale-105 cursor-pointer`}
            />
          </NavLink>
          <span
            onClick={() => setSearchPage(!searchPage)}
            className={`boxShadow2 flex flex-row gap-1 justify-start items-center  ${
              theme === true
                ? "bg-gradient-to-b  from-violet-300 to-violet-600"
                : "bg-gradient-to-b  from-zinc-500 to-zinc-700"
            }  rounded-b-full pl-5 pr-5 pt-1`}
          >
            <h1 className="font-bold text-white/90 text-md">Forecast</h1>
          </span>
          <div className=" size-11  p-2 "></div>
        </div>

        {/*repeat*/}

        <ForecastMain selectDay={selectDay} setSelectDay={setSelectDay} />
        <div
          className={`flex flex-row w-fit h-7 ${
            theme === true ? "bg-violet-500" : "bg-zinc-600"
          } rounded-tr-[2rem] pl-8 pr-8 rounded-tl-2xl ml-0.5 mt-6 text-xl lg:absolute lg:right-[51.3%] lg:top-[20%]`}
        >
          Highlights
        </div>
        <DailyForecast selectDay={selectDay} />

        <SunriseSunset selectDay={selectDay} />

        <div className="flex flex-col items-center justify-center w-full h-fit text-2xl text-zinc-400 font-bold mt-16 fontstyle">
          <p className="flex">
            Made With <FaHeart className="size-8 ml-2 text-violet-500" />
          </p>
          <p className="rimanBabu">by Riman Rabidas</p>
        </div>

        {/*repeat*/}

        <Navbar />
      </div>
    </div>
  );
};

export default Forecast;
