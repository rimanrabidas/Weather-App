import React from 'react'
import { UseApi } from '../../BioContext';
import { IoIosCloud, IoIosSunny } from 'react-icons/io';
import { GiNinjaStar } from 'react-icons/gi';

const ForecastMain = () => {

 const {weather,theame} = UseApi();

  return (
    <div className=""> 
      <div className="flex flex-row justify-between items-center mt-5 ">
    <div className="size-8"><GiNinjaStar className={`chakra size-8 ${theame===true? "text-violet-600":"text-zinc-400"}`}/></div>
    <h1 className={`boxshadow2 flex relative z-1 flex-row justify-center items-center text-xl font-bold text-white/90 pl-5 pr-5 pb-2 pt-2 rounded-b-[50%] rounded-t-[50%] outline-none ${theame===true? "bg-gradient-to-b from-violet-100 via-violet-600 to-violet-100" : "bg-zinc-700"}`}> 5 Day Forecast</h1>


                                  {/*bekar hai bhai*/}
    <div className={`outline-1 ${theame===true? "outline-violet-600":"outline-zinc-400"} w-[50%] left-10 absolute `}></div>
    <div className={`outline-1 ${theame===true? "outline-violet-600":"outline-zinc-400"} w-[50%] right-10 absolute `}></div>


    <p className="flex flex-row justify-center items-center ">
    <GiNinjaStar className={`chakra2 size-8 ${theame===true? "text-violet-600":"text-zinc-400"}`}/>
    </p>
</div>
    <div className={` mainpart relative flex flex-col w-full lg:w-110 min-h-50 max-h-62 lg:h-62 h-fit mt-5 rounded-3xl  ${theame===true? "bg-gradient-to-b  from-violet-400 to-violet-600": "bg-gradient-to-b  from-zinc-500 to-zinc-700"} hover:scale-101 cursor-pointer`}>
                <div className="flex flex-row justify-between text-white p-4 ">
                    <h1 className='text-2xl font-medium'>date</h1>
                    <h1 className='flex flex-col justify-center items-center text-2xl font-medium'>Today<p className='text-sm'>time</p></h1>
                </div>
    
    <div className="flex flex-col">
    <h1 className={`temp flex text-7xl pl-3 font-bold ${theame===true? "bg-gradient-to-b  from-white/100 to-violet-400": "bg-gradient-to-b  from-zinc-50 to-zinc-200"} bg-clip-text text-transparent `}>{weather.data.values.temperature.toFixed()} <p className={`text-3xl font-bold ${theame===true? "bg-gradient-to-b  from-white/100 to-violet-500": "bg-gradient-to-b  from-zinc-50 to-zinc-200"} bg-clip-text text-transparent`}> °C</p></h1>
    <h2 className='font-bold text-xl pl-4 pt-1 text-white/90'> {weather.location.name}</h2>
    </div>
    <div className="SunnyCloudy">
    <IoIosSunny  className='flex absolute size-25 top-23 text-yellow-400  right-17' />
    <IoIosCloud className='flex absolute size-30 top-26.5 text-zinc-200 right-5' />
    </div>
    
            </div>
            </div>
  )
}

export default ForecastMain