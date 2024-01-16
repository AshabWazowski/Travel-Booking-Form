import axios from "axios";



const API_KEY = process.env.REACT_APP_BASEURL;


// SENDING THE FORM DATA TO BACKEND
export const PostFormData = async (values) => {
    
    try{
        return await axios.post(`${API_KEY}/data/:id/submit`, values)
      }catch(err){
        console.log(err.message);
      }

}