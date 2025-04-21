'use client'
import { Button } from '@/components/ui/button'
import { IconWithLabel } from '@/components/ui/IconWIthLabel';
import { Input } from '@/components/ui/input';
import { BsFillCameraFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { apiService } from "@/app/services/apiService";
import { Avatar } from '@/components/ui/Avatar';

const edit_profile = () => {
   const [categories, setCategories] = useState<String[]>([]);
  
      const getCategories = async () => {
          const tmpCategories = await apiService.get('/api/categories/');
          setCategories(tmpCategories.data);
      }
  
      useEffect(() => {
          getCategories();
      }, [])
  

  return (
    <div className='px-36 py-8 flex'>
      <div className='h-fit py-4 w-fit ml-10 mr-16 lg:sticky lg:top-0 lg:h-screen'>
        <div className='z-0 '>
          <Avatar name='Amal' size='big'></Avatar>
        </div>
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
        {/* phone number and email address */}
        <div className="mt-8 w-72">
          <div className="flex justify-between">
          <div>
            <p className='font-semibold text-3xl'>Email</p>
          </div>        
          </div>
          <div className="my-4 h-10 ">
            <Input 
                placeholder = "Add your email id..." 
                className="my-2 h-full text-lightText rounded-xl border-black border-2">
            </Input> 
          </div>  
        </div>

        <div className="mt-8 w-96">
          <div className="flex justify-between">
          <div>
            <p className='font-semibold text-3xl'>Phone no.</p>
          </div>        
          </div>
          <div className="my-4 h-10 w-72">
            <Input 
                placeholder = "Add your phone number..." 
                className="my-2 h-full text-lightText rounded-xl border-black border-2">
            </Input> 
          </div>  
          <div className='grid grid-cols-2'>
              {categories.map((category, index) => {
                return <div key={index} className="basis-1/10 mt-2">
                    <IconWithLabel className = "flex flex-row items-start" type={String(category)}/>
                </div>
            })}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default edit_profile;
