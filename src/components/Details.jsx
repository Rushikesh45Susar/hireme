import React from 'react'
import { useLocation } from 'react-router';

const Details = () =>{
    const locations = useLocation();

    return(
        <>
            <h4>This are job details</h4>
            <h3>{locations.state.detail}</h3>
        </>
    )
}

export default Details ;
