import React, { memo } from 'react'
import { useDispatch, } from 'react-redux'
import { updateMatrix } from '../../reducer/dataReducer'

const Input = memo((props) => {
  const dispatch = useDispatch()


  const handleInputValues = (event, currentRowIndex, currentColumnIndex) => {
    console.log(event.target.value, currentRowIndex, currentColumnIndex, 'targeted value')
    const newValue = event.target.value
    const data = {
      newValue, currentRowIndex, currentColumnIndex
    }
    dispatch(updateMatrix(data))
  }

  return (
    <input type="number" defaultValue={props.data} onChange={(event) => handleInputValues(event, props?.rowIndex, props?.columnIndex)} />
  )
})

export default Input