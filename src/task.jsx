import React, {useState} from 'react'

const Task=()=>{
  const [count,setCount]=useState(0);



return (<>
<p className='text-center text-white font-bold text-9xl mb-6'>{count}</p>

   <div className='flex gap-6 justify-center '>
  <button className='border-2 border-white border-solid p-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-400 ' onClick={()=>{
    setCount(count-1)
  }}>Decrement</button>
  <button className='border-2 border-white border-solid p-3 bg-cyan-500 text-white font-semibold rounded-lg  hover:bg-cyan-400' onClick={()=>{
    setCount(0)
  }}>Reset</button>
  <button className='border-2 border-white border-solid p-3 bg-cyan-500 text-white font-semibold rounded-lg  hover:bg-cyan-400' onClick={()=>{
    setCount(count+1)
  }}>Increment</button>
  </div>
  </>
)
}

export default Task;