import React, { memo } from 'react'
import TableColumn from '../TableColumn'
import { useSelector } from 'react-redux'

const TableRow = () => {
  const matrixdata = useSelector((state) => state.data.value.initialMatrix)

  return (
    <>
      {matrixdata && matrixdata?.map((item, rowIndex) => (
        <tr key={rowIndex}>
          <th scope="row">{rowIndex + 1}</th>
            <TableColumn data={item} rowIndex={rowIndex} />
        </tr>))}
    </>
  )
}

export default memo(TableRow)