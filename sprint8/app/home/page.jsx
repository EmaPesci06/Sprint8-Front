import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home() {
  const [home, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/homebanking/home');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching direcciones:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <main className="bg-gray-200 p-4 main grow text-slate-900 text-center">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="text-lg mt-4">This is a basic home page.</p>
    </main>
  );
}
