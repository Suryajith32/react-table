import React, { useEffect, useState } from 'react'
import TableSheet from '../TableSheet'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { matrixReducer } from '../../reducer/dataReducer'

const TableHeader = () => {
  const changedValue = useSelector((state) => state.data.value.changedInputValue)
  const indexValues = useSelector((state) => state.data.value.selectedIndex)

  const [matrixofNumbers, setMatrixOfNumbers] = useState(() =>
    Array.from({ length: 50 }, () =>
      Array.from({ length: 60 }, () =>
        Math.floor(Math.random() * 80)
      )));
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch((matrixReducer(matrixofNumbers)))

  }, [])

  const handleButtonCLick = () => {
    console.log(indexValues,'indexValues')
  }
  
  return (
    <>
      <div className='content-displayer'>
        <button onClick={handleButtonCLick}>get updated data</button>
      </div>
      <div className='table-container'>
        <TableSheet data={matrixofNumbers} />
      </div >
    </>
  )
}

export default TableHeader