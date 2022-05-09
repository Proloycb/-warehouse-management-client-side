import React from 'react';

const TableRow = ({ inventory, handleDelete }) => {
    const {_id, name, price, quantity, supplier, description } = inventory;
    return (

        <tr>
            <td>{name}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>{description}</td>
            <td>{supplier}</td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button></td>
        </tr>

    );
};

export default TableRow;