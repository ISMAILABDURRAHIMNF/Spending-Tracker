import React, { useState } from 'react'
import Input from './Components/Input'
import Table from './Components/Table'
import './index.css'

export default function App() {
    const [ listSpend, setListSpend ] = useState([])

    const addList = (data) => {
      data ? setListSpend((prevData) => [...prevData, data]) : alert('Write your spend description')
      console.log(listSpend)
    }

    return (
      <div className='container-main'>
        <Input onSubmit={addList}></Input>
        <Table lists={listSpend}></Table>
      </div>
    )
}
