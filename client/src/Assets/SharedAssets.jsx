import {
  Box,
  Button,
  Typography,
  Paper,
  TextField,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";




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
  handleClick,
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

export const SharedBtn = ({ type, children, variant, disabled, onClick, color }) => {
  return (
    <Button
      variant={variant || "outlined"}
      disabled={disabled}
      color={color || "primary"}
      onClick={onClick}
      type={type}
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
      gutterBottom={gutterBottom}
      sx={{ padding: { padding }, cursor: cursor }}
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
        margin: margin,
      }}
    >
      {children}
    </Paper>
  );
};

export const SharedTextField = ({
  variant,
  type,
  label,
  placeholder,
  value,
  onChange,
  fullWidth,
  name,
  errors,
  helperText,
  handleChange,
  handleBlur,
}) => {
  return (
    <TextField
    variant={variant}
      type={type}
      label={label}
      placeholder={placeholder || ""}
      value={value || ""}
      onChange={handleChange}
      fullWidth={fullWidth}
      error={errors}
      helperText={helperText}
      name={name}
      onBlur={handleBlur}
    />
  );
};

export const SharedSelect = ({
  value,
  children,
  width,
  handleSelect,
  variant,
  fullWidth,
  label,
  handleChange,
  name,
  disabled
}) => {
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>
      <Select
        disabled = {disabled}
        variant={variant}
        name={name}
        onChange={handleChange}
        value={value}
        sx={{ width: width }}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export const SharedDatePicker = ({
  value,
  handleChange,
  label,
  handleBlur,
  helperText,
  error,
  name,
  disabled,
  disablePast,
  renderInput,
  format,
  minDate
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      minDate={minDate}
      format={format}
      disablePast={disablePast}
      disabled={disabled}
        name={name}
        onBlur={handleBlur}
        value={value}
        onChange={handleChange}
        label={label}
        error={error}
        helperText={helperText}
        slotProps={renderInput}
      />
    </LocalizationProvider>
  );
};
