import React from 'react'
import { useSelector } from 'react-redux'

const TableHeader = () => {
    const matrixdata = useSelector((state) => state.data.value.initialMatrix)

    return (
        <tr>
            <td></td>
            {matrixdata&&matrixdata[0]?.map((_, index) => (<th key={index} scope="col">{index + 1}</th>))}
        </tr>
    )
}

export default TableHeader