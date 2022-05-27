import React from "react";
import './Rightside.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import SocialMedia from "../SocialMedias/SocialMedia";
import InputFields from "../InputFields/InputFields";
import Radio from '@mui/material/Radio';    
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import { hover } from "@testing-library/user-event/dist/hover";



const theme = createTheme({

    palette: {
        primary:
        {
            main: '#9e9e9e',

        },
        secondary:
        {
            main:'#2065d1'
        }

    }
  

});
const Rightside = (props) => {

   

    return (
        <ThemeProvider theme={theme}>
            <div className="rightside" >
                <h2 className="minimal-text" style={{ fontSize: 23 }}>Sign in to Minimal</h2>
                <p style={{ color: "#637381", textAlign: "start", fontSize: 15, margin: 0, lineHeight: 3 }}>Enter your details below.</p>
                <SocialMedia />
                <div className="line">
                    <p className="or">OR</p>
                </div>
                <InputFields/>
                <div className="authen">
                <FormControlLabel value="Remember me" control={<Radio style={{color:"blue"}} />} label="Remember me" />
                <a href="#" style={{textDecoration:'none',color: '#1877F2',fontWeight:"bold"}}>Forgot password?</a>
                </div>
                <button className="button"><span className="text">Login</span></button>

            </div>
            
        </ThemeProvider>
       
    )
}
export default Rightside;