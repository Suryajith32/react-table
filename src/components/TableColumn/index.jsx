import React from 'react'
import Input from '../Input'

const TableColumn = ({ data, rowIndex }) => {

  console.log(rowIndex, 'props')
  return (
    <>
      {data && data.map((number, columnIndex) => (
        <td key={columnIndex} >
          <Input data={number} rowIndex={rowIndex} columnIndex={columnIndex}/>
        </td>
      ))}
    </>
  )
}

export default TableColumn