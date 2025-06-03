import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <h1 className="font-bold text-xl">Task App</h1>
      <button onClick={toggleTheme} className="bg-white text-blue-500 px-3 py-1 rounded">
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </nav>
  );
}