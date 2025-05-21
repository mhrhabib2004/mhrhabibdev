import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Calendar, Users, Film, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectDetailsProps {
  title: string;
  descriptions: string;
  techStack?: string[];
  features?: string[];
  createdAt?: string;
  updatedAt?: string;
  category?: string;
  isTeamProject?: boolean;
  contributors?: string[];
  videoDemo?: string;
}

export const ProjectDetailsDialog = ({
  title,
  descriptions,
  techStack,
  features,
  createdAt,
  updatedAt,
  category,
  isTeamProject,
  contributors,
  videoDemo,
}: ProjectDetailsProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer w-full" variant="ghost" size="sm">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl w-full px-4 sm:px-6 md:px-8">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            {descriptions}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <div className="space-y-4">
            {features && features.length > 0 && (
              <div>
                <h3 className="font-semibold flex items-center gap-2 mb-2 text-base">
                  <Layers className="h-4 w-4" />
                  Key Features:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {techStack && (
              <div>
                <h3 className="font-semibold mb-2 text-base">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <Badge key={index} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {category && (
              <div>
                <h3 className="font-semibold mb-1 text-base">Project Category:</h3>
                <p className="text-sm">{category}</p>
              </div>
            )}

            {createdAt && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 opacity-70" />
                <span className="text-sm">
                  Created: {new Date(createdAt).toLocaleDateString()}
                </span>
              </div>
            )}

            {updatedAt && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 opacity-70" />
                <span className="text-sm">
                  Updated: {new Date(updatedAt).toLocaleDateString()}
                </span>
              </div>
            )}

            {isTeamProject && contributors && contributors.length > 0 && (
              <div>
                <h3 className="font-semibold flex items-center gap-2 mb-1 text-base">
                  <Users className="h-4 w-4" />
                  Team Project
                </h3>
                <div className="text-sm">
                  Contributors: {contributors.join(", ")}
                </div>
              </div>
            )}

            {videoDemo && (
              <div>
                <h3 className="font-semibold flex items-center gap-2 mb-2 text-base">
                  <Film className="h-4 w-4" />
                  Video Demo:
                </h3>
                <div className="aspect-video w-full bg-black rounded-md overflow-hidden">
                  <iframe
                    src={videoDemo}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
