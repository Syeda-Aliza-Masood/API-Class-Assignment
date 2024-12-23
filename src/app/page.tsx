import Link from "next/link";

export default async function Home() {
  const url = await fetch("https://simple-books-api.glitch.me/books");
  const response = await url.json();
  console.log(response);

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
          Book List
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {response.map((book: any) => (
            <div
              key={book.id}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/${book.id}`}>
                <h2 className="text-xl font-semibold text-blue-900 hover:text-blue-600 transition-colors duration-300">
                  {book.name}
                </h2>
              </Link>
              <p className="text-gray-500 mt-2">ID: {book.id}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
