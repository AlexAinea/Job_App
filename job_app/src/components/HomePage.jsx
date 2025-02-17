const HomePage = ({titleProp , subTitleProp}) => {
    return (
      <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-700">{titleProp}</h1>
          <p className="text-green-600 mt-2">{subTitleProp}</p>
        </header>
        
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Job title, keywords..."
              className="flex-1 p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Location"
              className="flex-1 p-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default HomePage;
  