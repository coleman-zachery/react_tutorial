import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

const Home: React.FC = () => <h1>Welcome home!</h1>
import Counter from "./Counter";
import FetchData from "./FetchData";
import Greeting_1, { Greeting_2, Greeting_3 } from "./Greetings";
const NotFound: React.FC = () => <h1>Page not found!</h1>

const Views: React.FC = () => <>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Counter'>Counter</Link></li>
        <li><Link to='/FetchData'>FetchData</Link></li>
        <li><Link to='/Greeting_1'>Greeting_1</Link></li>
        <li><Link to='/Greeting_2'>Greeting_2</Link></li>
        <li><Link to='/Greeting_3'>Greeting_3</Link></li>
    </ul>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Counter' element={<Counter />}></Route>
        <Route path='/FetchData' element={<FetchData />}></Route>
        <Route path='/Greeting_1' element={<Greeting_1 name='John Deer'/>}></Route>
        <Route path='/Greeting_2' element={<Greeting_2 name='Alice Smith'/>}></Route>
        <Route path='/Greeting_3' element={<Greeting_3 name='Bob Dole'/>}></Route>
        <Route path='/*' element={<NotFound />}></Route>
    </Routes>
</>

export default Views