import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // التحكم في التبديل بين الوضع الداكن والوضع الفاتح
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  const toggleNavbar = () => setIsOpen(!isOpen); // تبديل القائمة
  const closeNavbar = () => setIsOpen(false); // إغلاق القائمة

  return (
    <nav className="bg-slate-400 dark:bg-gray-800 text-white p-4 rounded-sm " >
      <div className="container mx-auto flex justify-between  ">
        {/* شعار الموقع */}
        <h1 className={`text-xl font-bold ${isOpen?"hidden":"block"}`}>Abdelrahman Yasser</h1>

        {/* أيقونة القائمة للتبديل */}

  
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4`}
        >
          <Link
            to="/home"
            onClick={closeNavbar}
            className="block py-2 px-4 hover:bg-blue-600 dark:hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeNavbar}
            className="block py-2 px-4 hover:bg-blue-600 dark:hover:bg-gray-700"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={closeNavbar}
            className="block py-2 px-4 hover:bg-blue-600 dark:hover:bg-gray-700"
          >
            Contact
          </Link>
          <button
          onClick={toggleDarkMode}
          className="ml-4 bg-blue-700 text-white py-1 px-4 rounded hover:bg-blue-600 dark:bg-yellow-500 dark:hover:bg-yellow-600"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
        </div>

        {/* زر الوضع الداكن */}
        <button
          className="text-white md:hidden"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            // أيقونة الإغلاق
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 relative left -top-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // أيقونة القائمة
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

