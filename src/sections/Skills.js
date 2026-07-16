import React from "react";
import { SectionHeading } from "./Terminal";
import { skillGroups } from "../content_option";

export const Skills = () => (
  <section id="skills" className="section skills">
    <div className="container">
      <SectionHeading index="02" title="Tech Stack" />

      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <div className="skill-group" key={i}>
            <div className="skill-group-head">
              {group.label}
              <span className="skill-count">{group.items.length}</span>
            </div>
            <div className="chips">
              {group.items.map((item, j) => (
                <span className="chip" key={j}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
