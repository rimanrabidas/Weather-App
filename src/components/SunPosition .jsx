import React from "react";
import { UseApi } from "../../BioContext";

 const SunPosition = () => 
  {
      const { dailyForecastWeather,weather } = UseApi();
      const getSunrise = new Date(
                dailyForecastWeather.data.timelines[0].intervals[0].values.sunriseTime
              ).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })
                  const getSunset = new Date(
                dailyForecastWeather.data.timelines[0].intervals[0].values.sunsetTime
              ).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })
              
              const getCurrentTime = new Date( weather.data.time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12:false,
              })
             
    const sunrise = getSunrise.replace(/am| pm/, '');
    const sunset = getSunset.replace(/am| pm/, '');
    const currentTime = getCurrentTime.replace(/am| pm/, '');
    const radius = 100; 


    const timeToMinutes = (timeStr) => {
        const [hours, minutes] = timeStr.split(":").map(Number);
        return hours * 60 + minutes;
    };

    const sunriseMinutes = timeToMinutes(sunrise);
    const sunsetMinutes = timeToMinutes(sunset);
    const currentMinutes = timeToMinutes(currentTime);
    const totalDay = 24 * 60; 
   
    let timeSinceSunrise = currentMinutes - sunriseMinutes;
    if (timeSinceSunrise < 0) {
        timeSinceSunrise += totalDay;
    }

  
    const progress = timeSinceSunrise / totalDay;
    const angle = progress * 360;
    
  
    const radian = (angle * Math.PI) / 180;
    
   
    const sunX = radius * Math.cos(radian - Math.PI);
    const sunY = radius * Math.sin(radian - Math.PI); 

    return (
        <svg className="absolute"
            width="122" 
            height="122" 
            viewBox={`-${radius+20} -${radius+20} ${(radius+20)*2} ${(radius+20)*2}`}

        >
            {/* Full circular path (optional) */}
            <circle 
                cx="0" 
                cy="0" 
                r={radius} 
                fill="none" 
            />
            
            {/* Sun position */}
            <circle 
                cx={sunX} 
                cy={sunY} 
                r="12" 
                fill="gold" 
                stroke="orange" 
                strokeWidth="2"
            />
           
            {/* Horizon line */}
            <line 
                x1={-radius-10} 
                y1="0" 
                x2={radius+10} 
                y2="0" 
                stroke="#ddd" 
                strokeDasharray="4,2"
                 
            />
        </svg>
    );
};
  
export default SunPosition;