import React, { useState, useEffect } from "react";
import "./style.css";
import { VscMenu, VscClose } from "react-icons/vsc";
import Themetoggle from "../components/themetoggle";

const links = [
  { href: "#about", num: "01", label: "about" },
  { href: "#skills", num: "02", label: "stack" },
  { href: "#experience", num: "03", label: "work" },
  { href: "#projects", num: "04", label: "projects" },
  { href: "#resume", num: "05", label: "résumé" },
  { href: "#contact", num: "06", label: "contact" },
];

const Headermain = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="nav-brand" onClick={close}>
          sandesh<span className="brand-accent">.</span>
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              <span className="c-dim">{l.num}.</span> {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <Themetoggle />
          <button
            className="nav-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <VscClose /> : <VscMenu />}
          </button>
        </div>
      </div>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            <span className="c-dim">{l.num}.</span> {l.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Headermain;
