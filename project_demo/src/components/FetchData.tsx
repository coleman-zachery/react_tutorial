// src/components/FetchData.tsx

import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

const FetchData: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers()
      .then((users) => {
        setData(users);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Fetching data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Users (Dummy Data fetched from "https://jsonplaceholder.typicode.com/users")</h2>

      {data.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            marginBottom: "8px",
            borderRadius: "4px",
          }}
        >
          <div>
            <strong>{user.name}</strong>
          </div>
          <div>{user.email}</div>
        </div>
      ))}
    </div>
  );
};

export default FetchData;