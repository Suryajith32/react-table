import React, { useEffect, useRef, useState } from 'react'
import './index.css'

const TableSheet = ({ matrixofNumbers }) => {
  const [childMatrix, setChildMatrix] = useState(matrixofNumbers)
  const [value, setValue] = useState()

  const inputRef = useRef(0)
  console.log(inputRef, 'inputref')

  useEffect(() => {
    console.log(inputRef.current,'render count')
  }, [])


  return (
    <>
      {childMatrix && childMatrix.map((item, index) => (
        <tr>
          <th>{index}</th>
          {item.map((number, index) => (
            <td key={index}>
              <input  type='text' id='input-field' defaultValue={number} value={value}/>
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}

export default TableSheet