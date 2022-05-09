import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../../hooks/useInventories';
import Loading from '../../Shared/Loading/Loading';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories] = useInventories()

    if(inventories.length === 0){
        return <Loading/>
    }
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
                <Button as={Link} to='/manage' className='w-25 ms-auto'>Manage Inventories </Button>
            </div>
            
        </div>
    );
};

export default Inventories;