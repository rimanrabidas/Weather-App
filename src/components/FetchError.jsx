import { useEffect, useState } from "react"
import { ImBlocked } from "react-icons/im"
import { RiRefreshLine } from "react-icons/ri";
import TypingGame from "./TypingGame";

const FetchError = () => {
useEffect(() => {alert('API limit exceeded. Please wait...')} , [])

const [game,setGame] = useState(false)
  return (
    <div className='w-screen h-screen text-black flex flex-col justify-center items-center bg-violet-100 '>
        <div className={`${game===true? "hidden" :"block" } w-[80%] h-fit bg-white rounded-2xl flex  flex-col gap-5  justify-center items-center p-5 shadow-2xl shadow-black/30`}>
            
                <ImBlocked className="size-14 text-red-600"/>
           <h1 className="text-2xl font-bold">API Limit Exceeded</h1>
           <p className={` flex flex-col justify-center items-center text-sm text-black/80 gap-1`}> 
           <p> Sorry! We've reached the maximum number</p>
           <p>of weather requests. Please wait a</p>
           <p> few minute or try again later.</p>
          </p>
           <button className="w-full h-10 bg-blue-700 rounded-2xl flex justify-center items-center gap-1.5 text-white cursor-pointer" onClick={() => window.location.reload()} ><RiRefreshLine className="size-5"/>Try Again</button>
            <button onClick={() => setGame(!game)} className="w-full h-10 bg-blue-300 rounded-2xl flex justify-center items-center gap-1.5 text-white cursor-pointer">Typing Game For Time Pass</button>
            </div>
            {game && <TypingGame game={game} setGame = {setGame}/>}
        </div>
  )
}

export default FetchError;