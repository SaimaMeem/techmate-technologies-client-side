import  { useEffect, useState } from 'react';


const useUsers = (email) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${email}`, {
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
    }, [users,email]);
    return [users, setUsers];
}
export default useUsers;