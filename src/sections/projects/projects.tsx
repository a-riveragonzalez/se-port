"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Container,
  Grid2,
  IconButton,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProjectCard from "./project-card";

import tattooImage1 from "../../assets/images/projects/tattoo_artist_1.png";
import AccentLine from "@/components/accent-line";
import { useEffect, useRef, useState } from "react";
import Iconify from "@/components/iconify";

const projects = [
  {
    id: 1,
    icon: tattooImage1.src,
    title: "Tattoo Shop",
    websiteLink: "",
    githubLink: "",
    description:
      "A mobile responsive website that showcases the artistry and services of a tattoo studio using Next.js and Tailwind. The form uses NodeMailer to send emails directly to the artist.",
  },
  {
    id: 2,
    icon: tattooImage1.src,
    title: "I Choose You",
    websiteLink: "",
    githubLink: "",
    description:
      "A responsive MERN dating web application that allows users to create Pokemon-themed profiles, take a quiz to determine their Pokemon, and match with other users to chat.",
  },
  {
    id: 3,
    icon: tattooImage1.src,
    title: "Impulse The Game",
    websiteLink: "",
    githubLink: "",
    description:
      "A full stack board game where your character advances and is compelled to buy an Item card or choose a Life Event Card that will impact your total Money and Mood Levels.",
  },
  {
    id: 4,
    icon: tattooImage1.src,
    title: "Redux Store",
    websiteLink: "",
    githubLink: "",
    description:
      "A full stack responsive MERN e-commerce web application that uses Redux to allow users to log in, browse products, add products to a cart, and checkout with stripe.",
  },
  {
    id: 5,
    icon: tattooImage1.src,
    title: "extra example 1",
    websiteLink: "",
    githubLink: "",
    description:
      "A full stack board game where your character advances and is compelled to buy an Item card or choose a Life Event Card that will impact your total Money and Mood Levels.",
  },
  {
    id: 6,
    icon: tattooImage1.src,
    title: "extra example 2",
    websiteLink: "",
    githubLink: "",
    description:
      "A full stack responsive MERN e-commerce web application that uses Redux to allow users to log in, browse products, add products to a cart, and checkout with stripe.",
  },
];

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const isLightMode = theme.palette.mode === "light";

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Determine items per slide based on screen size
  const itemsPerSlide = isTablet ? 2 : isMobile ? 1 : 4;
  
  // Calculate total number of slides needed
  const totalSlides = Math.ceil(projects.length / itemsPerSlide);
  
  // Handle slide change with smooth scrolling instead of re-rendering
  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: index * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Handle window resize to keep carousel positioned correctly
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const scrollAmount = carouselRef.current.offsetWidth;
        carouselRef.current.scrollTo({
          left: currentIndex * scrollAmount,
          behavior: 'auto'
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background layers remain the same */}
      
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
            mb: 4,
          }}
        >
          Crafting Solutions:
          <br />
          My Work in Action
        </Typography>

        {/* Carousel container */}
        <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
          {/* Carousel slides */}
          <Box
            ref={carouselRef}
            sx={{
              display: 'flex',
              width: '100%',
              overflowX: 'hidden',
              scrollbarWidth: 'none', // Hide scrollbar for Firefox
              '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar for Chrome/Safari
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <Box 
                key={slideIndex}
                sx={{
                  flex: '0 0 100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: 3,
                  padding: 1,
                }}
              >
                {projects.slice(
                  slideIndex * itemsPerSlide, 
                  (slideIndex + 1) * itemsPerSlide
                ).map((project) => (
                  <Box 
                    key={project.id}
                    sx={{
                      width: {
                        xs: '100%',
                        sm: isTablet ? 'calc(50% - 12px)' : 'calc(25% - 18px)',
                        md: 'calc(25% - 18px)'
                      },
                    }}
                  >
                    <ProjectCard
                      icon={project.icon}
                      title={project.title}
                      description={project.description}
                      websiteLink={project.websiteLink}
                      githubLink={project.githubLink}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
          
          {/* Navigation arrows */}
          <IconButton
            onClick={() => handleSlideChange((currentIndex - 1 + totalSlides) % totalSlides)}
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: 0, sm: 0, md: -5 },
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
              zIndex: 2,
            }}
          >
            <Iconify icon="mdi:chevron-left" width={24} />
          </IconButton>
          
          <IconButton
            onClick={() => handleSlideChange((currentIndex + 1) % totalSlides)}
            sx={{
              position: 'absolute',
              top: '50%',
              right: { xs: 0, sm: 0, md: -5 },
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
              zIndex: 2,
            }}
          >
            <Iconify icon="mdi:chevron-right" width={24} />
          </IconButton>
        </Box>
        
        {/* Pagination dots */}
        <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <Box
              key={index}
              onClick={() => handleSlideChange(index)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: index === currentIndex ? 'secondary.main' : 'grey.400',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}