import React, { memo, useEffect,  useState } from 'react'
import './index.css'
import TableHeader from '../TableHeader'
import TableRow from '../TableRow'
import { useDispatch } from 'react-redux'
import { addMatrix } from '../../reducer/dataReducer'

const TableSheet = () => {

  const [matrixofNumbers, setMatrixOfNumbers] = useState(() =>
    Array.from({ length: 50 }, () =>
      Array.from({ length: 60 }, () =>
        Math.floor(Math.random() * 80)
      )));
  const dispatch = useDispatch()
  console.log('table sheet rendered')

  useEffect(() => {
    dispatch(addMatrix(matrixofNumbers))
  }, [])

  return (
    <>
      <table>
        <tbody>
          <TableHeader matrixofNumbers={matrixofNumbers}/>
          <TableRow />
        </tbody>
      </table>
    </>
  )
}

export default memo(TableSheet)