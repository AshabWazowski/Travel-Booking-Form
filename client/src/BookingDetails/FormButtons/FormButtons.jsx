import React from 'react'
import { SharedBox, SharedBtn } from '../../Assets/SharedAssets'

const FormButtons = ({submitCheck, setSubmitCheck}) => {
  return (
    <SharedBox justifyContent='flex-end' gap='1.5rem'>
        <SharedBtn variant='text'>Cancel</SharedBtn>
        <SharedBtn type="Submit" onClick={()=>setSubmitCheck("save")}>Save</SharedBtn>
        <SharedBtn variant='contained' type="Submit" onClick={()=>setSubmitCheck("submit")}>Submit</SharedBtn>

    </SharedBox>
  )
}

export default FormButtons