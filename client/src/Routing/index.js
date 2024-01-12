import React, { useEffect, useState } from "react";
import Form from "../components/Form/Form";
import Table from "../components/Table/Table";
import Instruction from "../BookingDetails/Instruction/Instruction";
import TravelForm from "../BookingDetails/TravelForm/TravelForm";
import ExpenseForm from "../BookingDetails/ExpensesForm/ExpenseForm";
import FormButtons from "../BookingDetails/FormButtons/FormButtons";
import { useParams } from "react-router-dom";
import axios from "axios";
import{Formik } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object.shape({
      title:yup.string().required("required"),
      fromAirport: yup.string("Enter Departure Airport").required("required"),
      departureDate: yup.date().required("required"),
      returnDate: yup.date().required("required"),

})




export const HomePage = () => {
  return (
    <div>
      <Form />
      <Table />
    </div>
  );
};

export const BookingHomePage = ({ row }) => {
  return (
    <div>
      <Instruction />
      {row ? <TravelForm dpt={row.dpt} returnDate={row.return}/> : <TravelForm/>}
      <ExpenseForm />
      <FormButtons />
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
