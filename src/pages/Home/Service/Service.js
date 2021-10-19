import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    return (
        <div className="container" className="service pb-3">

            <h1>{name}</h1>
            <img className="img-fluid" src={img} alt="" />

            <p>Description: {description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-danger">Appoint {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;