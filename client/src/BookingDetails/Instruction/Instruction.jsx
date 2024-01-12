import React, { useEffect, useState } from "react";
import axios from "axios";
import { SharedBox, SharedPaper, SharedTypo } from "../../Assets/SharedAssets";
// import { instructions } from "../../Assets/TravelData";





const Instruction = () => {
  const [info, setInfo] = useState([]);
  const API_KEY = process.env.REACT_APP_BASEURL;


 console.log(API_KEY)

  const getInfo = async () => {
    try {
      const res = await axios.get(`${API_KEY}/booking/v1/info`);
      setInfo(res.data);
    } catch (error) {
      console.log("Ashab Error is: ", error.message);
    }
  };

  useEffect(() => {
    getInfo();
},[]);

  

  return (
    <SharedBox>
      <SharedPaper
        elevation={3}
        width="100%"
        overflow="hidden"
        bgcolors="#408aaa4d"
      >
        <SharedBox justifyContent="flex-start" flexDirection="column">
          <SharedTypo
            variant="h5"
            color="inherit"
            fontWeight="bold"
            gutterBottom
          >
            INSTRUCTIONS
          </SharedTypo>
          <SharedBox>
            <ul>
              {info.map((item) => {
                return (
                  <li key={item.id}>
                    <SharedTypo variant="body2" gutterBottom>
                      {item.title}
                    </SharedTypo>
                  </li>
                );
              })}
            </ul>
          </SharedBox>
        </SharedBox>
      </SharedPaper>
    </SharedBox>
  );
};

export default Instruction;
