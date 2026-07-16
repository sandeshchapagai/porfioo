import React from "react";
import { SectionHeading } from "./Terminal";
import { education, resumeUrl } from "../content_option";

const cvHref = `${process.env.PUBLIC_URL || ""}${resumeUrl}`;

export const Resume = () => (
  <section id="resume" className="section resume">
    <div className="container">
      <SectionHeading index="05" title="Résumé" />

      <div className="resume-grid">
        <div className="resume-left">
          <h3 className="resume-sub">Education</h3>
          {education.map((ed, i) => (
            <div className="edu-item" key={i}>
              <div className="edu-top">
                <h4 className="edu-school">{ed.school}</h4>
                <span className="edu-date">{ed.date}</span>
              </div>
              <p className="edu-degree">{ed.degree}</p>
              <p className="edu-loc">{ed.location}</p>
            </div>
          ))}
        </div>

        <div className="resume-cta card">
          <h3 className="resume-cta-title">Full résumé</h3>
          <p className="resume-cta-desc">
            The complete work history, skills, and project details — in one PDF.
          </p>
          <div className="resume-actions">
            <a href={cvHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              View résumé
            </a>
            <a href={cvHref} download className="btn btn-ghost">
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
