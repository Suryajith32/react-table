import React, { memo, useCallback } from 'react'
import { useDispatch, } from 'react-redux'
import { updateMatrix } from '../../reducer/dataReducer'

const Input = (props) => {
  const dispatch = useDispatch()

  console.log('input box rendered')

  const handleInputValues = (event, currentRowIndex, currentColumnIndex) => {
    console.log(event.target.value, currentRowIndex, currentColumnIndex, 'targeted value')
    const newValue = Number(event.target.value)
    console.log(typeof (newValue), 'newValue')
    const data = {
      newValue, currentRowIndex, currentColumnIndex
    }
    dispatch(updateMatrix(data))
  }

  return (
    <input name='input' type="number" defaultValue={props.data} onChange={(event) => handleInputValues(event, props?.rowIndex, props?.columnIndex)} />
  )
}

export default memo(Input)