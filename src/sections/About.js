import React from "react";
import { SectionHeading } from "./Terminal";
import { dataabout, services } from "../content_option";

export const About = () => (
  <section id="about" className="section about">
    <div className="container">
      <SectionHeading index="01" title="About" />

      <div className="about-grid">
        <div className="about-text">
          <p>{dataabout.aboutme}</p>
          <p className="about-note">
            Currently sole architect of a live gaming &amp; language-learning platform,
            owning system design end-to-end.
          </p>
        </div>

        <div className="term about-code">
          <div className="term-bar">
            <span className="term-dots">
              <i className="term-dot r" />
              <i className="term-dot y" />
              <i className="term-dot g" />
            </span>
            <span className="term-title">developer.dart</span>
          </div>
          <div className="term-body code">
            <p><span className="ln">1</span><span className="c-purple">class</span> <span className="c-yellow">Developer</span> {"{"}</p>
            <p><span className="ln">2</span>  <span className="c-blue">String</span> name = <span className="c-green">'Sandesh Chapagai'</span>;</p>
            <p><span className="ln">3</span>  <span className="c-blue">String</span> role = <span className="c-green">'Flutter Architect'</span>;</p>
            <p><span className="ln">4</span>  <span className="c-blue">String</span> based = <span className="c-green">'Kathmandu, NP'</span>;</p>
            <p><span className="ln">5</span>  <span className="c-blue">List</span>&lt;<span className="c-blue">String</span>&gt; focus = [</p>
            <p><span className="ln">6</span>    <span className="c-green">'architecture'</span>, <span className="c-green">'complex UI'</span>,</p>
            <p><span className="ln">7</span>    <span className="c-green">'payments'</span>, <span className="c-green">'CI/CD'</span>,</p>
            <p><span className="ln">8</span>  ];</p>
            <p><span className="ln">9</span>  <span className="c-blue">bool</span> get available =&gt; <span className="c-purple">true</span>;</p>
            <p><span className="ln">10</span>{"}"}</p>
          </div>
        </div>
      </div>

      <h3 className="about-sub">What I do</h3>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <span className="service-idx">0{i + 1}</span>
            <h4 className="service-title">{s.title}</h4>
            <p className="service-desc">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
