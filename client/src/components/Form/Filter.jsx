import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormControl,
  // useMediaQuery
} from "@mui/material";
import React, { useState } from "react";
import { SharedBox, SharedBtn, SharedPaper } from "../../Assets/SharedAssets";

const Filter = () => {
  const [status, setStatus] = useState("");
  // const desktop = useMediaQuery("min-width(1000px)");


  return (
    <SharedBox>
      <SharedPaper elevation={3} width="100%">
        <SharedBox flexDirection='column' gap="1rem" width="100%">
      

          <SharedBox flexDirection='column' justifyContent="space-between" gap="1.5rem">
            <InputLabel>Select Departure Date</InputLabel>
            <TextField type="date" />

            <InputLabel>Select Return Date</InputLabel>
            <TextField type="date" />
          </SharedBox>
       
          
          <FormControl fullWidth>
            <InputLabel id="Status">Select Status</InputLabel>
            <Select
             
              value={status}
              label="Select Status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Booked">Booked</MenuItem>
            </Select>
          </FormControl>
        </SharedBox>
        <SharedBox>
            <SharedBtn variant='contained' >
             Show Result
            </SharedBtn>
        </SharedBox>
      </SharedPaper>
    </SharedBox>
  );
};

export default Filter;
