import { useUserdata } from "@/shared/components/firestore";
import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared/components/ui/carousel";

const Projects = () => {
  const { isLoading, error, data } = useUserdata();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error happened!</p>;
  return (
    <div id="projects" className=" pt-22 bg-secondary  ">
      <h1 className="text-3xl  font-semibold text-[#25c1dd] w-fit
       mx-auto pt-20  pb-1  tracking-wide drop-shadow-md">
        Projects
      </h1>
      <div className="mt-10  px-4 ">
        <Carousel>
          <CarouselContent className="-ml-4">
            {data?.projects.map((project) => (
              <CarouselItem
                key={project.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basic-1/4"
              >
                <motion.div
                  className=" rounded-2xl shadow-md overflow-hidden flex flex-col mb-20  "
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: project.id * 0.1,
                    duration: 0.9,
                    ease: "easeOut",
                  }}
                >
                  <img
                    src={project.image} loading="lazy"
                    alt={`Project ${project.id}`}
                    className="w-full h-48 object-fit"
                  />
                  <div className="p-4 mt-auto">
                    <h3 className="text-[#25c1dd] font-semibold mb-4">{project.projectName}</h3>
                    <Link to={`/details/${project.id}`}>
                    
                      <Button
                        className="bg-[#006a6a] text-gray-300 w-full  px-6 py-2 rounded-xl shadow-lg 
    transition duration-300 flex items-center gap-2 border text-bolder
    border-transparent hover:border-[#25c1dd] hover:bg-gray-300 hover:text-[#25c1dd] mb-2"
                      >
                        More Details
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
