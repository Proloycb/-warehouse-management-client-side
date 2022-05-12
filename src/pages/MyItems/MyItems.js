import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';
import Loading from '../Shared/Loading/Loading';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [items, setItems] = useState([]);
    

    useEffect(() => {
        if (user !== null) {
            const url = 'https://young-basin-02785.herokuapp.com/myInventory'
            fetch(url, {
                headers: {
                    'authorization': `${user.email} ${localStorage.getItem("accessToken")}`,
                },
            })
                .then(res => res.json())
                .then(data => setItems(data));
        }
    }, [user]);

    if(loading || error){
       return <Loading/>
    }

    if(items.length === 0){
        return <Loading/>
    }
    
    return (
        <div style={{height: '100vh'}} className='container'>
            <h2 className='text-center text-success mb-2'>My Items</h2>
           <div className='d-lg-flex align-items-center justify-content-center'>
           {
                items.map(item => <MyItem
                    key={item._id}
                    item={item}
                    setItems={setItems}
                />)
            }
           </div>
        </div>
    );
};

export default MyItems;