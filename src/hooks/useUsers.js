import { useEffect, useState } from 'react';


const useUsers = (email) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://murmuring-fortress-11429.herokuapp.com/users?email=${email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [users, email]);
    return [users, setUsers];
}
export default useUsers;