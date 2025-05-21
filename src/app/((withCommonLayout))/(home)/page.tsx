import Banner from "@/components/modules/home/Banner";
import Projectspage from "../projects/page";
import SkillsPage from "../skills/page";
import Contactpage from "../contact/page";


export default function page() {
  return (
    <div>
      <Banner />
      <SkillsPage />
      <Projectspage />
      <Contactpage />
    </div>
  )
}
