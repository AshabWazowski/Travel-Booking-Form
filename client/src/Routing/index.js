import React, { useEffect, useState } from "react";
import { PostFormData } from "../API_Handling/ApiHandling";
import MainForm from "../components/Form/Form";
import Table from "../components/Table/Table";
import Instruction from "../BookingDetails/Instruction/Instruction";
import TravelForm from "../BookingDetails/TravelForm/TravelForm";
import ExpenseForm from "../BookingDetails/ExpensesForm/ExpenseForm";
import FormButtons from "../BookingDetails/FormButtons/FormButtons";
import { useParams } from "react-router-dom";
import axios from "axios";
import{Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";


const validationSchema = yup.object().shape({
      title:yup.string().required("required"),
      fromAirport: yup.string("Enter Departure Airport").required("required"),
      departureDate: yup.date().required("required"),
      returnDate: yup.date().required("required"),
      bookingId:yup.number().required(),
})

const initialValues = {
  bookingId:null,
  title:"",
  radio:"",
  fromAirport:"",
  toAirport:"",
  departureDate:null,
  returnDate:null,
  personCount:0,
  flightClass:"",
  hotel:false,
  car:false,
  hotelDays:0,
  carType:"",
  carDays:0,
  status:"",
}


const navigate = useNavigate();


export const HomePage = () => {
  return (
    <div>
      <MainForm />
      <Table />
    </div>
  );
};

export const BookingHomePage = ({ row }) => {

  const API_KEY = process.env.REACT_APP_BASEURL;
  
  const handleSubmit = async(values) => {
    await PostFormData(values);
    navigate('/');
  }

  return (
    <div>
      <Instruction />
    <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
    >
    {(
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
    ) => (
<form>
<TravelForm />
<ExpenseForm />
<FormButtons />

</form>
)}

{/* {row ? <TravelForm dpt={row.dpt} returnDate={row.return}/> : <TravelForm/>} */}
    </Formik>
    </div>
  );
};

export const EditBookingPage = () => {
  const API_KEY = process.env.REACT_APP_BASEURL;

  const [row, setRow] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRow();
  }, []);

  const getRow = async () => {
    try {
      const res = await axios.get(`${API_KEY}/tableData/row/${id}`);
      setRow(res.data);
    } catch (error) {
      console.log("Ashab Error is: ", error.message);
    }
  };
  console.log('Row Data' ,row)

  return <BookingHomePage row={row[0]}/>;
};
