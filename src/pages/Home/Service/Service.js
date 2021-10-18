import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    return (
        <div className="service pb-3">

            <h1>{name}</h1>
            <img src={img} alt="" />
            
            <p>Description: {description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-danger">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;