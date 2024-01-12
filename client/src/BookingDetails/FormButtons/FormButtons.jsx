import React from 'react'
import { SharedBox, SharedBtn } from '../../Assets/SharedAssets'

const FormButtons = () => {
  return (
    <SharedBox justifyContent='flex-end' gap='1.5rem'>
        <SharedBtn variant='text'>Cancel</SharedBtn>
        <SharedBtn>Save</SharedBtn>
        <SharedBtn variant='contained'>Submit</SharedBtn>

    </SharedBox>
  )
}

export default FormButtons