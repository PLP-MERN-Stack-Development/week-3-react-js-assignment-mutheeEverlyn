export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg">
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      {children}
    </div>
  );
}