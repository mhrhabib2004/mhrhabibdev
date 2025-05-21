import ProjectCard, { ProjectProps } from "@/components/modules/home/Projects/ProjectCard";
import { getAllProjects } from "@/services/projects";

export default async function Projectspage() {

  const projects : ProjectProps[]  =await getAllProjects()
  return (
    <section id="projects" className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
