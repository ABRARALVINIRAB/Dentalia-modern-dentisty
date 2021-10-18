import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <h1>Please Register</h1>
            <input type="text" name="" id="" placeholder="name" />
            <br /><br />
            <input type="email" name="" id="" placeholder="Give email" /> <br />
            <br />

            <input type="password" name="" id="" placeholder ="password" />
            <br /><br />
            <input type="submit" value="Register" />
            <br />
            <br />
            <Link to="/login">Already Register?</Link>
        </div>
    );
};

export default Registration;