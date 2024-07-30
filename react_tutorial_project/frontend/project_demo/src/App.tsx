import React from 'react'
import Greeting_1, { Greeting_2, Greeting_3 } from './components/Greetings';

const people = [
    "John Deer",
    "Alice Smith",
    "Bob Dole",
    "Not Sure",
];

const App: React.FC = () => {
    return (<>
        <Greeting_1 name={people[0]} />
        <Greeting_2 name={people[1]} />
        <Greeting_3 name={people[2]} />

        {/* will cause error because Greeting_4 is not imported, and currently unable to be imported */}
        {/* <Greeting_4 name={people[3]} /> */}
    </>)
}

export default App;