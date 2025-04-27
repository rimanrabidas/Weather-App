import React from 'react'
import { FaMountainSun } from 'react-icons/fa6'
import { GiSunset } from 'react-icons/gi'
import { IoSunny } from 'react-icons/io5'

const SunRiseSetTime = () => {
  return (
    <div className='flex flex-col w-full bg-white h-30 text-black rounded-2xl mt-5 '>
        <div className="flex relative flex-col w-full h-full sunposition2  rounded-2xl justify-center items-center ">
<div className="text-xl absolute top-7 left-15">Sunrise</div>
<p className='flex flex-row absolute top-17 left-15'> 06.00 AM </p>
<IoSunny className='size-6 text-yellow-500 absolute top-11 left-4'/>
<FaMountainSun  className='size-8 text-green-900 absolute top-12 left-3'/>
<div className="text-xl absolute top-7 right-15">Sunset</div>
<p className='flex flex-row absolute top-17 right-15'>06.00 PM </p>
<GiSunset className='size-10 text-orange-500 absolute top-10 right-3'/>
<div className="w-[70%] h-full bg-violet-600/20 absolute right-0 rounded-2xl clipPathUse"></div>
        </div>
    </div>
  )
}

export default SunRiseSetTime        