import React from 'react';
import useInventories from '../../hooks/useInventories';

const MyItem = ({item}) => {
    const [inventories, setInventories] = useInventories();
    const { _id, name, image, description, price, quantity } = item;

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure to delete");
        if(proceed){
            const url = `https://young-basin-02785.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                const remaining = inventories.filter(inventory => inventory._id !== id);
                setInventories(remaining);
            })
        }
    }

    return (
        <div>
            <div style={{width: '19rem'}} className="card mb-2 me-1 text-center">
                <img style={{ width: '18rem' }} src={image} className="card-img-top mx-auto" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text mb-1">Price: ${price}</p>
                    <p className="card-text mb-1">Quantity:<small> {quantity}</small></p>
                    <p className="card-text"><small className="text-muted">{description}</small></p>
                    <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
                </div>
                </div> 
        </div>
    );
};

export default MyItem;