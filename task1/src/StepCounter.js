// Lab 3.1: Step Counter Componenet
// Uses React hooks: useState for state management
// Props: start (initial value), step (change amount)
// State: count (current value), history (past values), operations (click count)
// Each counter manages its own state independently

import {useState} from 'react';

function StepCounter({ start = 0, step = 1}) {
    const [count, setCount] = useState(start);
    const [history, setHistory] = useState([start]);

    const [operations, setOperations] = useState(0);

    function up() {
        const newCount = count + step;
        setCount(newCount);
        setHistory([...history, newCount]);

        setOperations(operations + 1);
    }

    function down() {
        const newCount = count - step;
        setCount(newCount);
        setHistory([...history, newCount]);

        setOperations(operations + 1);
    }

    function reset() {
        setCount(start);
        setHistory([start]);
    }

    return (
        <div style={{
            border: '3px solid green',
            margin: '20px',
            padding: '15px',
            borderRadius: '10px'
        }}>
            <h2>Counter: {count}</h2>
            <button onClick={up}
    style={{margin: '5px', padding: '10px'}}>
        +{step}
            </button>
            <button onClick={down}
    style={{margin: '5px', padding: '10px'}}>
        -{step}
            </button>
            <button onClick={reset}
    style={{margin: '5px', padding: '10px'}}>
         Reset
            </button>
            <p>Last 3 values:
                {history.slice(-3).join(', ')}</p>

            <p>Operations count: {operations}</p>


        </div>
    );
}

export default StepCounter;