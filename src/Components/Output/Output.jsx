import React from 'react'
import './Output.css'
export default function Output({morse}) {
    return (
        
        <div className='rounded-lg op-cnt p-3 mt-5 flex flex-col flex-wrap  max-w-full bg-white'>
          {morse}
        </div>
        
    )
}
