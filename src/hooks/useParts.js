import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch(`https://murmuring-fortress-11429.herokuapp.com/parts`)
            .then(res => res.json())
            .then(data => setParts(data))

    }, [parts]);
    return [parts, setParts];
}
export default useParts;