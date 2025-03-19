import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Grid2 } from '@mui/material';
import ProjectCard from './project-card';

const projects = [
  {
    id: 1,
    icon: '',
    title: "Full Stack Development",
    websiteLink: '', 
    githubLink: '',
    description: "Leveraging the power of TypeScript, JavaScript, and modern frameworks to build robust web applications."
  },
  {
    id: 2,
    icon: '',
    title: "Front-End Excellence",
    websiteLink: '', 
    githubLink: '',
    description: "Creating dynamic, responsive user interfaces with React and Next.js."
  },
  {
    id: 3,
    icon: '',
    title: "Back-End & API Development",
    websiteLink: '', 
    githubLink: '',
    description: "Designing and implementing efficient RESTful and GraphQL APIs with Node.js."
  },
  {
    id: 4,
    icon: '',
    title: "Cloud & Database Expertise",
    websiteLink: '', 
    githubLink: '',
    description: "Utilizing AWS services and PostgreSQL to develop scalable, data-driven solutions."
  }
];

export default function Projects() {
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
      --- My Projects ---
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
          <Grid2 size={{xs: 12, sm: 6, md: 3}} key={project.id}>
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
  );
}
