import axios from "axios";



const API_KEY = process.env.REACT_APP_BASEURL;


// SENDING THE FORM DATA TO BACKEND
export const SaveBookingData = async (values) => {
  console.log("Saved" , values);
 
  try{
          
  }catch(err){
    console.log(err.message);
  }
}

export const SubmitBookingData = (values) =>{
  
} 