import { FaMountainSun } from 'react-icons/fa6'
import { GiSunset } from 'react-icons/gi'
import { IoSunny } from 'react-icons/io5'
import { UseApi } from '../../BioContext'
import { useState } from 'react'

const SunRiseSetTime = ({selectDay}) => {
  const {theme} = UseApi();

  const [clip,setClip] = useState(true);
  return (
    <div className={`flex flex-col w-full ${theme===true? "bg-white text-black" : "text-white bg-zinc-700"} h-30 lg:h-34 lg:-mt-32 lg:w-[60%] lg:ml-[38%]  rounded-2xl mt-5 `}>
        <div onClick={() => setClip(!clip)} className="flex relative flex-col w-full h-full sunPosition2  rounded-2xl justify-center items-center ">
<div className="text-xl absolute top-7 left-15">Sunrise</div>
<p className='flex flex-row absolute top-17 left-15'> {new Date(selectDay.values.sunriseTime).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit', hour12:"true"})} </p>
<IoSunny className='size-6 text-yellow-500 absolute top-11 left-4'/>
<FaMountainSun  className='size-8 text-green-900 absolute top-12 left-3'/>
<div className="text-xl absolute top-7 right-15">Sunset</div>
<p className='flex flex-row absolute top-17 right-15'>{new Date(selectDay.values.sunsetTime).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit', hour12:"true"})}</p>
<GiSunset className='size-10 text-orange-500 absolute top-10 right-3'/>
<div className={`${clip===true? "clipPathUse":"clipPathUse2"} w-full h-full ${theme===true? "bg-violet-600/20" : "bg-zinc-100/20"} absolute right-0 rounded-2xl `}></div>
        </div>
    </div>
  )
}

export default SunRiseSetTime        