import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [fullname, setFullname]=useState('');
  const [username, setUsername]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    alert('Registration successful!');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Register</h1>
      <input
        type="test"
        placeholder="Name"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        className="block w-full mb-2 p-2 border"
        required
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block w-full mb-2 p-2 border"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full mb-2 p-2 border"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-2 p-2 border"
        required
      />
      <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}
