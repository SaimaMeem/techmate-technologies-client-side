import { useEffect, useState } from 'react';

const useOrders = (email) => {
    const [orders, setOrders] = useState([]);
    // console.log(email);
    // const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [email]);
    return [orders, setOrders];
};

export default useOrders;