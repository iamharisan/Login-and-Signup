import React, { useState } from "react";
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { FaEye } from "react-icons/fa";
import {FaEyeSlash} from "react-icons/fa";

// import { borders } from '@mui/system';





const InputFields = () => {

    


    const [name, setName] = useState("hi")
    const changeHandler = (events) => {
        setName(events.target.value)

    }

    const [pass, setPass] = useState("hi")
    const passwordHandler = (events) => {
        setPass(events.target.value)
    }

    const[state,setState]=useState(true)
    const togglebtn = () =>
    {
       
        setState(!state)
        
    }
        console.log(state)
    const fieldstyle = {
        marginTop: 20
    }

    return (
        <div>
            <TextField onChange={changeHandler} style={fieldstyle}

                label="Email address"
                variant="outlined"
                fullWidth
                size="normal"
                error={name === ""}
                helperText={name === "" ? "Email is required" : ""}
            />

            <TextField onChange={passwordHandler}
                style={fieldstyle}
                type={state ? "password" : "text"}
                sx={{ borderRadius: 16 }}
                label="Password"
                variant="outlined"
                fullWidth
                size="Normal"
                error={pass === ""}
                helperText={pass === "" ? "Password is required" : ""}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <button onClick={togglebtn} style={{padding:10,border:0, backgroundColor:'#f9fafb',fontSize:20}}>
                            { state ? <FaEyeSlash style={{color:'#637381'}}/>: <FaEye style={{color:'#637381'}}/> }
                            </button>
                            
                        </InputAdornment>
                    )
                }}
            />

        </div>

    )
}
export default InputFields;