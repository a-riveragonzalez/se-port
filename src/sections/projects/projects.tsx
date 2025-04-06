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
    description: "A mobile responsive website that showcases the artistry and services of a tattoo studio using Next.js and Tailwind. The form uses NodeMailer to send emails directly to the artist."
  },
  {
    id: 2,
    icon: tattooImage1.src,
    title: "I Choose You",
    websiteLink: '',
    githubLink: '',
    description: "A responsive MERN dating web application that allows users to create Pokemon-themed profiles, take a quiz to determine their Pokemon, and match with other users to chat."
  },
  {
    id: 3,
    icon: tattooImage1.src,
    title: "Impulse The Game",
    websiteLink: '',
    githubLink: '',
    description: "A full stack board game where your character advances and is compelled to buy an Item card or choose a Life Event Card that will impact your total Money and Mood Levels."
  },
  {
    id: 4,
    icon: tattooImage1.src,
    title: "Redux Store",
    websiteLink: '',
    githubLink: '',
    description: "A full stack responsive MERN e-commerce web application that uses Redux to allow users to log in, browse products, add products to a cart, and checkout with stripe."
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
