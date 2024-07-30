import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Views from './components/Views';
import { CounterProvider } from './contexts/CounterProvider';

const App: React.FC = () => {
    return (<>
        <CounterProvider>
            <Router>
                <Views />
            </Router>
        </CounterProvider>
    </>)
}

export default App;