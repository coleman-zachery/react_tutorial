import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Views from './components/Views';
import { GlobalCounterContextProvider } from './contexts/GlobalCounterProvider';

const App: React.FC = () => {
    return (<>
        <GlobalCounterContextProvider>
            <Router>
                <Views />
            </Router>
        </GlobalCounterContextProvider>
    </>)
}

export default App;