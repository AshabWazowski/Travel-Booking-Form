import React , { useState } from 'react';
import { Box, IconButton, InputBase, Tooltip } from '@mui/material'
import { SharedBox, SharedBtn } from '../../Assets/SharedAssets'
import Filter from './Filter';
import { useNavigate } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid'

// IMPORTING ICONS HERE 
import SearchIcon from '@mui/icons-material/Search';
// import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import InfoIcon from '@mui/icons-material/Info';






const Form = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const navigate = useNavigate();

  const handleClick = () =>{
      const uuid = uuidv4();
      navigate(`/booking`);
  }

  return (
    <Box>

    <Box display='grid' alignItems='center' gridTemplateColumns='3fr 1fr' padding='0 6%'>
            <SharedBox padding='1rem' border='1px solid black' borderRadius='5px'>
                <InputBase fullWidth placeholder='Enter ID or Title...'/>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
            </SharedBox>

            <SharedBox padding='0 10px' justifyContent='space-between'>
              
              <IconButton onClick={()=>setOpenFilter(!openFilter)}>
                <FilterListIcon/>
              </IconButton>

              <Tooltip title="You need to login to save the booking history">
                <IconButton >
                  <InfoIcon/>
                </IconButton>
              </Tooltip>

                <SharedBtn variant='contained' onClick={handleClick}>
                    New Booking
                    {/*<AddIcon sx={{paddingLeft:'10px'}}/>*/}
                </SharedBtn>
            </SharedBox>
    </Box>
  {openFilter ? <Filter/> : null}
  </Box>
  )
}

export default Form