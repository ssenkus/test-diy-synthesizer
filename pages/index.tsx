import Header from '../components/Header';

const tutorials = [
  { id: 1, title: 'Introduction to Digital Electronics' },
  { id: 2, title: 'Logic Gates' },
  { id: 3, title: 'Combinational Circuits' },
  { id: 4, title: 'Sequential Circuits' },
  // Add more tutorials here
];

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl mb-4">Tutorials</h1>
        <ul>
          {tutorials.map((tutorial) => (
            <li key={tutorial.id} className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">
                {tutorial.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}