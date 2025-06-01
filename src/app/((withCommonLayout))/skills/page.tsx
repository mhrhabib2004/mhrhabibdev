import SkillSection from "@/components/modules/home/SkillSection";
import { getAllSkills } from "@/services/skills";
import { ISkill } from "@/types/skills";

export default async function SkillsPage() {
  let skills: ISkill[] = [];

  try {
    const data = await getAllSkills();
    if (Array.isArray(data)) {
      skills = data;
    } else {
      console.error("getAllSkills did not return an array:", data);
    }
  } catch (err) {
    console.error("Failed to fetch skills:", err);
  }

  return (
    <div id="skills">
      <SkillSection skills={skills} />
    </div>
  );
}
