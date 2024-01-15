import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { SharedBox } from "../../Assets/SharedAssets";

const RadioCheck = ({values, handleChange}) => {

  return (
    <SharedBox justifyContent="flex-start">
      <FormControl>
        <FormLabel>Trip Category</FormLabel>
        <RadioGroup name="radioCheck" row value={values.radioCheck} onChange={handleChange}>
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
