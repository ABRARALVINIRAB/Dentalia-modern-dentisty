import React from 'react';
import image1 from "../../../images/experts/dentis1.jpg"
import image2 from "../../../images/experts/dentist2.jpg"
import image3 from "../../../images/experts/dentis.3.jpg"
import image4 from "../../../images/experts/dentist4.jpg"

import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        {
            img: image1,
            category: 'Dentist',
            name: 'Dr. Robartis',
            expertize: 'DMD,FACE'
        },
        {
            img: image2,
            category: 'Dentist',
            name: ' Dr. Linda Davis',
            expertize: 'CDT'
        },
        {
            img: image3,
            category: 'Dentist',
            name: 'Zakaria Smith',
            expertize: 'FACDS,DDS'
        },
        {
            img: image4,
            category: 'Dentist',
            name: 'Maria',
            expertize: 'FADG,DMD'
        },
    ]
    return (
        <div className="container" id="experts">

            <h2 className="mb-5">Award Winning Dentists</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;