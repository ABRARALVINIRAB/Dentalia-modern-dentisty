
import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../images/banner/banner1.jpg"
import banner2 from "../../../images/banner/banner2.jpg"
import banner3 from "../../../images/banner/banner3.jpg"
import "./Banner.css"

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text'>Oral Health Consultation</h3>
                        <h1 className='text'>An Enjoyable Experience</h1>
                        <p >We will conduct a complete dental examination and create an individuale treatment for you</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text'>RESTORATIVE DENTISTRY</h3>
                        <h1 className='text'>Everlasting Smile</h1>
                        <p>We Work toward creating  youthful smiles for patients whose natural teet require replacement </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text'>Brighten Your Smile</h1>
                        <p>Advance Cosmetic Dental Services to restore your confidence  with a healthy and beautiful smile </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;