import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Sucursales() {
  const [Sucursales, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/homebanking/sucursales');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching direcciones:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <main className="bg-blue-500 text-white p-4 flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl font-bold mb-4">Sucursales</h1>
      <p className="text-lg">Welcome to the Sucursales page!</p>
      <button className="bg-white text-blue-500 px-4 py-2 mt-4 rounded-md shadow-md hover:bg-blue-500 hover:text-white">
        Click Me
      </button>
    </main>
  );
}
