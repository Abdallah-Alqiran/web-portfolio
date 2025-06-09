import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";

const Education = () => {
  const { isLoading, error, data } = useUserdata();

  if (isLoading) return <p className="text-center text-gray-400">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error happened!</p>;

  return (
    <section className="pt-20 pb-20 px-6 bg-secondary ">
      <div className="flex items-center justify-center gap-3 mb-5">
        <h1
          className="text-3xl font-semibold   text-[#25c1dd]
        w-fit mx-auto  pb-1 tracking-wide drop-shadow-md mt-10"
        >
          Education
        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
      >
        {data?.education?.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No education data found.
          </p>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6 pb-20">
            {data.education.map(({ id, university, date, major }) => (
              <div
                key={id}
                className="p-5 rounded-lg border-2 b
                bg-[#006a6a]  bg-clip-border text-gray-300"
                style={{
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  borderRadius: "12px",
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderImageSlice: 1,
                }}
              >
                <h2 className="text-2xl font-bold">{university}</h2>
                <p className="text-lg mt-1 font-semibold">{date}</p>
                <p className="mt-2 font-semibold">{major}</p>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Education;
