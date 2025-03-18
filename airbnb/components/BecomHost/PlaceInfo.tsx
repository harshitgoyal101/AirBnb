import { Counter } from "../Properties/Counter"
import { GuestDropdown } from "../Properties/GuestDropdown"
import { Separator } from "../ui/separator"

export const PlaceInfo = () => {
  return (
    <div className='px-6 mt-10 md:px-32 lg:px-72 xl:px-96 flex-row'> 
        <div className="mb-12">
            <p className="text-3xl font-semibold text-darkText">Share some basics about your place</p>
            <p className="text-lightText text-lg text-start">You'll add more details later, such as bed types.</p>
        </div>
        <div className="flex justify-between my-4 items-center">
            <div className="text-xl mb-1">Guests</div>
            <Counter/>
        </div>
        <Separator/>
            
        <div className="flex justify-between my-4 items-center">
            <div className="text-xl mb-1">Bedrooms</div>
            <Counter/>
        </div>
        <Separator/>

        <div className="flex justify-between my-4 items-center">
            <div className="text-xl mb-1">Bathrooms</div>
            <Counter/>
        </div>
    </div>
    
    )
  
}

