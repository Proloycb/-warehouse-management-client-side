import React from 'react';

const TableRow = ({inventory, handleDelete}) => {
    const {name, price, quantity, supplier, description } = inventory;
    return (
        <div>
            <tr>
                <td>{name}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td>{description}</td>
                <td>{supplier}</td>
                <td><button onClick={handleDelete} className='btn btn-danger'>Delete</button></td>
            </tr>
        </div>
    );
};

export default TableRow;