import React, { useState, useEffect } from "react";
import { SectionHeading } from "./Terminal";
import { dataportfolio } from "../content_option";

export const Projects = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading index="04" title="Selected Work" />

        <div className="repo-grid">
          {dataportfolio.map((p, i) => (
            <article
              className="repo"
              key={i}
              onClick={() => setActive(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setActive(p))}
            >
              <div className="repo-top">
                <span className="repo-mono">{p.monogram}</span>
                <span className="repo-company">{p.company}</span>
              </div>
              <h3 className="repo-title">{p.title}</h3>
              <p className="repo-tagline">{p.tagline}</p>
              <p className="repo-desc">{p.description}</p>
              <div className="repo-tech">
                {p.technologies.slice(0, 4).map((t, j) => (
                  <span className="tech-tag" key={j}>{t}</span>
                ))}
                {p.technologies.length > 4 && (
                  <span className="tech-tag more">+{p.technologies.length - 4}</span>
                )}
              </div>
              <div className="repo-foot">
                <span className="repo-open">View details</span>
                <span className="repo-arrow">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div className="modal-overlay" onClick={() => setActive(null)}>
          <div className="term modal-term" onClick={(e) => e.stopPropagation()}>
            <div className="term-bar">
              <span className="term-dots">
                <i className="term-dot r" onClick={() => setActive(null)} style={{ cursor: "pointer" }} />
                <i className="term-dot y" />
                <i className="term-dot g" />
              </span>
              <span className="term-title">{active.title}</span>
              <button className="modal-close" onClick={() => setActive(null)} aria-label="Close">
                ✕
              </button>
            </div>
            <div className="term-body modal-body">
              <div className="modal-head" style={{ backgroundImage: active.gradient }}>
                <span className="modal-mono">{active.monogram}</span>
                <div>
                  <h3 className="modal-title">{active.title}</h3>
                  <p className="modal-sub">{active.company}</p>
                </div>
              </div>

              <p className="modal-p">{active.longDescription || active.description}</p>

              <h4 className="modal-h">Key features</h4>
              <ul className="modal-features">
                {(active.features || []).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <h4 className="modal-h">Built with</h4>
              <div className="modal-tags">
                {active.technologies.map((t, i) => (
                  <span className="tech-tag" key={i}>{t}</span>
                ))}
              </div>

              {(active.playStoreLink || active.appStoreLink) && (
                <div className="modal-actions">
                  {active.playStoreLink && (
                    <a
                      href={active.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      Google Play
                    </a>
                  )}
                  {active.appStoreLink && (
                    <a
                      href={active.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                      App Store
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
