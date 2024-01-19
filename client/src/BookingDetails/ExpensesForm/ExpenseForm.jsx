import React from 'react'
import { SharedBox, SharedTypo } from '../../Assets/SharedAssets'
import ExpensesControl from './ExpensesControl'

const ExpenseForm = ({values, handleChange}) => {
  return (
    <SharedBox display='block' flexDirection='column'>
        <SharedBox justifyContent='start'>
        <SharedTypo variant='h5' color='inherit'>Expenses</SharedTypo>
        </SharedBox>
        <ExpensesControl 
        values={values}
        handleChange={handleChange} 
        />
    </SharedBox>
  )
}

export default ExpenseForm