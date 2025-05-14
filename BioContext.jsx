import { createContext, useContext, useEffect, useState } from "react";
import Loading from "./src/components/Loading";

export const BioContext = createContext();

export const  ApiProvider = ({children}) => {

const [weather, setWeather] = useState({});
const [error,setError]=useState();
const [forecastweather, setForecastweather] = useState();
  
const [loading,setLoading] = useState(true);
const [inputCity, setInputCity] = useState();

const [city, setCity] = useState("delhi");

const [theame,setTheame]  = useState(true)
const [History,setHistory] =  useState([]);

  // ctrl + shift + l = select all same word
  // ctrl + d = select next same word

useEffect(() => {
const fetchWeather = async () => {
  try {
    setLoading(true);
    const apiKey = import.meta.env.VITE_API_KEY;
    // const weatherurl = `https:api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const weatherurl = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${apiKey}`;
    // const forecasturl = `https:api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    const forecasturl = `https://api.tomorrow.io/v4/weather/forecast?location=${city}&timesteps=1h&apikey=${apiKey}`;

    const [weatherRes,forecastRes] = await Promise.all([fetch(weatherurl),fetch(forecasturl),]);  

    if(!weatherRes.ok || !forecastRes.ok) {
      throw new Error("Fatch Failed  :  ( This message for you : aap jis location dhund raha / rahi ho wo OpenWeatherMap API mai avilible nahi hai toh kripiya kisi achhe City ka name suerch kare. ) ('-')");
    }

    const weatheData = await weatherRes.json();
    const forecastData = await forecastRes.json();
    setWeather(weatheData)
    console.log(weatheData);
    setForecastweather(forecastData);
    console.log(forecastData);
  } catch(error) {
    setError(error.message);
    console.error(error.message);
  }finally{
    setLoading(false);
  }

  };

  fetchWeather();
}, [city]);
  


if (loading) return <Loading/> 
if (error) return <p> Error: {error}</p>;


const handleSearch = () => {
  if (!inputCity)return;
    setCity(inputCity)
    if(History.includes(inputCity)){
      setInputCity("");
      return;
    }
    setHistory((prev) => [...prev,inputCity])
    setInputCity("");
    console.log(inputCity)
}
console.log(History);

  console.log("rerendered................");

return(
    <BioContext.Provider value={{weather,setWeather,city,setCity,error,setError,forecastweather,setForecastweather,loading,setLoading,handleSearch,inputCity,setInputCity,setTheame,theame,History,setHistory}}>
        {children}
    </BioContext.Provider>
)

};

export const UseApi = () =>  useContext(BioContext);
