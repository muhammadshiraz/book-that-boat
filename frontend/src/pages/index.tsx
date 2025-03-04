import { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Header from "@/components/Header";

// ✅ Define Boat Interface
interface Boat {
  id: string;
  name: string;
  description: string;
  price_per_hour: number;
  capacity: number;
  location: string;
  media?: { 
    id: number;
    url: string;
    alt?: string;
  };
}

// ✅ Fetch Boats
const useBoats = () => {
  return useQuery<Boat[]>({
    queryKey: ["boats"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/boats?limit=100");
      return res.data.docs;
    },
  });
};

// ✅ Home Page
const Home: NextPage = () => {
  const { data: boats, isLoading, error } = useBoats();

  if (isLoading) return <p className="text-center text-xl">Loading boats...</p>;
  if (error) return <p className="text-red-500">Failed to load boats.</p>;

  return (
    <div>
      {/* ✅ Header with Menu */}
      <Header />

      {/* ✅ Boats Section */}
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Available Boats</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boats?.map((boat) => (
            <div key={boat.id} className="bg-white shadow-lg rounded-lg p-4">
              {/* ✅ Boat Image */}
              {boat.media?.url ? (
                <Image
                  src={`http://localhost:3000${boat.media.url}`}
                  alt={boat.media.alt || "Boat Image"}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-md"
                />
              ) : (
                <p className="text-gray-400">No Image Available</p>
              )}

              {/* ✅ Boat Details */}
              <h2 className="text-2xl font-semibold mt-4">{boat.name}</h2>
              <p className="text-gray-600">{boat.description}</p>
              <p className="text-green-500 font-bold mt-2">
                AED {boat.price_per_hour}/hour
              </p>
              <p className="text-gray-700">Capacity: {boat.capacity} people</p>
              <p className="text-blue-500">Location: {boat.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
