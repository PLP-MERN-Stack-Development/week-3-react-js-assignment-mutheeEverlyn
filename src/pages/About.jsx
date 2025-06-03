const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About TaskMaster
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Your personal productivity companion
        </p>
      </section>

      <section className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          At TaskMaster, we believe that effective task management is the key to
          personal and professional success. Our mission is to provide a simple,
          intuitive, and powerful task management solution that helps you stay
          organized and focused on what matters most.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Features
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Simple and intuitive task creation and management</li>
          <li>Task categorization and filtering</li>
          <li>Progress tracking and completion status</li>
          <li>Responsive design for all devices</li>
          <li>Dark mode support for comfortable viewing</li>
          <li>Local storage for offline access</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
          Technology Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Frontend</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>React Router</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300">
              <li>Custom Hooks</li>
              <li>Context API</li>
              <li>Local Storage</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Development</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300">
              <li>Vite</li>
              <li>ESLint</li>
              <li>Git</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
          Contact Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Have questions or suggestions? We'd love to hear from you! Reach out to us
          at{' '}
          <a
            href="mailto:contact@taskmaster.com"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            contact@taskmaster.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default About; 