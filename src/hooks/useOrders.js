import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const useOrders = (email) => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://murmuring-fortress-11429.herokuapp.com/orders?email=${email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
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
    }, [email, navigate]);
    return [orders, setOrders];
};

export default useOrders;
