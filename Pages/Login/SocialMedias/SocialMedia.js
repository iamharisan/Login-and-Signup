import React from "react"
import './SocialMedia.css'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

import { Button } from '@mui/material';

const SocialMedia = (props) => {


    return (
        <div className="social-medias">
            <Button variant="outlined" className="_btn" ><FaGoogle style={{ color: 'red', marginTop: 2, padding: 5, fontSize: 18 }} /></Button>
            <Button variant="outlined" className="_btn" ><FaFacebookF style={{ color: '#1877F2', marginTop: 2, padding: 5, fontSize: 18 }} /></Button>
            <Button variant="outlined" className="_btn" ><BsTwitter style={{ color: '#1C9CEA', marginTop: 2, padding: 5, fontSize: 18 }} /></Button>
        </div>
    )
}
export default SocialMedia;