"use client";

import Image from "next/image";
import { ISkill, SkillCategory } from "@/types/skills";

interface SkillSectionProps {
  skills: ISkill[];
}

export default function SkillSection({ skills }: SkillSectionProps) {
  // Normalize category values to match enum (case insensitive)
  const normalizedSkills = skills.map((skill) => ({
    ...skill,
    category:
      skill.category.toLowerCase() === "technical"
        ? SkillCategory.Technical
        : SkillCategory.Soft,
  }));

  const technicalSkills = normalizedSkills.filter(
    (skill) => skill.category === SkillCategory.Technical
  );
  const softSkills = normalizedSkills.filter(
    (skill) => skill.category === SkillCategory.Soft
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold items-center text-center mb-12 relative inline-block after:absolute after:w-20 after:h-1 after:bg-primary after:left-1/2 after:-translate-x-1/2 after:-bottom-2">
          My Skills
        </h2>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-primary">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="relative w-12 h-14 mb-3">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm font-medium">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-secondary-foreground">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-card border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="relative w-12 h-14 mb-3">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm font-medium">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}