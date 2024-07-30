import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const IncreaseCount = () => {
        setCount(count + 1)
    }

    return (<>
        <p>You clicked {count} times</p>
        <button
            onClick={IncreaseCount}
            >Click me
        </button>
    </>);
}

export default Counter;