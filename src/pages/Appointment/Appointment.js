import React from 'react';
import { useForm } from 'react-hook-form';

const Appointment = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1>Make Appointment</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="name" {...register("firstName")} />
                <br /> <br />
                <input placeholder="Phone number" {...register("firstName")} />
                <br /> <br />
                <input placeholder="Doctor name" {...register("firstName")} />
                <br /> <br />
                <input placeholder="Date" {...register("firstName")} />
                <br /> <br />
                <input placeholder="Time" {...register("firstName")} />
                <br /> <br />
                <select {...register("doctor")}>
                    <option value="female">Dr.Alfa</option>
                    <option value="male">Dr. Bita</option>
                    <option value="other">Dr .Loba</option>
                </select>
                <br /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Appointment;
