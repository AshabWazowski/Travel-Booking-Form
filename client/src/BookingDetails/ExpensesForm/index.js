import React, { useState } from "react";
import { ButtonGroup, Checkbox, FormControl, InputBase, InputLabel, MenuItem, Select, useMediaQuery } from "@mui/material";
import { SharedBox, SharedBtn, SharedSelect, SharedTypo } from "../../Assets/SharedAssets";




export const HotelControl = () => {
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(false);


  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <SharedBox justifyContent="space-between" width="100%" padding="1rem 3%">
      <SharedBox>
        <Checkbox value={checked} onChange={handleChecked} />{" "}
        <SharedTypo variant="subtitle">Hotel</SharedTypo>
      </SharedBox>
      <SharedBox flexDirection='column'>
        <SharedTypo variant='subtitle' gutterBottom>No. of Days</SharedTypo>
        <ButtonGroup
          variant="contained"
          elevation={2}
          disabled={checked ? false : true}
        >
          <SharedBtn
            variant="contained"
            onClick={() => setValue(Math.max(value - 1, 0))}
          >
            -
          </SharedBtn>
          <InputBase
            value={value}
            sx={{ width: "50px", padding: "0px 10px" }}
          />
          <SharedBtn
            variant="contained"
            onClick={() => setValue(Math.min(value + 1, 100))}
          >
            +
          </SharedBtn>
        </ButtonGroup>
      </SharedBox>
    </SharedBox>
  );
};



export const CarControl = () => {
    const [value, setValue] = useState(0);
    const [checked, setChecked] = useState(false);
    const [car , setCar] = useState('');

    const desktop = useMediaQuery('min-width(1000px)')

    const handleChecked = () => {
      setChecked(!checked);
    };

    const handleSelect = (e) =>{
        setCar(e.target.value)
    }

    return(
        <SharedBox justifyContent="space-between" width="100%" padding="1rem 3%">
      <SharedBox>
        <Checkbox value={checked} onChange={handleChecked} />{" "}
        <SharedTypo variant="subtitle">Rent a Car</SharedTypo>
      </SharedBox>


      <SharedBox display='block'>
        <FormControl fullWidth>
            <InputLabel>Select car type</InputLabel>
            <Select
            value={car}
            onChange={handleSelect}
            variant='outlined'
            sx={{width:'150px'}}
            >
                <MenuItem value=''>
                <SharedTypo variant='body2'>None</SharedTypo>
                </MenuItem>
                <MenuItem value='sedan'>
                    <SharedTypo variant='body2'>Sedan</SharedTypo>
                </MenuItem>
                <MenuItem value='SUV'>
                    <SharedTypo variant='body2'>SUV</SharedTypo>
                </MenuItem>
                <MenuItem value='motorHome'>
                    <SharedTypo variant='body2'>Motor-Home</SharedTypo>
                </MenuItem>
            </Select>
        </FormControl>
      </SharedBox>



      <SharedBox flexDirection='column'>
        <SharedTypo variant='subtitle' gutterBottom>No. of Days</SharedTypo>
        <ButtonGroup
          variant="contained"
          elevation={2}
          disabled={checked ? false : true}
        >
          <SharedBtn
            variant="contained"
            onClick={() => setValue(Math.max(value - 1, 0))}
          >
            -
          </SharedBtn>
          <InputBase
            value={value}
            sx={{ width: "50px", padding: "0px 10px" }}
          />
          <SharedBtn
            variant="contained"
            onClick={() => setValue(Math.min(value + 1, 100))}
          >
            +
          </SharedBtn>
        </ButtonGroup>
      </SharedBox>
    </SharedBox>
    )
}