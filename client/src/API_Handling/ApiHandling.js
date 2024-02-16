import axios from "axios";
import { v4 as uuid } from "uuid";

const API_KEY = process.env.REACT_APP_BASEURL;



// SENDING THE FORM DATA TO BACKEND
export const SaveBookingData = async (values) => {
  if (values.bookingId === "") values.bookingId = uuid();
  try {
    const saved = await axios.post(`${API_KEY}/data/saved`, values);
    return saved;
  } catch (error) {
    console.log("Saved API", error.message);
  }
};

export const SubmitBookingData = async (values) => {
  if (values.bookingId === "") values.bookingId = uuid();
  try {
    const booked = await axios.post(`${API_KEY}/data/booked`, values);
    return booked;
  } catch (error) {
    console.log("Saved API", error.message);
  }
};
