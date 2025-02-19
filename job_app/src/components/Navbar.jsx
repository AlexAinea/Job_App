const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-green-600 bg-opacity-80 backdrop-blur-lg shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="text-white text-2xl font-bold">JobyRash!</div>
  
            {/* Desktop Menu */}
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-green-200">Home</a>
              <a href="#" className="text-white hover:text-green-200">About</a>
              <a href="#" className="text-white hover:text-green-200">Services</a>
              <a href="#" className="text-white hover:text-green-200">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  