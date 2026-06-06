import { useUserdata } from "@/shared/components/firestore";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { isLoading, error, data } = useUserdata();
  const { projectId } = useParams();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (isLoading)
    return (
      <div className="flex h-48 items-center justify-center bg-background">
        <p className="animate-pulse text-xl font-semibold text-primary">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex h-48 items-center justify-center bg-background">
        <p className="animate-pulse text-xl font-semibold text-destructive">Error happened!</p>
      </div>
    );

  const project = data?.projects?.find((p) => p.id === Number(projectId));

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-gray-600 font-mono text-sm">Project not found</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-[80px]" />
      </div>

      <div className="relative w-full max-w-6xl">


        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20">


          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden group border border-white/5 shadow-[0_0_80px_rgba(37,193,221,0.06)]">
              <img
                src={project.image}
                loading="lazy"
                alt={project.projectName}
                className="max-w-full h-auto transition-transform duration-700"
              />

              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/40 rounded-br-2xl pointer-events-none" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>


          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-7 py-2">

            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight text-muted-foreground">
                {project.projectName}
                <span className="block w-10 h-1 mt-3 rounded-full bg-gradient-to-r from-primary to-primary/50" />
              </h1>
            </div>


            <div className="h-px bg-gradient-to-r from-primary/20 via-primary/5 to-transparent" />


            <p className="text-sm md:text-[15px] text-foreground leading-relaxed whitespace-pre-wrap flex-1">
              {project.description}
            </p>


            <div className="h-px bg-gradient-to-r from-primary/20 via-primary/5 to-transparent" />

            <div className="relative flex flex-col items-start gap-2">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-7 py-3 rounded-full transition-all duration-300 shadow-[0_0_24px_rgba(0,106,106,0.35)] hover:shadow-[0_0_36px_rgba(37,193,221,0.25)]"
              >
                View Project
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>


              <div
                className={`w-64 bg-[#0f1a1a] border border-primary/15 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ${dropdownOpen
                    ? "opacity-100 translate-y-0 max-h-96 pointer-events-auto"
                    : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
                  }`}
              >
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-3.5 text-sm text-gray-300 hover:text-primary hover:bg-primary/5 transition-all duration-200 border-b border-white/5 last:border-none group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink
                      size={13}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-primary"
                    />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>


        <div className="flex items-center gap-3 mt-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/10" />
          <span className="text-[9px] tracking-[0.5em] uppercase text-white/10 font-mono">
            End of Preview
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/10" />
        </div>
      </div>
    </div>
  );
};

export default Details;