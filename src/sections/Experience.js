import React from "react";
import { SectionHeading } from "./Terminal";
import { experience } from "../content_option";

export const Experience = () => (
  <section id="experience" className="section experience">
    <div className="container">
      <SectionHeading index="03" title="Experience" />

      <div className="timeline">
        {experience.map((job, i) => (
          <div className={`tl-item ${job.current ? "current" : ""}`} key={i}>
            <div className="tl-marker">
              <span className="tl-dot" />
              {i < experience.length - 1 && <span className="tl-line" />}
            </div>
            <div className="tl-content">
              <div className="tl-topline">
                <h3 className="tl-role">{job.role}</h3>
                {job.current && <span className="tl-now">Present</span>}
              </div>
              <p className="tl-meta">
                <span className="tl-company">{job.company}</span>
                <span className="tl-dot-sep">·</span>
                <span>{job.location}</span>
                <span className="tl-date">{job.date}</span>
              </p>
              <ul className="tl-points">
                {job.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
