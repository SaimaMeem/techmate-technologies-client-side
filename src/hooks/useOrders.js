import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const useOrders = (email) => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    // console.log(email);
    // const email = user?.email;
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res => {
            console.log(res.status);
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/login');
            }
            return res.json()
        })
            .then(data => {
                setOrders(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [email,navigate]);
    return [orders, setOrders];
};

export default useOrders;
