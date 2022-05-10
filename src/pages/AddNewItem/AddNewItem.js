import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
    const {register, handleSubmit} = useForm();
    const onSubmit = (data, event) => {
        console.log(data);
        const url = 'https://young-basin-02785.herokuapp.com/inventory';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        event.target.reset();
    }
    return (
        <div style={{height: '100vh'}} className='w-50 mx-auto mt-5'>
            <h2 className='text-primary text-center'>Add New Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", {required: true, maxLength: 20})} />
                <input className='mb-2' value={user.email} {...register("email")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} ></textarea>
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo Url' {...register("image")} />
                <input className='btn btn-primary' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddNewItem;