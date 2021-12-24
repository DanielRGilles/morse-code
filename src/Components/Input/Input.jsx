import React, { useState } from 'react'
import './Input.css'
export default function Input() {
    const [ text, setText ] = useState('')
    return (
        <>
          <label className='mt-4 border-2 bg-slate-200 p-4 rounded-lg  border-black' htmlFor='morse'>Type to live translate: 
          <textarea id='morse' name='morse' value={text} onChange={(e) => setText(e.target.value)}/>  </label>
        </>
    )
}
