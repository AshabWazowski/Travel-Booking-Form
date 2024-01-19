import React, { Fragment, useState } from "react";
import {
  SharedBox,
  SharedDatePicker,
  SharedPaper,
  SharedSelect,
  SharedTextField,
  SharedTypo,
} from "../../Assets/SharedAssets";
import dateformat from 'dateformat'
import { MenuItem } from "@mui/material";

const FlightDetails = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue
}) => {

  const [dpt , setDpt] = useState(null)


  return (
    <Fragment>
      <SharedPaper elevation={3} width="100%" overflow="hidden">
        <SharedBox display="block" width="100%" flexDirection="column">
          <SharedBox justifyContent="space-between">
            <SharedBox flexDirection="column" alignItems="start" gap="0.8rem">
              <label>From Airport</label>
              <SharedTextField
                type="text"
                variant="outlined"
                label="From Airport"
                name="fromAirport"
                value={values.fromAirport}
                handleBlur={handleBlur}
                handleChange={handleChange}
                errors={
                  Boolean(touched.fromAirport) && Boolean(errors.fromAirport)
                }
                helperText={touched.fromAirport && errors.fromAirport}
              />
            </SharedBox>

            <SharedBox flexDirection="column" alignItems="start" gap="0.8rem">
              <label>To Airport</label>
              <SharedTextField
                type="text"
                variant="outlined"
                label="To Airport"
                name="toAirport"
                value={values.toAirport}
                handleChange={handleChange}
              />
            </SharedBox>
          </SharedBox>

          <SharedBox justifyContent="space-between">
            <SharedBox flexDirection="column" alignItems="start" gap="0.8rem">
              <label>Departure Date</label>
              <SharedDatePicker
              format="DD-MM-YYYY"
                disablePast
                name="dptDate"
                value={values.dptDate}
                handleChange={(value)=>(setFieldValue("dptDate", dateformat(value, "mediumDate")), setDpt(value))}
                handleBlur={handleBlur}
                label="Departure Date"
                renderInput = {{textField:{variant:'filled'}}}
                errors={Boolean(touched.dptDate) && Boolean(errors.dptDate)}
                helperText={touched.dptDate && errors.dptDate}
              />
            </SharedBox>

            <SharedBox flexDirection="column" alignItems="start" gap="0.8rem">
              <label>Return Date</label>
              <SharedDatePicker 
              minDate={dpt}
              disablePast
              disabled={values.radioCheck === "Oneway" ? true : false}
              label="Return Date"               
              name="returnDate"
              value={values.returnDate}
              handleChange={(value)=>setFieldValue("returnDate", dateformat(value, "mediumDate"))}
              handleBlur={handleBlur}
              errors={Boolean(touched.returnDate) && Boolean(errors.returnDate)}
              helperText={touched.returnDate && errors.returnDate} 
              renderInput = {{textField:{variant:'filled'}}}
              />
            </SharedBox>
          </SharedBox>

          <SharedBox justifyContent="space-between">
            <SharedBox flexDirection="column" alignItems="start" gap="0.8rem">
              <label>No. of People</label>
              <SharedTextField
                type="number"
                variant="outlined"
                label="Number of People"
                name="peopleCount"
                value={values.peopleCount}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={Boolean(touched.peopleCount) && Boolean(errors.peopleCount)}
                helperText={touched.peopleCount && errors.peopleCount} 
              />
            </SharedBox>

            <SharedBox flexDirection="column" alignItems="start" gap="0.8rem">
              <label>Select Class</label>
              <SharedSelect 
              width='150px'
              label='Select Class'
              value={values.flightClass}
              name="flightClass"
              handleChange={handleChange}
              >
              <MenuItem value=''><SharedTypo variant='body2'>None</SharedTypo></MenuItem>
              <MenuItem value='Business'><SharedTypo variant='body2'>Business</SharedTypo></MenuItem>
              <MenuItem value='first'><SharedTypo variant='body2'>First Class</SharedTypo></MenuItem>
              <MenuItem value='economy'><SharedTypo variant='body2'>Economy</SharedTypo></MenuItem>
              </SharedSelect>
            </SharedBox>
          </SharedBox>
        </SharedBox>
      </SharedPaper>
    </Fragment>
  );
};

export default FlightDetails;
