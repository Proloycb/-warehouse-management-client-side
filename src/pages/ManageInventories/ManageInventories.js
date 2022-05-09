import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import TableRow from '../TableRow/TableRow';

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories();
    const navigate = useNavigate();

    if (inventories.length === 0) {
        return ;
    }

    const handleDelete = () => {
        const proceed = window.confirm("Are you sure to delete");
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url)
            .then(res => res.json())
            .then(data => {
                const remaining = inventories.filter(inventory => inventory._id !== id);
                setInventories(remaining);
            })
        }
    }

    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col">
                    <h5 className='text-center text-color mb-4'>All Inventories</h5>
                    <div className="table-responsive">
                        <table className='table table-hover border border-1 border-dark text-center'>
                           <thead className='text-color'>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Price</th>
                                    <th scope='col'>Quantity</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Supplier Name</th>
                                    <th scope='col'>Action</th>
                                </tr>
                           </thead> 
                           <tbody>
                               {
                                   inventories.map(inventory => <TableRow 
                                    key={inventory._id}
                                    inventory={inventory}
                                    handleDelete={handleDelete}
                                   /> )
                               }
                           </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <p className='text-end m-0 py-4'><button onClick={navigate('/addNewInventory')} className="btn custom-btn">Add new item</button></p>
        </div>
    );
};

export default ManageInventories;