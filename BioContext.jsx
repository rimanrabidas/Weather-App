import { createContext, useContext, useEffect, useState } from "react";

export const BioContext = createContext();

export const  ApiProvider = ({children}) => {

const [weather, setWeather] = useState({});
const [error,setError]=useState();
const [forecastweather, setForecastweather] = useState();
  
const [loading,setLoading] = useState(true);
const [inputCity, setInputCity] = useState();

const [city, setCity] = useState("delhi");
const[time,setTime] = useState();

const [theame,setTheame]  = useState(true)

  // ctrl + shift + l = select all same word
  // ctrl + d = select next same word

useEffect(() => {
const fetchWeather = async () => {
  try {
    setLoading(true);
    const apiKey = import.meta.env.VITE_API_KEY;
    const weatherurl = `https:api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecasturl = `https:api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    const [weatherRes,forecastRes] = await Promise.all([fetch(weatherurl),fetch(forecasturl),]);  

    if(!weatherRes.ok || !forecastRes.ok) {
      throw new Error("Fatch Failed  :  ( This message for you : aap jis location dhund raha / rahe ho wo OpenWeatherMap API mai avilible nahi hai toh kripiya kisi achhe City ka name suerch kare. ) ('-')");
    }

    const weatheData = await weatherRes.json();
    const forecastData = await forecastRes.json();
    setWeather(weatheData);
    console.log(weatheData);
    setForecastweather(forecastData);
    console.log(forecastData);
  } catch(error) {
    setError(error.message);
    console.error(error.message);
  }finally{
    setLoading(false);
  }

  const timezone = weather?.timezone;
  const date = new Date();
  const fatchTime = new Date(date.getTime() + timezone * 1000 + 18.5 * 60 * 60 * 1000);
  
      const getTime = fatchTime.toLocaleTimeString("en-US",{
        hour:"2-digit",
        minute:"2-digit",
        hour12:true,
      });
      setTime(getTime);
      console.log(getTime);
  const interval = setInterval(1000);
  return() => clearInterval(interval);
  };

  fetchWeather();
}, [city]);
  
if (loading) return <p> Loading...</p>;
if (error) return <p> Error: {error}</p>;


const handleSearch = () => {
    setCity(inputCity)
    setInputCity("");
}

  console.log("rerendered................");



const timestamp = weather.dt;
const timezoneday = weather.timezone;

const localTime = new Date((timestamp)*1000);
const localTimeDate = localTime.getDate();
const localTimeMonth = localTime.toLocaleDateString("en-US", {month: "long"} );

const localDate = new Date((timezoneday)*1000);
  localDate.setDate(localDate.getDate());
  
const localWeekDay = localDate.toLocaleDateString("en-US", {weekday: "long"});



return(
    <BioContext.Provider value={{weather,setWeather,city,setCity,error,setError,forecastweather,setForecastweather,loading,setLoading,handleSearch,inputCity,setInputCity,time,localTimeDate,
    localTimeMonth,localWeekDay,setTheame,theame }}>
        {children}
    </BioContext.Provider>
)

};

export const UseApi = () =>  useContext(BioContext);
