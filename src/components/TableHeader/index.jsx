import React, { useEffect, useState } from 'react'
import TableSheet from '../TableSheet'
import './index.css'
import { useDispatch } from 'react-redux';
import { matrixReducer } from '../../reducer/dataReducer';

const TableHeader = () => {
  const [matrixofNumbers, setMatrixOfNumbers] = useState(() =>
    Array.from({ length: 50 }, () =>
      Array.from({ length: 50 }, () =>
        Math.floor(Math.random() * 80)
      )));

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(matrixReducer(matrixofNumbers))
  }, [])

  return (
    <>
      <div className='content-displayer'>
        <button>Show Changed Value</button>
      </div>
      <div className='table-container'>
        <table>
          <tr>
            <th></th>
            {matrixofNumbers.map((_, index) => (
              <th>{index}</th>
            ))}
          </tr>
          <tbody>
            <TableSheet matrixofNumbers={matrixofNumbers} />
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableHeader