import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { getApiUrl } from "@/utils/api";

// ✅ Define Menu Interface
interface Menu {
  logo?: { url: string };
  menu_items: { label: string; link: string }[];
  book_now_button: { label: string; link: string };
}

// ✅ Fetch Menu Data from PayloadCMS
const useMenu = () => {
  return useQuery<Menu>({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axios.get(getApiUrl("/api/menu?limit=1"));
      return res.data.docs[0];
    },
  });
};

// ✅ Header Component
const Header = () => {
  const { data: menu, isLoading, error } = useMenu();

  if (isLoading) return <p>Loading menu...</p>;
  if (error) return <p className="text-red-500">Failed to load menu.</p>;

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <Link href="/" legacyBehavior>
        <a className="flex items-center">
          {menu?.logo && (
            <Image
              src={getApiUrl(menu.logo.url)}
              alt="Logo"
              width={81}
              height={60}
              priority // Optimize loading
              className="cursor-pointer"
            />
          )}
        </a>
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="hidden md:flex space-x-6">
          {menu?.menu_items.map((item, index) => (
            <li key={index}>
              <Link href={item.link} legacyBehavior>
                <a className="text-gray-700 hover:text-blue-500 transition">
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* ✅ Book Now Button */}
      <Link href={menu?.book_now_button.link || "#"} legacyBehavior>
        <a className="bg-blue-500 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-600 transition">
          {menu?.book_now_button.label}
        </a>
      </Link>
    </header>
  );
};

export default Header;
