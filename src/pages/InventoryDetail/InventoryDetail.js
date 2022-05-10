import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const InventoryDetail = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    const { _id, image, name, price, quantity, supplier, description } = inventory;
    const [isReload, setIsReload] = useState(true);

    useEffect(() => {
        fetch(`https://young-basin-02785.herokuapp.com/inventory/${id}`)
        .then(res => res.json())
        .then(data => setInventory(data))
    },[isReload])
    const handleQuantity = () => {
        const {quantity} = inventory;
        console.log(quantity)
        let newQuantity = parseInt(quantity);

        if (newQuantity > 0) {
            const updateQuantity = newQuantity - 1;
            
            const url = `https://young-basin-02785.herokuapp.com/updateQuantity/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({updateQuantity}),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsReload(!isReload)
                });
                
        }
        else{
            toast('product sold out')
        }
    }

    const handleQuantityForm = event => {
        event.preventDefault();
        const oldQuantity = parseInt(quantity);
        const newQuantity = parseInt(event.target.newQuantity.value);
        
        if(newQuantity >= 0) {
            const updateQuantity = oldQuantity + newQuantity;

            fetch(`https://young-basin-02785.herokuapp.com/updateQuantity/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({updateQuantity}),
            })
            .then(res => res.json())
            .then(data => {
                setIsReload(!isReload);
                event.target.reset();
            });
        }else {
            toast.error ("Negative/String Value Not Added")
        }
    }


    return (
        <div style={{ width: '32rem' }} className='mx-auto mt-3 container'>
            <div className="card">
                <img style={{ width: '22rem' }} src={image} className="card-img-top mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className='card-title'>Id: {_id}</h6>
                    <p className="card-text mb-1">Price: ${price}</p>
                    <p className="card-text mb-1">Quantity:<small> {quantity}</small></p>
                    <p className="card-text mb-1">Supplier:<small> {supplier}</small></p>
                    <p className="card-text"><small className="text-muted">{description}</small></p>
                </div>
                <Button onClick={handleQuantity} className='ms-2 w-50 mb-2'>{inventory.quantity === 0 ? "Sold Out" : "Delivered"}</Button>
                <form className='mb-2' onSubmit={handleQuantityForm}>
                    <input type="text" name='newQuantity' className='w-25 ms-2 me-2' />
                    <input type="submit" className='bg-success border-0 text-light' value="Add Quantity" />
                </form>
            </div>
            <Button as={Link} to='/manage' className='w-50 ms-auto mt-3'>Manage Inventories </Button>
        </div>
    );
};

export default InventoryDetail;