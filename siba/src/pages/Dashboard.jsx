import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Dashboard({ setLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false); // actually logs out
    navigate('/'); // redirects to login
  };

  return (
    <div>
      <nav className="flex flex-wrap p-4 bg-gray-200 gap-4">
        <Link to="" className="text-blue-600">Home</Link>
        <Link to="cards" className="text-blue-600">Cards</Link>
        <button
          onClick={handleLogout}
          className="text-sm bg-purple-500 px-3 py-1 rounded hover:bg-purple-600"
        >
          Logout
        </button>
      </nav>
      <Outlet /> {/* This is where nested routes like /dashboard/cards will render */}
    </div>
  );
}
