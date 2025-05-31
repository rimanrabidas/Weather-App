import { createContext, useContext, useEffect, useRef, useState } from "react";
import Loading from "./src/components/Loading";
import FetchError from "./src/components/FetchError";
import BadRequest from "./src/components/BadRequest";

export const BioContext = createContext();

export const ApiProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState();
  const [dailyForecastWeather, setDailyForecastWeather] = useState();
  const [error, setError] = useState();
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inputCity, setInputCity] = useState("");
  const [city, setCity] = useState(() => {
    const savedCity = localStorage.getItem("lastCity");
    return savedCity || "delhi";
  });
  const [theme, setTheme] = useState(true);
  const [history, setHistory] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchError, setSearchError] = useState();

  useEffect(() => {
    localStorage.setItem("lastCity", city);
  }, [city]);
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("search-history") || "[]");
      setHistory(saved);
    } catch (error) {
      console.error("Error Loading History", error);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("search-history", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const apiKey = import.meta.env.VITE_API_KEY;
        const weatherUrl = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${apiKey}`;
        const forecastUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${city}&timesteps=1h&apikey=${apiKey}`;
        const dailyForecastUrl = `https://api.tomorrow.io/v4/timelines?location=${city}&fields=temperature,temperatureApparent,humidity,windSpeed,windDirection,precipitationIntensity,precipitationType,pressureSeaLevel,cloudCover,visibility,uvIndex,weatherCode,sunriseTime,sunsetTime&timesteps=1d&units=metric&apikey=${apiKey}`;
        const [weatherRes, forecastRes, dailyForecastRes] = await Promise.all([
          fetch(weatherUrl),
          fetch(forecastUrl),
          fetch(dailyForecastUrl),
        ]);

        if (!weatherRes.ok || !forecastRes.ok || !dailyForecastRes.ok) {
          setFetchError(weatherRes.status);
          return;
        }
        const weatherData = await weatherRes.json();
        const forecastData = await forecastRes.json();
        const dailyForecastData = await dailyForecastRes.json();
        setWeather(weatherData);
        console.log(weatherData);
        setForecastWeather(forecastData);
        console.log(forecastData);
        setDailyForecastWeather(dailyForecastData);
        console.log(dailyForecastData);
      } catch (error) {
        setError(error.message);
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const geoApiFyKey = import.meta.env.VITE_GEOAPIFY_KEY;
        const res = await fetch(
          ` https://api.geoapify.com/v1/geocode/autocomplete?text=${inputCity}&limit=100&type=city&format=json&apiKey=${geoApiFyKey}`
        );
        const data = await res.json();
        console.log(data);

        setSuggestions(data.results);
      } catch (error) {
        console.error("Error fetching suggestions", error);
        setSuggestions([]);
      }
    };
    const delayDebounce = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [inputCity]);

  if (error) return <p> Error: {error}</p>;
  if (loading) return <Loading />;
  if (fetchError===429) return <FetchError />;
  if (fetchError===404) return <BadRequest />;


  const handleSearch = () => {
    if (!inputCity) return;
    if (inputCity.length <= 2) {
      setSearchError("Please enter at least 3 characters");
      setInputCity("");
      console.log(`input length error`);
      return;
    }
      if (!suggestions || suggestions.length === 0) {
      setSearchError("Invalid city name. Please try again");
      setInputCity("");
      console.log(`suggestions length error`);
      return;
    }
       if (fetchError === 400) {
      setSearchError("Invalid city name. Please try again");
      setInputCity("");
      return;
    }
    if (suggestions || suggestions.length >= 1) {
      setCity(inputCity);
      setSearchError("");
      setInputCity("");
    }
    if (history.includes(inputCity)) {
      setInputCity("");
      return;
    }
    setHistory((prev) => [...prev, inputCity]);
    setInputCity("");

    console.log(inputCity);
  };
  console.log(history);

  console.log("rerendered................");

  return (
    <BioContext.Provider
      value={{
        weather,
        setWeather,
        city,
        setCity,
        error,
        setError,
        forecastWeather,
        setForecastWeather,
        dailyForecastWeather,
        setDailyForecastWeather,
        loading,
        setLoading,
        handleSearch,
        inputCity,
        setInputCity,
        setTheme,
        theme,
        history,
        setHistory,
        suggestions,
        setSuggestions,
        searchError,
        setSearchError,
        fetchError,
      }}
    >
      {children}
    </BioContext.Provider>
  );
};

export const UseApi = () => useContext(BioContext);
