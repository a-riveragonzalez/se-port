"use client";

import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid2, Theme, useMediaQuery, useTheme } from '@mui/material';
import ProjectCard from './project-card';

import tattooImage1 from '../../assets/images/projects/tattoo_artist_1.png'
import AccentLine from '@/components/accent-line';

const projects = [
  {
    id: 1,
    icon: tattooImage1.src,
    title: "Tattoo Shop",
    websiteLink: '',
    githubLink: '',
    description: "Leveraging the power of TypeScript, JavaScript, and modern frameworks to build robust web applications."
  },
  {
    id: 2,
    icon: tattooImage1.src,
    title: "Tattoo Shop",
    websiteLink: '',
    githubLink: '',
    description: "Creating dynamic, responsive user interfaces with React and Next.js."
  },
  {
    id: 3,
    icon: tattooImage1.src,
    title: "Tattoo Shop",
    websiteLink: '',
    githubLink: '',
    description: "Designing and implementing efficient RESTful and GraphQL APIs with Node.js."
  },
  {
    id: 4,
    icon: tattooImage1.src,
    title: "Tattoo Shop",
    websiteLink: '',
    githubLink: '',
    description: "Utilizing AWS services and PostgreSQL to develop scalable, data-driven solutions."
  }
];

export default function Projects() {
  const theme = useTheme();

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const isLightMode = theme.palette.mode === "light";

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background color layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: isLightMode ? "#fdfdfd" : "#1D1419",
          opacity: isLightMode ? 0.7 : 0.5,
          zIndex: 1,
        }}
      />

      {/* Background image layer with 30% opacity */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: isMobile
            ? "url(/assets/backgrounds/mobile/project-bg-m.png)"
            : "url(/assets/backgrounds/desktop/project-bg-d.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
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
          <AccentLine /> 
          My Projects 
          <AccentLine />
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          sx={{
            color: "text.primary",
            fontWeight: 800,
          }}
        >
          Crafting Solutions:
          <br />
          My Work in Action
        </Typography>

        <Grid2 container spacing={3} sx={{ mt: 2 }}>
          {projects.map((project) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={project.id}>
              <ProjectCard
                icon={project.icon}
                title={project.title}
                description={project.description}
                websiteLink={project.websiteLink}
                githubLink={project.githubLink}
              />
            </Grid2>
          ))}
        </Grid2>

      </Container>
    </Box>
  );
}
