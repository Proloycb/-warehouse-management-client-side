import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../../hooks/useInventoryDetail';

const InventoryDetail = () => {
    const {id} = useParams();
    const [inventory] = useInventoryDetail(id);
    const {image, name, price, quantity, supplier, description} = inventory;

    return (
        <div style={{width: '32rem'}} className='mx-auto mt-3'>
            <div className="card">
                <img style={{width: '22rem'}} src={image} className="card-img-top mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text mb-1">Price: ${price}</p>
                    <p className="card-text mb-1">Quantity:<small> {quantity}</small></p>
                    <p className="card-text mb-1">Supplier:<small> {supplier}</small></p>
                    <p className="card-text"><small className="text-muted">{description}</small></p>
                </div>
                {/* <Button onClick={() => handleUpdate(_id)} variant='success'>Update</Button> */}
            </div>
        </div>
    );
};

export default InventoryDetail;