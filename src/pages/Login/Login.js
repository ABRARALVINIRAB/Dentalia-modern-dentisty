import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    
    const { signInUsingGoogle } = useAuth();
    const handleRegistraion = (e) => {
        console.log('registration will added');
        e.preventDefault();
    }
    return (
        <div>
            <h1> please log in</h1>
            <form >
                <input type="email" name="" id="" placeholder="Give email" /> <br />
                <br />

                <input type="password" name="" id="" placeholder="password" />
                <br /><br />
                <input onClick={handleRegistraion} type="submit" value="Login" />
                <br /> <br />

            </form>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google sign in</button>
            <br /> <br />
            <Link to="registration">New user ?</Link>
        </div>
    );
};

export default Login;