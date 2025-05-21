import SkillSection from "@/components/modules/home/SkillSection";
import { getAllSkills } from "@/services/skills";
import { ISkill } from "@/types/skills";

export default async function SkillsPage() {
  const skills: ISkill[] = await getAllSkills();

// console.log(skills);
  return (
    <div id="skills">
      <SkillSection skills={skills} />
    </div>
  );
}
