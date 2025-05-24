import { AiOutlineHome} from 'react-icons/ai'
import { IoMdSearch } from 'react-icons/io'
import { TbListDetails } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import { UseApi } from '../../BioContext'

const Navbar = ({setSearchPage,searchPage}) => {
  const {theme} = UseApi();
  return (
    <div className="flex w-full z-2 h-fit justify-center">
    <div className={` flex fixed lg:hidden bottom-5 flex-row justify-around items-center w-[85%] h-fit p-2 rounded-full ${theme===true? "bg-white nav" : "bg-zinc-800 navDark"} shadow-violet-200 shadow-2xl`}>
    <NavLink to={"/"} className={({isActive})=> isActive? 'text-violet-500 border-t-0 border-b-0 border-2 rounded-4xl':'text-violet-500'}>
    <AiOutlineHome  className={`size-10 p-2 rounded-md ${theme===true? "text-violet-500" : "text-zinc-200"}  hover:scale-105 cursor-pointer`}/>
    </NavLink>
       <div onClick={() => setSearchPage(!searchPage)} className={` navSearch  flex justify-center items-center ${theme===true? "bg-violet-500 text-violet-100" : "bg-zinc-100 text-zinc-900"} w-20 h-fit rounded-2xl hover:scale-105 cursor-pointer`}>
       <NavLink to={"/"}>
       <IoMdSearch className='size-10 p-2 cursor-pointer '/>    </NavLink> </div>
       <NavLink to={"/forecast"} className={({isActive})=> isActive? 'text-violet-500 border-t-0 border-b-0 border-2 rounded-4xl':'text-violet-500'}>
        <TbListDetails className={`size-10 p-2 rounded-md ${theme===true? "text-violet-500" : "text-zinc-200"} hover:scale-105 cursor-pointer`}/>
        </NavLink>
    </div>
    </div>
  )
}

export default Navbar;