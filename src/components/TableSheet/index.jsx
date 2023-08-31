import React, { useRef, useState } from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { indexReducer, inputChangeReducer } from '../../reducer/dataReducer'
import TableHeader from '../TableHeader'

const TableSheet = ({ data }) => {
  const matrixdata = useSelector((state) => state.data.value.initialMatrix)
  const [childMatrix, setChildMatrix] = useState(data)
  const dispatch = useDispatch()
  const inputRef = useRef()
  console.log(matrixdata, 'from reducer')


  const handleInputChange = (event, columnIndex, rowIndex) => {
    console.log(rowIndex, columnIndex, 'col and row indexes')
    console.log(event.target.value, 'event . targeted value')
    dispatch(inputChangeReducer(event.target.value))
    dispatch(indexReducer(rowIndex))
    dispatch(indexReducer(columnIndex))
  } 

  return (
    <>
      <table>
        <tbody>
          <TableHeader/>
          {childMatrix.map((item, rowIndex) => (
            <tr key={rowIndex}>
              <th scope="row">{rowIndex + 1}</th>
              {item?.map((numbers, columnIndex) => (
                <td key={columnIndex}>
                  <input ref={inputRef} defaultValue={numbers} type='number' onChange={(event) => handleInputChange(event, rowIndex, columnIndex)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TableSheet