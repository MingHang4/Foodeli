import { useState } from 'react';
import { useAuth } from '../Components/AuthProvider'; // Periksa pathnya
import { useNavigate } from 'react-router-dom';

export default function NavUser({token}) {
  const { user, logout} = useAuth(); // Ambil data user dan fungsi logout dari konteks
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Hook untuk navigasi

  // Jika nama pengguna tidak tersedia, gunakan default text
  const userName = user?.user_metadata?.full_name ?? 'Pengguna';
  const email = user?.user_metadata?.email ?? 'Pengguna'; // Ganti dengan user name sesuai dengan data yang ada

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); // Navigasi ke halaman login setelah logout
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };
  
  return (
    <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo.png" alt="" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center gap-6">
          <div className="mt-1">
            <img src="/images/search.png" alt="" />
          </div>
          <div className="">
            <img src="/images/keranjang.png" alt="" />
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={dropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="relative">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={dropdownOpen}
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="profile w-8 h-8 rounded-full"
                src="/images/user-photo.png" // Ubah path ke gambar user yang sebenarnya
                alt="user photo"
              />
            </button>
            
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <div className="px-4 py-2">
                  <span className="block text-gray-700">{userName}</span>
                  <span className="block text-gray-500">{email}</span>
                </div>
                <div className="border-t border-gray-200"></div>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Settings
                </a>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 rounded md:bg-transparent md:text-red-500 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/menu"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}