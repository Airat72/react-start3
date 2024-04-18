import React, {useState} from "react";
import './counter.css';

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count +1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return( <div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decrement}>Минус</button>
                <button className="counter-button" onClick={reset}>0</button>
                <button className="counter-button" onClick={increment}>Плюс</button>
            </div>);

}

export default Counter