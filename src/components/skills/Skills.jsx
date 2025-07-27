import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Familar from "./Familar";
import SoftSkills from "./SoftSkills";


export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>
      <div className="skills_container container grid">
        <Frontend />

        <Backend />

        <Familar />

        <SoftSkills />
      </div>
    </section>
  );
}
