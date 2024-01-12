import React from "react";
import {
  SharedBox,
  SharedDatePicker,
  SharedPaper,
  SharedTextField,
} from "../../Assets/SharedAssets";

const FlightDetails = ({ dpt, returnDate }) => {
  return (
    <>
      <SharedPaper elevation={3} width="100%" overflow="hidden">
        <SharedBox display="block" width="100%" flexDirection="column">
          <SharedBox justifyContent="space-between">
            <SharedBox flexDirection="column" alignItems="start" gap="0.8rem">
              <label>From Airport</label>
              <SharedTextField
                type="text"
                variant="outlined"
                label="From Airport"
              />
            </SharedBox>

            <SharedBox flexDirection="column" alignItems="start" gap="0.8rem">
              <label>To Airport</label>
              <SharedTextField
                type="text"
                variant="outlined"
                label="To Airport"
              />
            </SharedBox>
          </SharedBox>

          <SharedBox justifyContent="space-between">
            <SharedBox flexDirection="column" alignItems="start" gap="0.8rem">
              <label>Departure Date</label>
              <SharedDatePicker label="Departure Date" />
            </SharedBox>

            <SharedBox flexDirection="column" alignItems="start" gap="0.8rem">
              <label>Return Date</label>
          
              <SharedDatePicker label="Return Date" />
            </SharedBox>
          </SharedBox>

          <SharedBox justifyContent="space-between">
            <SharedBox flexDirection="column" alignItems="start" gap="0.8rem">
              <label>No. of People</label>
              <SharedTextField
                type="number"
                variant="outlined"
                label="From Airport"
              />
            </SharedBox>

            <SharedBox flexDirection="column" alignItems="start" gap="0.8rem">
              <label>Select Class</label>
              <SharedTextField variant="outlined" label="To Airport" />
            </SharedBox>
          </SharedBox>
        </SharedBox>
      </SharedPaper>
    </>
  );
};

export default FlightDetails;
