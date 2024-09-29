import React from 'react'

export default function Input() {
    
    return (
        <>
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
                    <tr>
                        <td>Groceries</td>
                        <td>2</td>
                        <td>15000</td>
                        <td>30000</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}