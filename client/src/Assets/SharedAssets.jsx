import { Box, Button, Typography, Paper, TextField, Select, FormControl, InputLabel } from "@mui/material";
import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'

export const SharedBox = ({
  children,
  display,
  justifyContent,
  alignItems,
  padding,
  border,
  borderRadius,
  height,
  flexDirection,
  gap,
  handleClick
}) => {
  return (
    <Box
      display={display || "flex"}
      justifyContent={justifyContent || "center"}
      alignItems={alignItems || "center"}
      padding={padding || "1rem 6%"}
      border={border || "none"}
      borderRadius={borderRadius || "5px"}
      height={height || ""}
      flexDirection={flexDirection}
      gap={gap}
      onClick={handleClick}
    >
      {children}
    </Box>
  );
};

export const SharedBtn = ({ children, variant, disabled, onClick, color }) => {
  return (
    <Button
      variant={variant || "outlined"}
      disabled={disabled}
      color={color || "primary"}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export const SharedTypo = ({
  children,
  variant,
  color,
  fontWeight,
  fontFamily,
  padding,
  gutterBottom,
  cursor,
}) => {
  return (
    <Typography
      variant={variant || "h5"}
      color={color}
      fontWeight={fontWeight}
      fontFamily={fontFamily || "Montserrat"}
      gutterBottom= {gutterBottom}
      sx={{ padding: { padding } , cursor:cursor}}
    >
      {children}
    </Typography>
  );
};

export const SharedPaper = ({
  children,
  elevation,
  variant,
  width,
  height,
  overflow,
  bgcolors,
  padding,
  margin,
}) => {
  return (
    <Paper
      elevation={elevation}
      variant={variant}
      sx={{
        width: { width },
        height: { height },
        overflow: { overflow },
        backgroundColor: bgcolors,
        padding: padding,
        margin:margin
      }}
    >
      {children}
    </Paper>
  );
};

export const SharedTextField = ({type, label, placeholder , value, onChange, fullWidth}) =>{
 return(
  <TextField
  type={type}
  label={label}
  placeholder={placeholder || ''}
  value={value || ''}
  onChange={onChange}
  fullWidth={fullWidth}
  />
 )
}

export const SharedSelect = ({value, children,width, handleSelect, variant, fullWidth, label})=>{
  return(
    <FormControl fullWidth={fullWidth}>
      <InputLabel>
      {label}
      </InputLabel>
    <Select
    variant={variant}
    onChange={handleSelect}
    value={value}
    sx={{width:width}}
    >
      {children}
    </Select>

    </FormControl>
  )
}

export const SharedDatePicker = ({value, handleChange, label}) =>{
  return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      value={value}
      onChange={handleChange}
      label={label}
      />
    </LocalizationProvider>
  )
}