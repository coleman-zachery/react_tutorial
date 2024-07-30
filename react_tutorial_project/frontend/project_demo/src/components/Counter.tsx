import React from 'react';
import { useGlobalCounterContext } from '../contexts/GlobalCounterProvider';

const Counter: React.FC = () => {
    const { GlobalCount, IncreaseGlobalCount } = useGlobalCounterContext()

    return (<>
        <p>You clicked {GlobalCount} times</p>
        <button
            onClick={IncreaseGlobalCount}
            >Click me
        </button>
    </>);
}

export default Counter;