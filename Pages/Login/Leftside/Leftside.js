import React from "react";
import './Leftside.css';
import logo from './Assests/illustration_login.png'
import { width } from "@mui/system";
const Leftside = (props) => {

    return (
        <div className="left-side">
        <h1 style={{margin:35,textAlign:'start',color:'#212b36'}}>Hi,Wecome Back</h1>
        <div>
            <img src={logo} className="left-side-img"></img>
        </div>
    </div>
    )
}
export default Leftside;