import * as React from "react";
import Image from "next/image";

import { Box, Container, Grid2, Typography } from "@mui/material";

import fullStackDev from "@/assets/images/fullstackdev.png";
import ServiceCard from "./service-card";

const services = [
  {
    id: 1,
    icon: fullStackDev.src,
    title: "Full Stack Development",
    description: "Leveraging the power of TypeScript, JavaScript, and modern frameworks to build robust web applications."
  },
  {
    id: 2,
    icon: fullStackDev.src,
    title: "Front-End Excellence",
    description: "Creating dynamic, responsive user interfaces with React and Next.js."
  },
  {
    id: 3,
    icon: fullStackDev.src,
    title: "Back-End & API Development",
    description: "Designing and implementing efficient RESTful and GraphQL APIs with Node.js."
  },
  {
    id: 4,
    icon: fullStackDev.src,
    title: "Cloud & Database Expertise",
    description: "Utilizing AWS services and PostgreSQL to develop scalable, data-driven solutions."
  }
];

export default function WhatIDo() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 5, md: 10 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        sx={{
          color: "secondary.main",
        }}
      >
        --- What I Do ---
      </Typography>
      <Typography
        variant="h4"
        component="h3"
        sx={{
          color: "text.primary",
          fontWeight: 800,
        }}
      >
        Bringing Ideas to Life
        <br />
        with Code
      </Typography>

      <Grid2 container spacing={2} sx={{ mt: 2 }}>
        {services.map((service) => (
          <Grid2 size={{xs: 12, sm: 6, md: 3}} key={service.id}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}
