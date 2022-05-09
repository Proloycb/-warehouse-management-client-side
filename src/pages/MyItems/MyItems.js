import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const email = user.email;

        const url = `http://localhost:5000/inventory?email=${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data));
    }, [user])
    return (
        <div>
            <h2>Your Items: {items.length}</h2>
            {/* <div className="card">
                <img style={{ width: '22rem' }} src={image} className="card-img-top mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className='card-title'>Id: {_id}</h6>
                    <p className="card-text mb-1">Price: ${price}</p>
                    <p className="card-text mb-1">Quantity:<small> {quantity}</small></p>
                    <p className="card-text mb-1">Supplier:<small> {supplier}</small></p>
                    <p className="card-text"><small className="text-muted">{description}</small></p>
                </div>
                </div> */}
        </div>
    );
};

export default MyItems;