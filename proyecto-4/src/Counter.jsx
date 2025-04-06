import React from 'react';
import userCounter from './hooks/userCounter';

const Counter = () => {
    const { counter, increment, decrement, reset } = userCounter("Contador", 0);

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="w-96 bg-white flex flex-col gap-4 p-4 shadow rounded">
                <h1 className="text-2xl font-bold text-slate-800 text-center">
                    {counter}
                </h1>
                <div className="w-full flex gap-4">
                    <button className="bg-rose-400 text-white px-4 py-2 rounded hover:bg-rose-600" onClick={increment}>
                        Increment
                    </button>
                    <button className="bg-rose-400 text-white px-4 py-2 rounded hover:bg-rose-600" onClick={decrement}>
                        Decrement
                    </button>
                    <button className="bg-rose-400 text-white px-4 py-2 rounded hover:bg-rose-600" onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
