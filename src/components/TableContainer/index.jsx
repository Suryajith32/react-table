import React, { useEffect, useState } from 'react'
import TableSheet from '../TableSheet'
import './index.css'
import { useSelector } from 'react-redux'

const TableHeader = () => {
  const updatedMarix = useSelector((state) => state.data.value.initialMatrix)

  const handleButtonCLick = () => {
    console.log(updatedMarix, 'UpdatedMatrix')
  }

  return (
    <>
      <div className='content-displayer'>
        <button onClick={handleButtonCLick}>get updated data</button>
      </div>
      <div className='table-container'>
        <TableSheet />
      </div >
    </>
  )
}

export default TableHeader