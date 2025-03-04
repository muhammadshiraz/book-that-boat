import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// ✅ Define Menu Interface
interface Menu {
  logo?: { url: string };
  menu_items: { label: string; link: string }[];
  book_now_button: { label: string; link: string };
}

// ✅ Custom Hook to Fetch Menu
export const useMenu = () => {
  return useQuery<Menu>({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/menu?limit=1");
      return res.data.docs[0];
    },
  });
};
