import React from 'react'
import { HotelControl, CarControl } from '.'
import {SharedPaper} from '../../Assets/SharedAssets'

const ExpensesControl = () => {

  return (
    <SharedPaper elevation={3} overflow='hidden'>
        <HotelControl/>
        <CarControl/>

    </SharedPaper>
    
  )
}

export default ExpensesControl