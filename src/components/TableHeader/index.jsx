import React from 'react'

const TableHeader = ({matrixofNumbers}) => {

    return (
        <tr>
            <td></td>
            {matrixofNumbers&&matrixofNumbers[0]?.map((_, index) => (<th key={index} scope="col">{index + 1}</th>))}
        </tr>
    )
}

export default TableHeader