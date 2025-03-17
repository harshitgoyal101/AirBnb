import Image from "next/image"
export const PlaceSelect = () => {
  return (
    <div className='px-6 md:px-32 lg:px-40 xl:px-72 flex-row text-center'> 
            <div className='font-semibold text-3xl mb-4'>What type of place will guests have?</div>
            <div className="p-6 m-4 md:mx-10 lg:mx-32 border-2 rounded-xl hover:bg-gray-100 hover:border-black flex justify-between">
                <div className="w-2/3 text-start">
                    <p className="font-semibold text-start text-lg text-darkText">An entire place</p>
                    <p className="text-lightText text-sm">Guests have the while place to themselves</p>
                </div>
                <Image 
                    width={32}
                    height={32}
                    src="/PlaceSelect/EntireHome.svg"
                    alt="Small Image 1"
                />
            </div>
            <div className="p-6 m-4 md:mx-10 lg:mx-32 border-2 rounded-xl hover:bg-gray-100 hover:border-black  flex justify-between">
                <div className="w-2/3 text-start">
                    <p className="font-semibold text-lg text-darkText">A room</p>
                    <p className="text-lightText text-sm">Guests have their own room in a home, plus access to shared spaces.</p>
                </div>
                <Image 
                    width={32}
                    height={32}
                    src="/PlaceSelect/Room.svg"
                    alt="Small Image 1"
                />
            </div>
            <div className="p-6 m-4 md:mx-10 lg:mx-32 border-2 rounded-xl hover:bg-gray-100 hover:border-black  flex justify-between">
                <div className="w-2/3  text-start">
                    <p className="font-semibold  text-lg text-darkText">A shared room in a hostel</p>
                    <p className="text-lightText text-sm">Guests sleep in a shared room in a professionally managed hostel with staff on-site 24/7</p>
                </div>
                <Image 
                    width={32}
                    height={32}
                    src="/PlaceSelect/SharedSpace.svg"
                    alt="Small Image 1"
                />
            </div>
    </div>
  )
}

