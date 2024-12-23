const DynamicBook = async (props: any) => {
    console.log(props);
    const url = await fetch(`https://simple-books-api.glitch.me/books/${props.params.id}`);
    const response = await url.json();
    console.log("Single Book", response);
  
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400 p-10">
        <div className="max-w-2xl p-6 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold text-blue-900 hover:text-blue-600-800 mb-4">
             Book Details
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            {response.name}
          </h2>
          <p className="text-gray-500 text-lg">
            Discover more about this amazing book. This page dynamically loads details for the book with ID:{" "}
            <span className="font-mono font-bold text-blue-900 hover:text-blue-600">{props.params.id}</span>.
          </p>
        </div>
      </main>
    );
  };
  
  export default DynamicBook;
  