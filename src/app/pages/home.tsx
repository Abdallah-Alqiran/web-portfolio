import img2 from "../images/download (2).jpeg";
import img3 from "../images/download (1).png";
import img1 from "../images/download (2).png"
import img4 from "../images/download.png";
import img5 from "../images/download (3).jpeg"
import img6 from "../images/download (3).png"
import { Button } from "@/shared/components/ui/button";
import { Download } from "lucide-react";
import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";

const Home = () => {
  const image = {
    linkedin: img4,
    whatsapp: img3,
    facebook: img2,
    github:img1,
    leetcode:img5,
    codeforces:img6
    
  };

  const { isLoading, error, data } = useUserdata();

  if (isLoading) return <p className="text-center text-gray-400">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error happened!</p>;

  return (
    <div className="bg-secondary w-full pt-[100px]">
      <div
        id="home"
        className="flex flex-col items-center justify-center mx-auto 
        max-w-md p-6 transition-all"
      >
        <motion.img
          src={data?.userImage}
          loading="eager"
          width={288} 
          height={288}
          alt="Profile"
          className="w-72 h-72 rounded-full object-cover"
          initial={{ opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        />

        <h1 className="text-3xl font-bold text-[#25c1dd] w-fit mx-auto tracking-wide drop-shadow-md mt-4">
          {data?.userName}
        </h1>

        <h3 className="text-2xl text-[#25a9a9] mt-2 font-medium">
          {data?.jobTitle}
        </h3>

        <div className="flex space-x-4 mt-6">
          {data?.contactAndAccounts.map((user) => (
            <a
              href={user.url}
              key={user.id}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                src={image[user.webName] ?? img4}
                loading="lazy"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full shadow-md hover:shadow-lg"
                alt={user.webName}
              />
            </a>
          ))}
        </div>

        {data?.cvUrl && (
          <a
            href={data.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6"
          >
            <Button
              className="group bg-[#166c7b] text-gray-300 mt-3 px-8 py-3 text-lg 
              rounded-2xl shadow-lg transition duration-300 flex items-center gap-2 
              border w-fit border-transparent hover:border-[#006a6a] 
              hover:bg-gray-300 font-semibold hover:text-[#006a6a]"
            >
              Download CV
              <Download
                size={28}
                className="transition-transform duration-300 group-hover:animate-jump"
              />
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Home;