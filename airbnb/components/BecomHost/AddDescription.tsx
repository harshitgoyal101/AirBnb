import { Input } from "../ui/input"

interface FormData {
  propertyName: string;
  description: string;
  pricePerNight: string;
  city: string;
}

interface AddDescriptionProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export const AddDescription = ({ formData, setFormData }: AddDescriptionProps) => {
  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    })
  }

  return (
    <div className="px-6 md:px-32 lg:px-40 xl:px-72 mt-2">
        <div className="md:mx-20 lg:mx-40 flex justify-between">
        <div>
          <p className='font-semibold text-2xl'>Name of your property</p>
        </div>        
      </div>
      <div className="my-4 md:mx-20 lg:mx-40  h-10 ">
        <Input 
            placeholder="Add your Property's name..." 
            className="mb-2 h-full text-lightText rounded-xl border-black border-2"
            value={formData.propertyName}
            onChange={(e) => handleInputChange('propertyName', e.target.value)}
        /> 
      </div>  

      <div className="md:mx-20 lg:mx-40 mt-8 flex justify-between">
        <div>
          <p className='font-semibold text-2xl'>Create your description</p>
        </div>        
      </div>
      <div className="my-4 md:mx-20 lg:mx-40  h-32 ">
        <Input 
            placeholder="Add your decription here..." 
            className="mb-2 h-full text-lightText rounded-xl border-black border-2"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
        /> 
      </div>  

      <div className="md:mx-20 lg:mx-40 mt-8 flex justify-between">
        <div>
          <p className='font-semibold text-2xl'>Pricing per night</p>
        </div>        
      </div>
      <div className="my-4 md:mx-20 lg:mx-40 h-10 ">
        <Input 
            placeholder="Add property rate here..." 
            className="mb-2 h-full text-lightText rounded-xl border-black border-2"
            type="number"
            value={formData.pricePerNight}
            onChange={(e) => handleInputChange('pricePerNight', e.target.value)}
            min={0}
        /> 
      </div>

      <div className="md:mx-20 lg:mx-40 mt-8 flex justify-between">
        <div>
          <p className='font-semibold text-2xl'>City</p>
        </div>        
      </div>
      <div className="my-4 md:mx-20 lg:mx-40 h-10 ">
        <select 
            className="w-full mb-2 h-full text-lightText rounded-xl border-black border-2 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
        >
            <option value="" disabled>Select a city...</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Indore">Indore</option>
            <option value="Hyderabad">Hyderabad</option>
        </select>
      </div>  

    </div>
  )
}