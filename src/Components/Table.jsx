import React from 'react'

export default function Table({ lists }) {
    

    return (
        <div className='container-div'>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price per-item</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {lists.map((list, i) => (
                        <tr key={i}>
                            <td>{list.desc}</td>
                            <td>{list.quantity}</td>
                            <td>{list.price}</td>
                            <td>{list.quantity * list.price}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="3">Total</td>
                        <td>{lists.reduce((acc, item) => acc += Number(item.price * item.quantity), 0)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}