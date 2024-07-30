import React, { useState, useEffect } from 'react';

const fetchUsers = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        console.log(users);
        return users;
    }   catch (error) {
        console.error('Error fetching users:', error);
    }
}

const FetchData: React.FC = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetchUsers()
        .then(response => setData(response.data))
    }, [])

    useEffect(() => {
        if (data != null) {
            // alert('fetched data')
        }
    }, [data])

    {/* conditional rendering example with if/else statement */}
    if (data == null) {
      return (<>
        <p>Fetching data...</p>
      </>)
    } else {
      return (<>
          {data.map((row: any, index: number) => {
            return <div key={index}>{row.email}</div>
          })}
      </>);
    }
}

export default FetchData;