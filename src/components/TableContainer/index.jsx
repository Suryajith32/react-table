import React, { useEffect, useState } from 'react'
import TableSheet from '../TableSheet'
import './index.css'
import { useDispatch, } from 'react-redux'
import { matrixReducer } from '../../reducer/dataReducer'

const TableHeader = () => {

  const handleButtonCLick = () => {
    console.log(indexValues, 'indexValues')
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