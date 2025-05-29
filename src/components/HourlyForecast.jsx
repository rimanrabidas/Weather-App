import { useState } from "react";
import { UseApi } from "../../BioContext";
import { GiNinjaStar } from "react-icons/gi";
import { FiNavigation2 } from "react-icons/fi";

const HourlyForecast = () => {
  //humidity//

  const [humidity, setHumidity] = useState(true);
  const [temperature, setTemperature] = useState(false);
  const [wind, setWind] = useState(false);

  const handleHumidity = () => {
    setHumidity(!humidity);
    setTemperature(false);
    setWind(false);
    setHumidity(true);
  };
  const handleTemperature = () => {
    setTemperature(!temperature);
    setHumidity(false);
    setWind(false);
    setTemperature(true);
  };
  const handleWind = () => {
    setWind(!wind);
    setTemperature(false);
    setHumidity(false);
    setWind(true);
  };

  const { forecastWeather, theme } = UseApi();

  return (
    <>
      <div className="flex flex-row justify-between items-center mt-16 ">
        <div className="size-8">
          <GiNinjaStar
            className={`Rotate size-8 ${
              theme === true ? "text-violet-600" : "text-zinc-400"
            }`}
          />
        </div>
        <h1
          className={`boxShadow2 flex relative z-1 flex-row justify-center items-center text-xl font-bold text-white/90 pl-5 pr-5 pb-2 pt-2 rounded-b-[50%] rounded-t-[50%] outline-none ${
            theme === true
              ? "bg-gradient-to-b from-violet-100 via-violet-600 to-violet-100"
              : "bg-zinc-700"
          }`}
        >
          Hourly details
        </h1>

        {/*UseLess hai bhai*/}
        <div
          className={`outline-1 ${
            theme === true ? "outline-violet-600" : "outline-zinc-400"
          } w-[50%] left-10 absolute `}
        ></div>
        <div
          className={`outline-1 ${
            theme === true ? "outline-violet-600" : "outline-zinc-400"
          } w-[50%] right-10 absolute `}
        ></div>

        <p className="flex flex-row justify-center items-center ">
          <GiNinjaStar
            className={`Rotate2 size-8 ${
              theme === true ? "text-violet-600" : "text-zinc-400"
            }`}
          />
        </p>
      </div>
      <div
        className={`mt-5 p-2 rounded-t-2xl flex w-full h-fit justify-around ${
          theme === true
            ? " bg-violet-500 "
            : " bg-gradient-to-bl from-zinc-500 to-zinc-700"
        }`}
      >
        <div
          onClick={handleHumidity}
          className={`${humidity === true ? " border-2 " : ""} ${
            theme === true ? " bg-violet-500 " : " bg-zinc-700"
          }  pl-2 pr-2 rounded-full flex justify-center items-center p-1`}
        >
          Humidity
        </div>
        <div
          onClick={handleWind}
          className={`${wind === true ? " border-2 " : ""} ${
            theme === true ? " bg-violet-500 " : " bg-zinc-700"
          }  pl-2 pr-2 rounded-full flex justify-center items-center p-1`}
        >
          Wind
        </div>
        <div
          onClick={handleTemperature}
          className={`${temperature === true ? " border-2 " : ""} ${
            theme === true ? " bg-violet-500 " : " bg-zinc-700"
          }  pl-2 pr-2 rounded-full flex justify-center items-center p-1`}
        >
          Temperature
        </div>
      </div>
      <div
        className={` flex flex-row w-[100%] h-[10rem] ${
          theme === true
            ? "bg-gradient-to-b from-violet-50 to-white boxShadow3"
            : "bg-gradient-to-b from-zinc-800 to-zinc-600 boxShadow3dark"
        } gap-5 pr-3 pl-3 pb-1 -mb-10 rounded-b-2xl overflow-scroll`}
      >
        {forecastWeather.timelines.hourly.map((hour, index) => (
          <div
            key={index}
            className={` h-full min-w-16 ${
              theme === true ? " text-violet-500 " : " text-zinc-200"
            }  flex flex-col justify-end items-center `}
          >
            {temperature ? (
              <div
                className={`${
                  temperature === false ? "hidden" : "block"
                } w-[60%] h-full flex flex-col justify-end items-center`}
              >
                <div className="text-sm ">
                  {hour.values.temperature.toFixed()}°C{" "}
                </div>
                <div
                  style={{
                    height: `${hour.values.temperature.toFixed() * 1.5}%`,
                    backgroundColor: `rgb(255,${
                      215 - hour.values.temperature.toFixed() * 3
                    },${130 - hour.values.temperature.toFixed() * 3})`,
                  }}
                  className={`w-full rounded-2xl`}
                >
                  {" "}
                </div>
              </div>
            ) : (
              ""
            )}

            {humidity ? (
              <div
                className={`${
                  humidity === true ? "block" : "hidden"
                } w-[60%] h-full flex flex-col justify-end items-center`}
              >
                <div className="text-sm ">
                  {hour.values.humidity.toFixed()}%{" "}
                </div>
                <div
                  style={{
                    height: `${hour.values.humidity.toFixed()}%`,
                    backgroundColor: `rgb(165,${
                      150 - hour.values.humidity.toFixed() * 3
                    },${255 - hour.values.humidity.toFixed()})`,
                  }}
                  className={` w-full rounded-2xl`}
                >
                  {" "}
                </div>
              </div>
            ) : (
              ""
            )}

            {wind ? (
              <div
                className={`${
                  wind === false ? "hidden" : "block"
                } w-[115%] h-full pt-1 flex flex-col justify-between items-center`}
              >
                <div className=" text-sm">{hour.values.windSpeed} kph</div>
                <FiNavigation2
                  style={{ rotate: `${hour.values.windDirection}deg` }}
                  className={`${
                    theme === true ? " text-black " : " text-white/70"
                  } size-11`}
                />
                <div className=""></div>
              </div>
            ) : (
              ""
            )}
            <div className=" text-sm ">
              {new Date(hour.time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: "true",
              })}
            </div>
            <div
              className={`text-xs ${
                theme === true ? " bg-violet-500 " : " bg-zinc-500"
              }  pr-[60%] p-0.5 pl-[60%] text-white font-light `}
            >
              {new Date(hour.time).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HourlyForecast;
