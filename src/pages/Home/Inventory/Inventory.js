import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Inventory = ({ inventory }) => {
    const { _id, name, image, description, price, quantity, supplier } = inventory;
    return (
        <div className="card-group col">

            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text mb-1">Price: ${price}</p>
                    <p className="card-text mb-1">Quantity:<small> {quantity}</small></p>
                    <p className="card-text mb-1">Supplier:<small> {supplier}</small></p>
                    <p className="card-text"><small className="text-muted">{description}</small></p>
                </div>
                <Button as={Link} to={`/inventory/${_id}`} variant='success'>Update</Button>
            </div>
        </div>
    );
};

export default Inventory;