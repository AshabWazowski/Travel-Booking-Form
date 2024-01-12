import React from 'react'
import { SharedBox, SharedTypo } from '../../Assets/SharedAssets'
import ExpensesControl from './ExpensesControl'

const ExpenseForm = () => {
  return (
    <SharedBox display='block' flexDirection='column'>
        <SharedBox justifyContent='start'>
        <SharedTypo variant='h5' color='inherit'>Expenses</SharedTypo>
        </SharedBox>
        <ExpensesControl/>
    </SharedBox>
  )
}

export default ExpenseForm