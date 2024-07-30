import React from 'react';

interface GreetingProps {
    name: string
}

const Greeting_1: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Good morning, {name}!</h1>;
};
export default Greeting_1;

export const Greeting_2: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Good afternoon, {name}!</h1>;
};

export const Greeting_3: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Good evening, {name}!</h1>;
};

// not exported (cannot be used outside of this file)
const Greeting_4: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Good night, {name}!</h1>;
};