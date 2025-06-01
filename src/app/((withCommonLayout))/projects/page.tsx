import ProjectCard, { ProjectProps } from "@/components/modules/home/Projects/ProjectCard";
import { getAllProjects } from "@/services/projects";

export default async function Projectspage() {
  let projects: ProjectProps[] = [];

  try {
    const result = await getAllProjects();

    // যদি result অ্যারে হয় তাহলে সেট করো
    if (Array.isArray(result)) {
      projects = result;
    } else {
      console.error("❌ getAllProjects() did not return an array:", result);
    }
  } catch (error) {
    console.error("❌ Error fetching projects:", error);
  }

  return (
    <section id="projects" className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold items-center text-center mb-12 relative inline-block after:absolute after:w-20 after:h-1 after:bg-primary after:left-1/2 after:-translate-x-1/2 after:-bottom-2">
          My Projects
        </h2>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No projects found.</p>
        )}
      </div>
    </section>
  );
}
