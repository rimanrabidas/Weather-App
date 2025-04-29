import React from 'react'
import { BiCurrentLocation } from 'react-icons/bi'
import { FaDeleteLeft } from 'react-icons/fa6'
import { FiTrash2 } from 'react-icons/fi'
import { GiModernCity } from 'react-icons/gi'
import { IoMdSearch } from 'react-icons/io'
import { IoChevronBack, IoClose } from 'react-icons/io5'
import { MdOutlineAddLocationAlt } from 'react-icons/md'
import { UseApi } from '../../BioContext'


const Search = ({searchpage,setsearchpage}) => {
    
 const {inputCity,setInputCity,handleSearch,theame} = UseApi();


    const searchlist = [
        {
            id: 1,
img: <GiModernCity className='p-2 size-10 ' />,
hedding: "London",
        },
        {
            id: 2,
img: <GiModernCity className='p-2 size-10 ' />,
hedding: "New York",
        },
        {
            id: 3,
img: <GiModernCity className='p-2 size-10 ' />,
hedding: "paris",
        },
        {
            id: 4,
img: <GiModernCity className='p-2 size-10 ' />,
hedding: "tokyo",
        },
        {
            id: 5,
img: <GiModernCity className='p-2 size-10 ' />,
hedding: "Dubai",
        },
        {
            id: 6,
img: <GiModernCity className='p-2 size-10 ' />,
hedding: "Berlin",
        },
    ]

    const searchhistory = [
        {
            id: 1,
            surchName:"hello gopen"
        },
        {
            id: 2,
            surchName:"hello mina"
        },
        {
            id: 3,
            surchName:"hello riman"
        },
        {
            id: 4,
            surchName:"hello ruma"
        },
        {
            id: 5,
            surchName:"hello triguni"
        },

    ]

    

  return (
    <div className={`flex ${searchpage === false ? "hidden" : "block"}  fixed  z-2 flex-col items-center  top-0 left-0 right-0 ${theame===true? "bg-violet-100" : "bg-zinc-800"} w-full h-[132%]`}>

        <div className={` ${theame===true? "bg-violet-100 headerlight" : "bg-zinc-800 headerdark"} w-full h-fit pb-1 pt-3 pr-5 pl-5 fixed top-0 right-0 flex flex-row justify-between`}>
        <IoChevronBack onClick={() => setsearchpage(!searchpage)} className={` sideberandlocationtrack size-11 border-1 border-black/20 p-2 rounded-md  ${theame===true? "text-violet-700 " : "text-zinc-200 "} hover:scale-105 cursor-pointe`} />
             <BiCurrentLocation className={` sideberandlocationtrack size-11 border-1  border-black/20 p-2 rounded-md ${theame===true? "text-violet-700 " : "text-zinc-200 "} hover:scale-105 cursor-pointer `}/>
             </div>
        <div className="w-[90%] h-12 mt-18 bg-white/80 flex justify-between items-center rounded-full">
            <input type="text" placeholder='Search location'  value={inputCity}
            onChange={(e) => setInputCity(e.target.value)} className='outline-none capitalize placeholder: text-black text-md h-full w-[75%] ml-5' />
        
         <button onClick={handleSearch} ><IoMdSearch onClick={() => setsearchpage(!searchpage)}  className={`size-10  rounded-full p-2 mr-1  ${theame===true? "bg-violet-600 " : "bg-zinc-800 "} hover:scale-105 cursor-pointer`} /></button>  
        </div>
        <div className={`flex flex-row w-[90%] min-h-10 h-fit mt-4 justify-between overflow-hidden  ${theame===true? "bg-red-400 " : "bg-black/80 "} rounded-2xl `}>
        <p className={`flex flex-row justify-center items-center text-xl text-white/90  ${theame===true? " bg-gradient-to-b from-violet-100 to-violet-600 " : " bg-gradient-to-b from-zinc-400 to-zinc-700  "}outline-none font-bold rounded-tr-full rounded-l-2xl w-[60%] h-full`}>
        Surch History
        </p>
        <span className='flex flex-row justify-center items-center  '>Clear All<FiTrash2 className='size-10 p-2.5 ' /></span>
        
        </div>
       
        <div className={`flex flex-col justify-around items-center w-[90%] mt-3 min-h-14  max-h-32 rounded-2xl overflow-x-scroll ${theame===true? "bg-white text-black/90" : "bg-black shadow-md shadow-white/20 text-white/90"} text-xl  font-bold capitalize`}>
        
        {
        searchhistory.map(({id,surchName})=>(
            <div key={id} className={`flex flex-row m-2 p-1 w-[95%] rounded-xl ${theame===true? "bg-violet-100 " : "bg-zinc-800 "} text-sm h-full justify-between items-center`}>
            <h1 className=''>{surchName}</h1>
            <FaDeleteLeft className='size-6 mr-2' />
            </div>
        ))
      }
    
        
        </div>
        <div className={`flex mt-3 flex-row justify-center items-center text-[1.5rem] text-white/90 ${theame===true? "bg-gradient-to-b from-violet-100 to-violet-600 " : "bg-gradient-to-b from-zinc-500 to-zinc-700 "}  outline-none font-bold  rounded-b-full  w-[90%] h-fit`}>Famous Citis</div>

<div className="flex flex-col items-center min-h-55 max-h-78 overflow-x-scroll mt-4 w-[90%] border-l border-white/80 border-r ">
        { searchlist.map(({id,hedding,img}) => (
             <div key={id} className={`flex flex-row w-[90%] mb-4 shadow-sm  h-fit ${theame===true? "bg-white/80 shadow-violet-600 text-black/90" : "bg-white/20 shadow-black text-white/80 "} justify-between rounded-full items-center`}>
             <div className={`flex ml-0.5 justify-center items-center ${theame===true? "bg-gradient-to-bl from-violet-400 to-violet-700 text-white/80 " : "bg-zinc-800 text-white/80"}  rounded-full `}>
              {img}
             </div>
             <span className='flex flex-col justify-center  items-center'>
                 <h1 className='text-xl capitalize font-bold'>{hedding}</h1>
             </span>
             <div className=" hover:scale-105 cursor-pointer"><MdOutlineAddLocationAlt className={`size-10  m-0.5 p-2.5 rounded-full ${theame===true? "text-white/90 bg-violet-500 " : "bg-zinc-800 text-white/80"} `}/></div>
             </div>
        ))}</div>

        <div onClick={() => setsearchpage(!searchpage)} className={`flex justify-center items-center w-22 h-9 rounded-full fixed bottom-8 ${theame===true? "bg-violet-500 " : "bg-zinc-200 "} shadow-lg shadow-black/40 hover:scale-105 cursor-pointer`}>
        <IoClose className={`size-12 ${theame===true? "text-white/90 " : "text-black/80 "}`}/>
        </div>
        
    </div>
  )
}

export default Search;