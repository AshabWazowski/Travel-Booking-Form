import React from "react";
import {
  ButtonGroup,
  Checkbox,
  InputBase,
  MenuItem,
  useMediaQuery,
} from "@mui/material";

import {
  SharedBox,
  SharedBtn,
  SharedSelect,
  SharedTypo,
} from "../../Assets/SharedAssets";



export const HotelControl = ({ values, handleChange }) => {
  return (
    <SharedBox justifyContent="space-between" width="100%" padding="1rem 3%">
      <SharedBox>
        <Checkbox value={values.hotel} onChange={handleChange} name="hotel" />{" "}
        <SharedTypo variant="subtitle">Hotel</SharedTypo>
      </SharedBox>

      <SharedBox flexDirection="column">
        <SharedTypo variant="subtitle" gutterBottom>
          No. of Days
        </SharedTypo>
        <ButtonGroup
          variant="contained"
          elevation={2}
          disabled={values.hotel ? false : true}
        >
          <SharedBtn
            variant="contained"
            onClick={() =>
              handleChange({
                target: {
                  name: "hotelDays",
                  value: Math.max(values.hotelDays - 1, 0),
                },
              })
            }
          >
            -
          </SharedBtn>
          <InputBase
            value={!values.hotel ? (values.hotelDays = 0) : values.hotelDays}
            name="hotelDays"
            onChange={handleChange}
            sx={{ width: "50px", padding: "0px 10px" }}
          />
          <SharedBtn
            variant="contained"
            onClick={() =>
              handleChange({
                target: {
                  name: "hotelDays",
                  value: Math.min(values.hotelDays + 1, 100),
                },
              })
            }
          >
            +
          </SharedBtn>
        </ButtonGroup>
      </SharedBox>
    </SharedBox>
  );
};

export const CarControl = ({
  values,
  errors,
  handleBlur,
  touched,
  handleChange,
}) => {
  const desktop = useMediaQuery("(min-width:1000px)");

  return (
    <SharedBox
      flexDirection={!desktop ? "column" : "row"}
      justifyContent="space-between"
      width="100%"
      padding="1rem 3%"
    >
      <SharedBox>
        <Checkbox name="car" value={values.car} onChange={handleChange} />{" "}
        <SharedTypo variant="subtitle">Rent a Car</SharedTypo>
      </SharedBox>

      <SharedBox display="block">
        <SharedSelect
          disabled={values.car ? false : true}
          label="Select Car Type"
          value={!values.car ? (values.carType = "") : values.carType}
          name="carType"
          handleChange={handleChange}
          variant="outlined"
          width="150px"
        >
          <MenuItem value="">
            <SharedTypo variant="body2">None</SharedTypo>
          </MenuItem>
          <MenuItem value="sedan">
            <SharedTypo variant="body2">Sedan</SharedTypo>
          </MenuItem>
          <MenuItem value="SUV">
            <SharedTypo variant="body2">SUV</SharedTypo>
          </MenuItem>
          <MenuItem value="motorHome">
            <SharedTypo variant="body2">Motor-Home</SharedTypo>
          </MenuItem>
        </SharedSelect>
      </SharedBox>

      <SharedBox flexDirection="column">
        <SharedTypo variant="subtitle" gutterBottom>
          No. of Days
        </SharedTypo>
        <ButtonGroup
          variant="contained"
          elevation={2}
          disabled={values.car ? false : true}
        >
          <SharedBtn
            variant="contained"
            onClick={() =>
              handleChange({
                target: {
                  name: "carDays",
                  value: Math.max(values.carDays - 1, 0),
                },
              })
            }
          >
            -
          </SharedBtn>
          <InputBase
            value={!values.car ? (values.carDays = 0) : values.carDays}
            name="carDays"
            onChange={handleChange}
            sx={{ width: "50px", padding: "0px 10px" }}
          />
          <SharedBtn
            variant="contained"
            onClick={() =>
              handleChange({
                target: {
                  name: "carDays",
                  value: Math.min(values.carDays + 1, 100),
                },
              })
            }
          >
            +
          </SharedBtn>
        </ButtonGroup>
      </SharedBox>
    </SharedBox>
  );
};
