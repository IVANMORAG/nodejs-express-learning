import { useState, useEffect } from 'react';

const userCounter = (key, initialVal = 0) => {
    const [counter, setCounter] = useState(() => {
        const guardado = localStorage.getItem(key);
        return guardado ? JSON.parse(guardado) : initialVal;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(counter));
    }, [counter, key]);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(initialVal);

    return { counter, increment, decrement, reset };
};

export default userCounter;
