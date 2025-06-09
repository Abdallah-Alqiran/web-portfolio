import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";

const Technology = () => {
  const { isLoading, error, data } = useUserdata();
  if (isLoading) return <p className="text-center text-gray-400">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error happened!</p>;

  return (
    <section className="pt-20 px-4  bg-secondary ">
      <h1
        className="text-3xl font-semibold 
      text-[#25c1dd] w-fit mx-auto mb-12 pb-1 tracking-wide drop-shadow-md"
      >
        Technologies & Tools
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-5xl mx-auto pb-20">
        {data?.technologiesAndTools?.map((techs, index) => (
          <motion.div
            key={techs.id || index}
            className="p-6 rounded-xl shadow-md transition duration-300 
    border-2 border-[#006a6a] 
     relative font-semibold "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 13 }}
          >
            <h2 className="text-xl font-semibold mb-3 text-[#25c1dd] flex items-center gap-2">
              <Settings size={20} className="text-[#25c1dd]" />
              {techs.technologyTitle}
            </h2>

            <ul className="space-y-2">
              {techs.technologies.map((tech, idx) => (
                <li
                  key={tech.id || idx}
                  className="group flex items-center text-lg leading-relaxed transition-transform 
      duration-300  hover:translate-x-2 "
                >
                  <span className="mr-2 text-[#25c1dd] transition-transform duration-300 group-hover:translate-x-1">
                    &raquo;
                  </span>
                  <span className="transition-transform duration-300.
                   group-hover:translate-x-1 dark:text-gray-300 text-gray-500 datrktext-gray-300">
                    {tech.technologyName}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
