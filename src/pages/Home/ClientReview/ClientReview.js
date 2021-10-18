import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic from "../../../images/client/reviewcover.jpg"
import smile1 from "../../../images/client/smiling1.jpg"
import smile2 from "../../../images/client/smiling2.jpg"
import smile3 from "../../../images/client/smile3.jpg"
import './Client.css'


const ClientReview = () => {
    return (
        <>
            <div class="container">
                <h1>Client Reviews</h1>

                <div class="row">
                    <div class="col-6">
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block img-size"
                                    src={smile3}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h5 className='texts'>HAPPY HEALTHY SMILE</h5>
                                    <p className='texts'>
                                        Today was the first time we visited the dentist. Everyone was very kind and helpful and the office was just beautiful. 						</p>
                                    <p className='texts'>Abrar</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block img-size img-fluid"
                                    src={smile2}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h5 >Dr Orion! is the best</h5>
                                    <p >							I am so happy I chose Dentalia. Both of my kids enjoy their checkups and have healthy smiles. I can't thank you enough!</p>
                                    <p >Abrar</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block img-size img-fluid"
                                    src={smile1}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5 className='texts'>A Wonderful experience</h5>
                                    <p className='texts'>
                                        My daughter is not afraid of the dentist anymore and her teeth are healthy and look absolutely beautiful!

                                    </p>
                                    <p className='texts'>Abrar</p>


                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div class="col-6 mb-5">
                        <img className="image img-size img-fluid" src={pic} alt="" />

                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientReview;