import img2 from "../images/download (2).png";
import img3 from "../images/download (1).png";
import img4 from "../images/download.png";
import { Button } from "@/shared/components/ui/button";
import { Download } from "lucide-react";
import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";
const Home = () => {
  const image = {
    linkedin: img4,
    whatsapp: img3,
    facebook: img2,
  };

  const { isLoading, error, data } = useUserdata();

  if (isLoading) return <p className="text-center text-gray-400">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error happened!</p>;

  return (
    <div className="  bg-secondary w-full pt-20">
      <div
        id="home"
        className="flex flex-col items-center justify-center mx-auto 
     max-w-md p-6  transition-all  "
      >
        <motion.img
          src={data?.userImage}
          alt="Profile"
          className="w-60 h-60 rounded-full object-cover "
          initial={{ opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        />

        <h1
          className="text-2xl font-bold text-[#25c1dd]
         w-fit mx-auto tracking-wide drop-shadow-md"
        >
          {data?.userName}
        </h1>

        <h3 className="text-xl text-[#25a9a9]  mt-1 font-medium">
          {data?.jobTitle}
        </h3>

        <div className="flex space-x-4 mt-4">
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
  className="group bg-[#25c1dd] text-gray-300 px-6 py-2 rounded-2xl shadow-lg 
  transition duration-300 flex items-center gap-2 border w-fit 
  border-transparent hover:border-[#006a6a] hover:bg-gray-300 font-semibold hover:text-[#006a6a]"
>
  Download CV
  <Download
    size={20}
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
