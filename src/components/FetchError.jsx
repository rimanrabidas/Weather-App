import { UseApi } from "../../BioContext"

const FetchError = () => {
  const {fetchError} = UseApi();
  return (
    <div className={`${fetchError===true? "block" : "hidden"} w-screen h-screen bg-red-400`}>FetchError</div>
  )
}

export default FetchError