import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';


const Booking = () => {
    const { serviceId } = useParams();
    ;
    const { services } = useServices();
    console.log(services);
    const matchingServices = services.find((service) => Number(service.id) === Number(serviceId));
    console.log(matchingServices);
    return (
        <div>

            <h1>{matchingServices?.name}</h1>
            <img src={matchingServices?.img} alt="" />
            <h1>{matchingServices?.description}</h1>
            <Link to="/services"><Button className="btn btn-danger" >Go Back All services</Button></Link>
        </div>
    );
};

export default Booking;
