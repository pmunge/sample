import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setValid(emailValid && password.length > 8);
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full mb-2 p-2 border" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="block w-full mb-2 p-2 border" />
      <button type="submit" disabled={!valid} className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50">Login</button>
    </form>
  );
}
