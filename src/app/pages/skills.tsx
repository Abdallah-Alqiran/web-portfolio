import { useUserdata } from "@/shared/components/firestore";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const { isLoading, error, data } = useUserdata();

  if (isLoading)
    return <p className="text-center text-gray-400 mt-20">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-20">Error happened!</p>;

  return (
    <section id="skills" className="pt-33 px-6   bg-secondary  ">
      <h1 className="text-3xl font-semibold text-[#25c1dd]
       w-fit mx-auto mb-7 pb-1 tracking-wide drop-shadow-md ">
        Skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20 ">
        {data?.skills?.map((skill, index) => (
          <motion.div
            key={skill.id || index}
            className="relative group 
    rounded-2xl p-5 shadow-lg cursor-pointer
    transition-transform duration-300
    border-2 border-[#006a6a] w-85"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl opacity-30"></div>

            <div className="relative z-10 flex flex-col items-center justify-center">
              <Star size={36} className="mb-3 text-yellow-300" />
              <h3 className="text-xl font-semibold tracking-wide text-gray-600 dark:text-gray-300">
                {skill.skillName}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
