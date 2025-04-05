import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrashIcon, MoonIcon, SunIcon, PaperAirplaneIcon, PlusIcon } from '@heroicons/react/24/solid';

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, input.trim()]);
    setInput('');
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    alert(`Thanks for contacting us, ${name}!`);
    setName('');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans p-6 transition-colors duration-300 ease-in-out">
      <main className="max-w-2xl mx-auto bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 shadow-lg">
        <motion.h1
          className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🧪 Test Playground
        </motion.h1>

        {/* To-do List */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">To-Do List</h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              className="flex-1 p-2 border rounded shadow-sm"
              placeholder="Enter a task"
              value={input}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            />
            <button
              onClick={addTask}
              className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition"
            >
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>
          <ul>
            <AnimatePresence>
              {tasks.map((task, i) => (
                <motion.li
                  key={i}
                  className="flex justify-between items-center bg-white/10 border p-3 mb-3 rounded shadow dark:bg-white/5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <span>{task}</span>
                  <button
                    onClick={() => removeTask(i)}
                    className="text-red-600 hover:text-red-800 transition"
                    aria-label="Delete task"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </section>

        {/* Role Dropdown */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Select Your Role</h2>
          <select className="w-full p-2 border rounded shadow">
            <option value="">Choose...</option>
            <option value="tester">Tester</option>
            <option value="developer">Developer</option>
            <option value="manager">Manager</option>
          </select>
        </section>

        {/* Contact Form */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Contact Form</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              className="w-full p-2 border rounded shadow"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="w-full p-2 border rounded shadow"
              required
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded shadow hover:bg-green-700 transition"
            >
              <PaperAirplaneIcon className="w-5 h-5 rotate-45" /> Send
            </button>
          </form>
        </section>

        {/* Dark Mode Toggle */}
        <div className="flex justify-between items-center mt-10 p-4 border rounded">
          <span className="font-semibold flex items-center gap-2">
            {darkMode ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />} Dark Mode
          </span>
          <label className="switch relative inline-block w-10 h-6">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="opacity-0 w-0 h-0"
            />
            <span
              className="slider absolute cursor-pointer bg-gray-400 rounded-full top-0 left-0 right-0 bottom-0 transition-all before:content-[''] before:absolute before:h-4 before:w-4 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-all"
              style={{ backgroundColor: darkMode ? '#4f46e5' : '#ccc' }}
            />
          </label>
        </div>
      </main>
    </div>
  );
}
