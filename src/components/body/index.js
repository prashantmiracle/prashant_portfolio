import React from "react";
import "./body.css";

import { Projects } from "./projects";
import { Skills } from "./skills";
import { Work } from "./work";
import { Contact } from "./contact/Index";
import { About } from "./about";
import { Educations } from "./educations";
import { Certificates } from "./certificates";

export default function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
        <section id="educations">
          <Educations />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="projects">
          <Projects />
        </section>
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
