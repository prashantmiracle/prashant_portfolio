import React from "react";
import "./body.css";

import { Projects } from "./projects";
import { Skills } from "./skills";
import { Work } from "./work";
import { Contact } from "./contact/Index";
import { About } from "./about";
import { Education } from "./Education";

export default function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
