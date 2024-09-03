import React from 'react'
import Body from './Body'

function TodoDisplay({e , i , removeFromList , count2}) {
  return (
    <>
        <li key={i} className='border-2 border-slate-600 rounded-xl mb-4 min-h-16 lg:min-h-24 flex items-center justify-between px-4 lg:px-9 font-semibold overflow-x-hidden overflow-y-auto  w-full py-3 lg:py-0'><span className='text-xl lg:text-2xl font-semibold'>{i+1}.</span><div className="flex justify-center items-center gap-1 lg:gap-7 text-xl h-[80%] lg:w-[85%] md:w-[75%] w-[65%] break-all overflow-y-auto"> {e.data}</div> <button className="border-2 border-red-600 rounded-lg h-8 w-[70px] lg:w-20 hover:bg-slate-300" onClick={()=>{removeFromList(i)}}>Remove</button></li>
    </>
  )
}

export default TodoDisplay
