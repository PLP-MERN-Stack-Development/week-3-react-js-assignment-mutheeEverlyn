import { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Tasks = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch initial tasks from API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        // Transform API data to match our task structure
        const transformedTasks = data.map(task => ({
          id: task.id,
          text: task.title,
          completed: task.completed,
          createdAt: new Date().toISOString()
        }));
        setTasks(transformedTasks);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px] sm:min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 dark:text-red-400 p-4">
        <p className="text-sm sm:text-base">Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base"
        >
          Retry
        </button>
      </div>
    );
  }

 return (
    <main className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <div className="max-w-full sm:max-w-2xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="w-full space-y-2 sm:space-y-4">
          <header className="text-center mb-1 sm:mb-2 w-full max-w-full overflow-x-hidden">
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white break-words w-full max-w-full">
              Task Management
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-0.5 sm:mt-1 break-words w-full max-w-full">
              Organize your tasks and boost your productivity
            </p>
          </header>

          {/* Add Task Form */}
          <form onSubmit={addTask} className="flex flex-col sm:flex-row gap-1 sm:gap-2 mb-1 sm:mb-2 w-full">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm w-full"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-xs sm:text-sm font-medium"
            >
              Add Task
            </button>
          </form>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-1 mb-1 sm:mb-2">
            {['all', 'active', 'completed'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-2 py-1 rounded-lg text-xs sm:text-sm font-medium capitalize ${
                  filter === filterType
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                {filterType}
              </button>
            ))}
          </div>

          {/* Task List */}
          <div className="space-y-1 sm:space-y-2 max-h-[60vh] overflow-y-auto mb-1 sm:mb-2 w-full">
            {filteredTasks.length === 0 ? (
              <p className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 py-1 sm:py-2">
                No tasks found. Add a new task to get started!
              </p>
            ) : (
              filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow w-full"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 flex-shrink-0 cursor-pointer"
                  />
                  <span
                    className={`flex-1 truncate text-xs sm:text-sm ${
                      task.completed
                        ? 'line-through text-gray-500 dark:text-gray-400'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {task.text}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-xs sm:text-sm font-medium flex-shrink-0"
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Task Stats */}
          <div className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-2 rounded-lg w-full">
            <p>
              {tasks.filter((t) => !t.completed).length} tasks remaining out of{' '}
              {tasks.length} total
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tasks;
