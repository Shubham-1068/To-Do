import React from 'react'
import Body from './Body'

function TodoDisplay({e , i , removeFromList , count2}) {
  return (
    <>
        <li key={i} className='border-2 border-slate-600 rounded-xl mb-4 h-24 flex items-center justify-between px-9 font-semibold'><div className="flex justify-center items-center gap-7 text-xl"><span className='text-2xl font-semibold'>{i+1}.</span> {e.data}</div> <button className="border-2 border-red-600 rounded-lg h-8 w-20 hover:bg-slate-300" onClick={()=>{removeFromList(i)}}>Remove</button></li>
    </>
  )
}

export default TodoDisplay
