import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Cards from '../components/Cards';

export default function Dashboard() {
  return (
    <div>
      <nav className="flex flex-wrap p-4 bg-gray-200 gap-4">
        <Link to="" className="text-blue-600">Home</Link>
        <Link to="cards" className="text-blue-600">Cards</Link>
      </nav>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="cards" element={<Cards />} />
      </Routes>
    </div>
  );
}