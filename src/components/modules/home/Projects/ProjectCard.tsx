import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectDetailsDialog } from "./ProjectDetailsDialog";


export interface ProjectProps {
  title: string;
  descriptions: string;
  liveLink: string;
  image?: string;
  githubClient?: string;
  githubServer?: string;
  techStack?: string[];
  features?: string[];
  createdAt?: string;
  updatedAt?: string;
  category?: string;
  isTeamProject?: boolean;
  contributors?: string[];
  videoDemo?: string;
}

const ProjectCard = (props: ProjectProps) => {
  const {
    title,
    descriptions,
    liveLink,
    image,
    githubClient,
    githubServer,
    techStack,
  } = props;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden max-w-md mx-auto">
      {image && (
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />
      )}

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">{title}</h2>
        <p className="text-sm text-muted-foreground line-clamp-2">{descriptions}</p>

        {techStack && (
          <div className="flex flex-wrap gap-2 my-3">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex gap-2 flex-wrap mt-2">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <Button className="cursor-pointer" variant="default" size="sm">
              Live Site
            </Button>
          </a>
          {githubClient && (
            <a href={githubClient} target="_blank" rel="noopener noreferrer">
              <Button className="cursor-pointer" variant="outline" size="sm">
                GitHub Client
              </Button>
            </a>
          )}
          {githubServer && (
            <a href={githubServer} target="_blank" rel="noopener noreferrer">
              <Button className="cursor-pointer" variant="outline" size="sm">
                GitHub Server
              </Button>
            </a>
          )}

          <ProjectDetailsDialog  {...props} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;