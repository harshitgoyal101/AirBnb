import { Input } from "../ui/input"

export const AddDescription = () => {
  return (
    <div className="mx-72 mt-10">
      <div className="mx-40 flex justify-between">
        <div>
          <p className='font-semibold text-3xl'>Create your description</p>
          <p className="text-lightText text-lg text-start">Share what makes your place special.</p>
        </div>
        
      </div>
      <div className="my-4 mx-40  h-72 ">
        <Input 
            placeholder = "Add your decription here..." 
            className="my-2 h-full text-lightText rounded-xl border-black border-2">
        </Input> 
      </div>  

    </div>
  )
}

