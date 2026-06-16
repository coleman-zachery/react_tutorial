import React from 'react';
import { useCounterContext } from '../contexts/CounterProvider';

const Counter: React.FC = () => {
    const { count, IncreaseCount } = useCounterContext()

    return (<>
        <p>You clicked {count} times</p>
        <button
            onClick={IncreaseCount}
            >Click me
        </button>
    </>);
}

export default Counter;