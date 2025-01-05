import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api') // Proxy will redirect to http://localhost:5000/api
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Fullstack App!</h1>
        <p className="mt-4 text-gray-700">
          Backend says: <span className="font-semibold">{message}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
