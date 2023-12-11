import React from "react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Cuentas() {
  const [cuentas, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/homebanking/cuentas');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching cuentas:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <main className="bg-orange-800 w-full ">
      <h1 className="text-3xl font-bold text-violet-50 text-center">
        Hello, Next.js!
      </h1>
      <p className="text-violet-50 text-center">
        This is a basic page component.
      </p>
    </main>
  );
}
