import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-cover min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-75 p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Welcome to Recipe App</h1>
        <Link href="/recipe-list">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition text-lg font-semibold">
            Explore Recipes
          </button>
        </Link>
      </div>
    </div>
  );
}
