import { Link } from 'react-router-dom';
import { formatDate } from '../utils';

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Medical Director',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop',
    text: 'TaskMaster has revolutionized how our medical team manages patient care schedules. The intuitive interface and robust features have significantly improved our efficiency.',
  },
  {
    name: 'Michael Williams',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    text: 'As a tech lead managing multiple projects, TaskMaster has been a game-changer. The collaboration features and progress tracking have streamlined our development process.',
  },
  {
    name: 'Dr. Lisa Thompson',
    role: 'Research Scientist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    text: 'The task organization capabilities of TaskMaster have transformed how I manage my research projects. It\'s become an essential tool in my daily workflow.',
  },
  {
    name: 'James Wilson',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    text: 'TaskMaster\'s project management features have helped our team stay on track and meet deadlines consistently. The reporting tools are particularly valuable.',
  },
];

const features = [
  {
    icon: '📊',
    title: 'Task Analytics',
    description: 'Get detailed insights into your productivity patterns',
    details: [
      'Track completion rates',
      'Monitor time spent on tasks',
      'Identify productivity trends',
      'Generate custom reports',
    ],
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team members',
    details: [
      'Real-time updates',
      'Task assignments',
      'Progress tracking',
      'Team chat integration',
    ],
  },
  {
    icon: '🔔',
    title: 'Smart Notifications',
    description: 'Stay informed with intelligent alerts',
    details: [
      'Customizable reminders',
      'Priority notifications',
      'Email digests',
      'Mobile push alerts',
    ],
  },
  {
    icon: '📱',
    title: 'Mobile Access',
    description: 'Manage tasks on the go',
    details: [
      'Cross-platform sync',
      'Offline access',
      'Mobile-optimized UI',
      'Quick actions',
    ],
  },
];

const faqs = [
  {
    question: 'How does TaskMaster help with productivity?',
    answer: 'TaskMaster provides a comprehensive suite of tools for task management, including priority setting, deadline tracking, and progress monitoring. Our analytics features help you identify productivity patterns and optimize your workflow.',
  },
  {
    question: 'Can I use TaskMaster with my team?',
    answer: 'Yes! TaskMaster is designed for both individual and team use. You can create teams, assign tasks, track progress, and collaborate in real-time with your colleagues.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We take data security seriously. All data is encrypted in transit and at rest, and we regularly perform security audits to ensure your information remains protected.',
  },
  {
    question: 'What platforms does TaskMaster support?',
    answer: 'TaskMaster is available on web browsers and as native apps for iOS and Android. Your data syncs automatically across all platforms, so you can access your tasks anywhere.',
  },
];

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-12 sm:py-16 md:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
          Welcome to TaskMaster
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto">
          Your ultimate task management solution for enhanced productivity and organization
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4">
          <Link
            to="/tasks"
            className="btn btn-primary bg-white text-indigo-600 hover:bg-gray-100 w-full sm:w-auto"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="btn btn-secondary bg-indigo-700 text-white hover:bg-indigo-800 w-full sm:w-auto"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10K+</div>
          <div className="text-gray-600 dark:text-gray-400">Active Users</div>
        </div>
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">1M+</div>
          <div className="text-gray-600 dark:text-gray-400">Tasks Completed</div>
        </div>
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">98%</div>
          <div className="text-gray-600 dark:text-gray-400">User Satisfaction</div>
        </div>
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">24/7</div>
          <div className="text-gray-600 dark:text-gray-400">Support Available</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12 sm:py-16 md:py-20 rounded-3xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 sm:py-16 md:py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Ready to Boost Your Productivity?
        </h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who trust TaskMaster for their daily task management needs
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4">
          <Link
            to="/tasks"
            className="btn btn-primary bg-white text-indigo-600 hover:bg-gray-100 w-full sm:w-auto"
          >
            Start Free Trial
          </Link>
          <Link
            to="/contact"
            className="btn btn-secondary bg-indigo-700 text-white hover:bg-indigo-800 w-full sm:w-auto"
          >
            Contact Sales
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;