import { Input } from "../ui/input"

export const AddDescription = () => {
  return (
    <div className="px-6 md:px-32 lg:px-40 xl:px-72  mt-2">
        <div className="md:mx-20 lg:mx-40  flex justify-between">
        <div>
          <p className='font-semibold text-3xl'>Name of your property</p>
        </div>        
      </div>
      <div className="my-4 md:mx-20 lg:mx-40  h-10 ">
        <Input 
            placeholder = "Add your Property's name..." 
            className="my-2 h-full text-lightText rounded-xl border-black border-2">
        </Input> 
      </div>  

      <div className="md:mx-20 lg:mx-40 mt-8 flex justify-between">
        <div>
          <p className='font-semibold text-3xl'>Create your description</p>
          <p className="text-lightText text-lg text-start">Share what makes your place special.</p>
        </div>        
      </div>
      <div className="my-4 md:mx-20 lg:mx-40  h-32 ">
        <Input 
            placeholder = "Add your decription here..." 
            className="my-2 h-full text-lightText rounded-xl border-black border-2">
        </Input> 
      </div>  

      <div className="md:mx-20 lg:mx-40 mt-8 flex justify-between">
        <div>
          <p className='font-semibold text-3xl'>Pricing per night</p>
        </div>        
      </div>
      <div className="my-4 md:mx-20 lg:mx-40 h-10 ">
        <Input 
            placeholder = "Add property rate here..." 
            className="my-2 h-full text-lightText rounded-xl border-black border-2">
        </Input> 
      </div>  

    </div>
  )
}

