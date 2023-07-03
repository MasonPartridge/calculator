import { createRoot } from 'react-dom/client'
import React, { useEffect, useState } from 'react'
import './../public/style.css'

function App() {

    const [operations, setOperations] = useState([]);

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
        for (var i = 0; i < 3; i++) {
            var arr2 = []
            for (var i2 = 0; i2 < 3 * 1; i2++) {
                arr2.push(i2 + i * 3 + 1);
            }
            arr.push(arr2);
        }
        return arr;
    }

    function addOperationToOperations(inputOperation) {
        if (Number.isInteger(inputOperation)) {
            if (Number.isInteger(operations[operations.length - 1])) {
                setOperations(operations.map((operation, index) => {
                    if (index === operations.length - 1) {
                        return operation * 10 + inputOperation;
                    }
                }))
                return;
            }
            setOperations(operations.concat(inputOperation));
        }
        if (operations.length != 0) {
            setOperations(operations.concat(inputOperation));
        }
    }

    useEffect(() => {
        console.log(operations);
    }, [operations])

    function operate(arr) {
        var isAddition = true;
        return arr.reduce((output, operation) => {
            if (Number.isInteger(operation)) {
                return (isAddition) ? output + operation : output - operation;
            }
            switch (operation) {
                case '+':
                    isAddition = true;
                    break;
                case '-':
                    isAddition = false;
                    break;
            }
            return output;
        }
            , 0)
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div>
                <input
                    className='border-black border-2 bg-slate-500 m-4'
                    type='text' readOnly value={
                        operations.reduce(
                            (output, operator) => output + operator, '') 
                            + '=' + operate(operations)
                    }></input>
            </div>
            <div className='flex flex-row'>
                <div>
                    {assembleKeyPad().map((row) =>
                        <div key={row[0]} className='flex flex-row'>
                            {row.map((num) =>
                                <button className='w-8 m-1 rounded-xl bg-gray-600'
                                    key={num} onClick={() => { addOperationToOperations(num) }}>{num}</button>
                            )}
                        </div>
                    )}
                </div>
                <div className='flex flex-col'>
                    {['+', '-', 0].map((operator) =>
                        <button onClick={() => { addOperationToOperations(operator) }}
                            key={operator}
                            className='w-8 m-1 rounded-xl bg-gray-600'
                        >{operator}</button>
                    )}
                </div>
            </div>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App />)
