import { Spinner } from '@/components/ui/Spinner'
import React from 'react'

const loading = () => {
  return (
    <div>
      <Spinner size = {"large"} className='my-60'/>
    </div>
  )
}

export default loading
