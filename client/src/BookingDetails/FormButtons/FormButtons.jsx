import React from 'react'
import { SharedBox, SharedBtn } from '../../Assets/SharedAssets'
import { setSubmit } from '../../ReduxState';
import {useDispatch} from 'react-redux'

const FormButtons = () => {

  const dispatch = useDispatch()

  return (
    <SharedBox justifyContent='flex-end' gap='1.5rem'>
        <SharedBtn variant='text'>Cancel</SharedBtn>
        <SharedBtn type="Submit" onClick={()=>dispatch(setSubmit("save"), console.log(setSubmit()))}>Save</SharedBtn>
        <SharedBtn variant='contained' type="Submit" onClick={()=>dispatch(setSubmit("submit"))}>Submit</SharedBtn>

    </SharedBox>
  )
}

export default FormButtons