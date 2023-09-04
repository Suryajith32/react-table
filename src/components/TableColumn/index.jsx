import React, { memo }  from 'react'
import Input from '../Input'

const TableColumn = ({ data, rowIndex }) => {
console.log('coloumn rendered')
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

export default memo(TableColumn)