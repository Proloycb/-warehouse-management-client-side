import { useEffect, useState } from "react"

const useInventoryDetail = (id) => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const url = `https://young-basin-02785.herokuapp.com/inventory/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data));
    }, [id]);

    return [inventory, setInventory];
}

export default useInventoryDetail;