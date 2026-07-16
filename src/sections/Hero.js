import React from "react";
import Typewriter from "typewriter-effect";
import { introdata, stats } from "../content_option";

export const Hero = () => (
  <section id="home" className="hero section">
    <div className="hero-grid container">
      <div className="hero-left">
        <span className="badge">
          <span className="badge-dot" />
          Available for new projects
        </span>

        <p className="hero-kicker">Hi, my name is</p>
        <h1 className="hero-name">Sandesh Chapagai</h1>
        <h2 className="hero-role">
          <span className="hero-role-tw">
            <Typewriter
              options={{
                strings: [
                  introdata.animated.first,
                  introdata.animated.second,
                  introdata.animated.third,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 12,
              }}
            />
          </span>
        </h2>
        <p className="hero-desc">{introdata.description}</p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View my work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>

        <div className="hero-stats">
          {stats.map((s, i) => (
            <div className="hstat" key={i}>
              <span className="hstat-val">{s.value}</span>
              <span className="hstat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-right">
        <div className="term term-hero">
          <div className="term-bar">
            <span className="term-dots">
              <i className="term-dot r" />
              <i className="term-dot y" />
              <i className="term-dot g" />
            </span>
            <span className="term-title">~/profile</span>
          </div>
          <div className="term-body">
            <p className="term-line"><span className="tprompt">$</span> whoami</p>
            <p className="term-out">Flutter Developer &amp; Mobile Architect</p>
            <p className="term-line"><span className="tprompt">$</span> focus</p>
            <p className="term-out">Architecture · Complex UI · Payments · CI/CD</p>
            <p className="term-line"><span className="tprompt">$</span> location</p>
            <p className="term-out">Kathmandu, Nepal — remote-friendly</p>
            <p className="term-line"><span className="tprompt">$</span> <span className="term-cursor">▊</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
