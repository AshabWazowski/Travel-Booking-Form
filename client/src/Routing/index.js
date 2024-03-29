import React, { useEffect, useState } from "react";
import {SaveBookingData, SubmitBookingData } from "../API_Handling/ApiHandling";
import MainForm from "../components/Form/Form";
import Table from "../components/Table/Table";
import Instruction from "../BookingDetails/Instruction/Instruction";
import TravelForm from "../BookingDetails/TravelForm/TravelForm";
import ExpenseForm from "../BookingDetails/ExpensesForm/ExpenseForm";
import FormButtons from "../BookingDetails/FormButtons/FormButtons";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  title: yup.string().required("required"),
  fromAirport: yup.string("Enter Departure Airport").required("required"),
  // departureDate: yup.date().required("required"),
  // returnDate: yup.date().required("required"),
  peopleCount: yup.number().required("required"),
  hotelDays: yup.number().required("required"),
});


export const HomePage = () => {
  return (
    <div>
      <MainForm />
      <Table />
    </div>
  );
};


export const BookingHomePage = () => {
  // const [submitCheck, setSubmitCheck] = useState('');
  const submitCheck = useSelector((state) => state.authTravel.submitBtn)

  
  const initialValues = {
    bookingId:'',
    userId:"",
    title: "",
    fromAirport: "",
    toAirport: "",
    dptDate: null,
    returnDate: null,
    peopleCount:null,
    flightClass: "",
    hotel: false,
    hotelDays: 0,
    car: false,
    carType: "",
    carDays: 0,
    radioCheck: "Oneway",
    status:'',
  };
  const handleFormSubmit = async (values) => {
    if(submitCheck==="save"){
      await SaveBookingData(values);
    }
    await SubmitBookingData(values)
  };

  return (
    <div>
      <Instruction />
      <Formik
        initialValues={initialValues}
        validationSchema={submitCheck === "submit" ? validationSchema : ''}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          touched,
          errors,
          handleSubmit,
          handleBlur,
          handleChange,
          setFieldValue
        }) => (
          <form onSubmit={handleSubmit}>
            <TravelForm
              values={values}
              touched={touched}
              errors={errors}
              handleBlur={handleBlur}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
            />
            
            <ExpenseForm 
            values={values}
            touched={touched}
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange} 
            />


            <FormButtons/>
          </form>
        )}
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

  return <BookingHomePage row={row[0]} />;
};
