import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { SharedBox } from "../../Assets/SharedAssets";

const RadioCheck = () => {
  const [value, setValue] = useState("One-Way");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  console.log('Radio', value)
  return (
    <SharedBox justifyContent="flex-start">
      <FormControl>
        <FormLabel>Trip Category</FormLabel>
        <RadioGroup row value={value} onChange={handleChange}>
          <FormControlLabel
            value="Oneway"
            control={<Radio />}
            label="One-Way"
          />
          <FormControlLabel
            value="round"
            control={<Radio />}
            label="Round-Trip"
          />
        </RadioGroup>
      </FormControl>
    </SharedBox>
  );
};

export default RadioCheck;
