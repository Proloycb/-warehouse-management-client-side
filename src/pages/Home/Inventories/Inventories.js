import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setInventories(data));
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center text-success mt-5'>Our Inventories</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {
                    inventories.slice(0,6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    />)
                }
            </div>
        </div>
    );
};

export default Inventories;