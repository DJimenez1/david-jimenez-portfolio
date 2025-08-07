export default function Navbar() {
    return (
      <nav className="w-full bg-white shadow-md px-6 py-4 fixed top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">David Jimenez</h1>
          <div className="space-x-4 hidden md:flex">
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  