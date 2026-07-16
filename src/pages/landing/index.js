import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import Hero from "../../sections/Hero";
import About from "../../sections/About";
import Skills from "../../sections/Skills";
import Experience from "../../sections/Experience";
import Projects from "../../sections/Projects";
import Resume from "../../sections/Resume";
import Contact from "../../sections/Contact";
import Footer from "../../sections/Footer";
import "./landing.css";

export const Landing = () => (
  <HelmetProvider>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{meta.title} — Flutter Developer &amp; Mobile Architect</title>
      <meta name="description" content={meta.description} />
    </Helmet>
    <main className="landing">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  </HelmetProvider>
);

export default Landing;
