import React from "react";
import { SharedTypo } from "../../Assets/SharedAssets";

const Title = () => {
  return (
    <SharedTypo
      variant="h3"
      fontFamily="Montserrat"
      fontWeight="bold"
      gutterBottom
      padding='1rem 6%'
    >
      Travel Booking
    </SharedTypo>
  );
};

export default Title;
