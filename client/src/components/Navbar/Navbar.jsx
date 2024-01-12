import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { SharedBtn, SharedTypo, SharedBox } from "../../Assets/SharedAssets";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
const navigate = useNavigate();

  const handleClick = ()=>{
    navigate('/');
  }
  return (
    <AppBar
      position="static"
      sx={{
        padding: "0rem 6%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SharedBox handleClick={handleClick}>
          <SharedTypo variant="h4" fontFamily="Genos" cursor="pointer">
            EJS Travels
          </SharedTypo>
        </SharedBox>
        <SharedBtn color="inherit" variant="text">
          <LoginIcon sx={{ paddingRight: "10px" }} />
          Login
        </SharedBtn>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
