import React, { useState } from 'react'

export default function Input() {
    const [ text, setText ] = useState('')
    return (
        <>
          <label htmlFor='morse'>Type to live translate: 
          <input id='morse' name='morse' value={text} onChange={setText}/>  </label>
        </>
    )
}
