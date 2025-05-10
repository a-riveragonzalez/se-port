"use client";
import { useEffect, useRef, useState } from "react";

import {
  Typography,
  Box,
  Container,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AccentLine from "@/components/accent-line";
import ProjectCard from "./project-card";

import tattooImage1 from "../../assets/images/projects/tattoo_artist_1.png";
import iChooseYouImage from "../../assets/images/projects/i_choose_you.png";
import impulseImage from "../../assets/images/projects/impulse_the_game.png";
import reduxStoreImage from "../../assets/images/projects/redux_store.png";

const projects = [
  {
    id: 1,
    icon: tattooImage1.src,
    title: "Tattoo Shop",
    websiteLink: "https://tattoos.vercel.app/",
    githubLink: "https://github.com/a-riveragonzalez/tattoos",
    description:
      "A mobile responsive website that showcases the artistry and services of a tattoo studio using Next.js and Tailwind. The form uses NodeMailer to send emails directly to the artist.",
  },
  {
    id: 2,
    icon: iChooseYouImage.src,
    title: "I Choose You",
    websiteLink: "",
    githubLink: "https://github.com/a-riveragonzalez/i-choose-you",
    description:
      "A responsive MERN dating web application that allows users to create Pokemon-themed profiles, take a quiz to determine their Pokemon, and match with other users to chat.",
  },
  {
    id: 3,
    icon: impulseImage.src,
    title: "Impulse The Game",
    websiteLink: "",
    githubLink: "https://github.com/LujanSolo/Impulse",
    description:
      "A full stack board game where your character advances and is compelled to buy an Item card or choose a Life Event Card that will impact your total Money and Mood Levels.",
  },
  {
    id: 4,
    icon: reduxStoreImage.src,
    title: "Redux Store",
    websiteLink: "",
    githubLink: "https://github.com/a-riveragonzalez/redux-store",
    description:
      "A full stack responsive MERN e-commerce web application that uses Redux to allow users to log in, browse products, add products to a cart, and checkout with stripe.",
  },
  // {
  //   id: 5,
  //   icon: tattooImage1.src,
  //   title: "extra example 1",
  //   websiteLink: "",
  //   githubLink: "",
  //   description:
  //     "A full stack board game where your character advances and is compelled to buy an Item card or choose a Life Event Card that will impact your total Money and Mood Levels.",
  // },
  // {
  //   id: 6,
  //   icon: tattooImage1.src,
  //   title: "extra example 2",
  //   websiteLink: "",
  //   githubLink: "",
  //   description:
  //     "A full stack responsive MERN e-commerce web application that uses Redux to allow users to log in, browse products, add products to a cart, and checkout with stripe.",
  // },
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

  const isTouchDevice = useMediaQuery("(hover: none) and (pointer: coarse)");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Determine items per slide based on screen size
  const itemsPerSlide = isTablet ? 2 : isMobile ? 1 : 4;

  // Calculate total number of slides needed
  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  // Handle slide change with smooth scrolling
  const handleSlideChange = (index: number) => {
    const validIndex = Math.max(0, Math.min(index, totalSlides - 1));
    setCurrentIndex(validIndex);
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: validIndex * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Touch event handlers - only used on touch devices
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isTouchDevice) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current || !isTouchDevice) return;
    const x = e.touches[0].clientX;
    const walk = (startX - x) * 2;
    carouselRef.current.scrollLeft += walk;
    setStartX(x);
  };

  const handleTouchEnd = () => {
    if (!isDragging || !carouselRef.current || !isTouchDevice) return;
    setIsDragging(false);

    // Snap to closest slide
    const scrollAmount = carouselRef.current.offsetWidth;
    const newIndex = Math.round(carouselRef.current.scrollLeft / scrollAmount);
    handleSlideChange(newIndex);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handleSlideChange(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        handleSlideChange(currentIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const scrollAmount = carouselRef.current.offsetWidth;
        carouselRef.current.scrollTo({
          left: currentIndex * scrollAmount,
          behavior: "auto",
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

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
          opacity: isLightMode ? 0.95 : 0.5,
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
        id="projects"
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

        {/* Carousel container with touch handlers only for mobile */}
        <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
          <Box
            ref={carouselRef}
            sx={{
              display: "flex",
              width: "100%",
              overflowX: "hidden",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              WebkitOverflowScrolling: "touch",
              cursor: isTouchDevice && isDragging ? "grabbing" : "default",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <Box
                key={slideIndex}
                sx={{
                  flex: "0 0 100%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 3,
                  padding: 1,
                }}
              >
                {projects
                  .slice(
                    slideIndex * itemsPerSlide,
                    (slideIndex + 1) * itemsPerSlide
                  )
                  .map((project) => (
                    <Box
                      key={project.id}
                      sx={{
                        width: {
                          xs: "100%",
                          sm: isTablet
                            ? "calc(50% - 12px)"
                            : "calc(25% - 18px)",
                          md: "calc(25% - 18px)",
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
        </Box>

        {/* Enhanced pagination dots with animated width */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 3,
            alignItems: "center",
            height: 16,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <Box
              key={index}
              onClick={() => handleSlideChange(index)}
              sx={{
                height: 8,
                width: index === currentIndex ? 32 : 8, // 4x wider when active
                borderRadius: 4,
                backgroundColor:
                  index === currentIndex ? "secondary.main" : "grey.400",
                cursor: "pointer",
                transition: "width 0.3s ease, background-color 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
