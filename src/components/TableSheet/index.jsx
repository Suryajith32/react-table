import React, { useEffect, useState } from 'react'
import './index.css'
import TableHeader from '../TableHeader'
import TableRow from '../TableRow'
import { useDispatch } from 'react-redux'
import { matrixReducer } from '../../reducer/dataReducer'

const TableSheet = () => {

  const [matrixofNumbers, setMatrixOfNumbers] = useState(() =>
    Array.from({ length: 50 }, () =>
      Array.from({ length: 60 }, () =>
        Math.floor(Math.random() * 80)
      )));
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch((matrixReducer(matrixofNumbers)))
  }, [])

  return (
    <>
      <table>
        <tbody>
          <TableHeader />
          <TableRow />
        </tbody>
      </table>
    </>
  )
}

export default TableSheet