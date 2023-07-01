import { createRoot } from 'react-dom/client'
import React, { useState } from 'react'
import './../public/style.css'

function App() {

    const [operationString, setOperationString] = useState('');

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    function operate(a, operator, b) {

    }

    function assembleKeyPad() {
        var arr = []
        for (var i = 1; i <= 3; i++) {
            var arr2 = []
            for (var i2 = 0; i2 < 3 * 1; i2++) {
                arr2.push(i2 + i * 3);
            }
            arr.push(arr2);
        }
        return arr;
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div>
                <input className='border-black border-2 bg-slate-500 m-4' type='text'></input>
            </div>
            <div className='flex flex-row'>
                <div>
                    {assembleKeyPad().map((row) =>
                        <div key={row[0]} className='flex flex-row'>
                            {row.map((num) =>
                                <button className='w-8 m-1 rounded-xl bg-gray-600' 
                                    key={num} onClick={() => {
                                    setOperationString(operationString + num)
                                }}>{num}</button>
                            )}
                        </div>
                    )}
                </div>
                <div className='flex flex-col'>
                    {['+', '-', '='].map((operator) =>
                        <button key={operator} 
                            className='w-8 m-1 rounded-xl bg-gray-600'
                        >{operator}</button>
                    )}
                </div>
            </div>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App />)
