import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const username = user?.user?.displayName;
        const image = user?.user?.photoURL;
        const currentUser = {
            email: email,
            username: username,
            image: image || `https://i.ibb.co/QPVQmtf/users.png`,
        };
        if (email) {
            fetch(`https://techmate-technologies.onrender.com/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser),
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user]);
    return [token, setToken];
};

export default useToken;