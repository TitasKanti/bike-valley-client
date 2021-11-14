import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        fetch('http://localhost:5000/reviews', {
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
                <input {...register("name", { required: true, maxLength: 20 })} placeholder={user.displayName} />
                <textarea {...register("review")} placeholder="place your review" />
                <input type="number" {...register("rating")} placeholder="rating" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;