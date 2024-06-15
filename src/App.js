import React from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { About } from "./components/about";
import { Resume } from "./components/resume";
import { Testimonials } from "./components/testimonials";

// constants
import { PERSONA } from "./constants/persona";

export const App = () => (
  <div className="App">
    <Header social={PERSONA.SOCIAL} />
    <About data={PERSONA.MAIN} />
    <Resume
      privacy_policies={PERSONA.RESUME.PRIVACY_POLICIES}
      skills={PERSONA.RESUME.SKILLS}
    />
    <Testimonials testimonials={PERSONA.TESTIMONIALS} />
    <Footer social={PERSONA.SOCIAL} />
  </div>
);
