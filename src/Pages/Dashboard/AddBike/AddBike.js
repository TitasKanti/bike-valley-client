import React from 'react';
import { useForm } from "react-hook-form";
import './AddBike.css';

const AddBike = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        fetch('https://morning-ocean-94210.herokuapp.com/bikes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Bike Name" />
                <textarea {...register("detail")} placeholder="Description" />
                <input type="number" {...register("model")} placeholder="model" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddBike;