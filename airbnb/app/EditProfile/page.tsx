import { Button } from '@/components/ui/button'
import { IconWithLabel } from '@/components/ui/IconWIthLabel';
import Image from "next/image";
import { BsFillCameraFill } from "react-icons/bs";
export function Avatar({name, size= "small"} : {name: string, size?: string}) {
  return <div className={`relative inline-flex items-center justify-center
  overflow-hidden rounded-full bg-black ${size === "small" ? "w-5 h-5" : "w-52 h-52"}`}>
    <span className={`text-white ${size === "small" ? "text-xs " : "text-9xl font-semibold"}`}>{name[0]}</span>
  </div>
}

const EditPorfile = () => {
  return (
    <div className='px-36 py-8 flex'>
      <div className='h-fit py-4 w-fit ml-10 mr-16'>
        <div className='z-0'><Avatar name='Amal' size='big'></Avatar></div>
        <Button size={"sm"} variant={"active"} className='shadow-lg relative -top-4 left-16 flex justify-center items-center'>
            <BsFillCameraFill/>
            <div className='text-xs font-semibold'>Add</div>
        </Button>
      </div>
      <div className='ml-16'>
        <div className='text-3xl font-semibold'>Your Profile</div>
        <div className='text-md text-lightText mt-4 pr-28'>The information you share will be used across Airbnb 
            to help other guests and Hosts get to know you. <p className='underline inline'>Learn more</p>
        </div>
        <div className='grid grid-cols-2'>
            <div><IconWithLabel type={'all_amenities'}/></div>
            <div><IconWithLabel type={'all_amenities'}/></div>
            <div><IconWithLabel type={'all_amenities'}/></div>
            <div><IconWithLabel type={'all_amenities'}/></div>
            <div><IconWithLabel type={'all_amenities'}/></div>
            <div><IconWithLabel type={'all_amenities'}/></div>
            <div><IconWithLabel type={'all_amenities'}/></div>
            <div><IconWithLabel type={'all_amenities'}/></div>
            <div><IconWithLabel type={'all_amenities'}/></div>
            <div><IconWithLabel type={'all_amenities'}/></div>
            <div><IconWithLabel type={'all_amenities'}/></div>
        </div>
      </div>
    </div>
  )
}

export default EditPorfile
