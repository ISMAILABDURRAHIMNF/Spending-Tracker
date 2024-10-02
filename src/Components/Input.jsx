import React, { useState } from 'react'

export default function Input({ onSubmit }) {
    const [ desc, setDesc ] = useState('')
    const [ quantity, setQuantity ] =  useState(0)
    const [ price, setPrice ] = useState(0)
    

    const handleSubmit = () => {
        onSubmit({ desc : desc, quantity : quantity, price : price })
        setDesc("")
        setQuantity(0)
        setPrice(0)
    }

    return (
        <div className='container-div'>
            <input 
                type="text" 
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                placeholder='Write spending description'
            />
            <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                placeholder='Price'
            />
            <input
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                placeholder='0'
            />
            <button onClick={handleSubmit}>+</button>
        </div>
    )
}