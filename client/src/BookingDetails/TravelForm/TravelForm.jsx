import { Divider, IconButton, InputLabel, Tooltip } from "@mui/material";
import React from "react";
import { SharedBox, SharedTextField } from "../../Assets/SharedAssets";
import FlightDetails from "./FlightDetails";
import RadioCheck from "./RadioCheck";
import InfoIcon from "@mui/icons-material/Info";

const TravelForm = ({ values, errors, touched, handleBlur, handleChange }) => {
 
 
  return (

    <SharedBox display="block">
      <SharedBox
        padding="0"
        flexDirection="column"
        alignItems="start"
        gap="0.5rem"
      >
        <SharedBox padding="0" alignItems="start" flexDirection="row">
          <InputLabel sx={{ fontSize: "25px" }}>Title</InputLabel>
          <Tooltip title="Title must be within 100 Letters" placement="right">
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </SharedBox>
        <SharedTextField
          name="title"
          value={values.title}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errors={Boolean(touched.title) && Boolean(errors.title)}
          helperText={touched.title && errors.title}
          fullWidth
          label="Title"
        />

      </SharedBox>
      <RadioCheck values={values} handleChange={handleChange} />
      <Divider />
      <FlightDetails
        values={values}
        touched={touched}
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
    </SharedBox>
  );

}

export default TravelForm;
