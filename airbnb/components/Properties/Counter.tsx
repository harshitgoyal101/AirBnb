import { useState } from 'react'
import { Button } from 'react-day-picker';

export const Counter = () => {

    const [count, SetCount] = useState(0);
    const increment = () => SetCount(count+1);
    const decrement = () => SetCount(count - 1);
  return (
    <div className='flex'>
        <Button onClick={decrement}>-</Button>
        <div>{count}</div>
        <Button onClick={increment}>+</Button>
    </div>
  )
}


