import * as React from "react";
import Container from "@mui/material/Container";
import Hero from "@/sections/hero";
import AboutMe from "@/sections/about-me";
import WhatIDo from "@/sections/what-i-do";
import Projects from "@/sections/projects";
import Skills from "@/sections/skills";
import Testimonials from "@/sections/testimonials";
import ContactMe from "@/sections/contact-me";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box >  
      <Hero />
      <AboutMe />
      <WhatIDo />
      <Projects />
      <Skills />
      <Testimonials />
      <ContactMe />
    </Box>
  );
}
