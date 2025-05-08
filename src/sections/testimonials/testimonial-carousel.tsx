"use client";

import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Theme,
  Avatar,
  Stack,
} from "@mui/material";
import Iconify from "@/components/iconify"; // Assuming you have this component

// Define the testimonial data structure
interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  text: string;
  avatar?: string;
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    title: "CTO",
    company: "Tech Solutions",
    text: "Arely is an exceptional developer who consistently delivers high-quality code. Her attention to detail and problem-solving skills made our project a success.",
    avatar: undefined // "/assets/avatars/avatar1.png",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Product Manager",
    company: "Digital Innovations",
    text: "Working with Arely was a pleasure. She understands requirements quickly and implements them with precision. Her technical skills combined with her communication made our collaboration seamless.",
    avatar: undefined // "/assets/avatars/avatar2.png",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "CEO",
    company: "StartUp Ventures",
    text: "Arely helped transform our vision into reality. Her full-stack expertise and dedication to quality were instrumental in launching our platform on time and under budget.",
    avatar: undefined // "/assets/avatars/avatar3.png",
  },
  {
    id: 4,
    name: "Emily Williams",
    title: "Lead Designer",
    company: "Creative Works",
    text: "I've worked with many developers, but Arely stands out for her ability to translate designs into pixel-perfect implementations while maintaining excellent code quality.",
    avatar: undefined // "/assets/avatars/avatar4.png",
  },
];

const TestimonialCarousel: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle moving to next testimonial
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to handle moving to previous testimonial
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Calculate indices for visible testimonials
  const prevIndex =
    (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (activeIndex + 1) % testimonials.length;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 2,
        mb: 6,
        position: "relative",
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          //   height: { xs: "400px", md: "300px" },
        }}
      >
        {/* Previous testimonial (left side) */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: "-10%", md: "5%" },
            width: { xs: "30%", md: "25%" },
            // opacity: 0.5,
            zIndex: 1,
            transform: "scale(0.85)",
            display: { xs: "none", md: "block" },
            transition: "all 0.3s ease",
          }}
        >
          <TestimonialCard
            testimonial={testimonials[prevIndex]}
            isActive={false}
          />
        </Box>

        {/* Active testimonial (center) */}
        <Box
          sx={{
            width: { xs: "80%", md: "50%" },
            zIndex: 2,
            transition: "all 0.3s ease",
          }}
        >
          <TestimonialCard
            testimonial={testimonials[activeIndex]}
            isActive={true}
          />
        </Box>

        {/* Next testimonial (right side) */}
        <Box
          sx={{
            position: "absolute",
            right: { xs: "-10%", md: "5%" },
            width: { xs: "30%", md: "25%" },
            // opacity: 0.5,
            zIndex: 1,
            transform: "scale(0.85)",
            display: { xs: "none", md: "block" },
            transition: "all 0.3s ease",
          }}
        >
          <TestimonialCard
            testimonial={testimonials[nextIndex]}
            isActive={false}
          />
        </Box>
      </Box>

      {/* Navigation buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 2,
        }}
      >
        <IconButton onClick={handlePrev} color="secondary">
          <Iconify icon="mdi:chevron-left" width={24} />
        </IconButton>

        {/* Dots for indicating position */}
        {/* <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveIndex(index)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor:
                  index === activeIndex ? "secondary.main" : "grey.400",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            />
          ))}
        </Box> */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, height: 16, mt: 1.5 }}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveIndex(index)}
              sx={{
                height: 8,
                width: index === activeIndex ? 32 : 8, // 4x wider when active
                borderRadius: 4,
                backgroundColor:
                  index === activeIndex ? "secondary.main" : "grey.400",
                cursor: "pointer",
                transition: "width 0.3s ease, background-color 0.3s ease",
              }}
            />
          ))}
        </Box>

        <IconButton onClick={handleNext} color="secondary">
          <Iconify icon="mdi:chevron-right" width={24} />
        </IconButton>
      </Box>
    </Box>
  );
};

// Individual testimonial card component
interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isActive,
}) => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";
  const inActiveCardColor = isLightMode ? "black" : "white";

  return (
    <Box
      sx={{
        backgroundColor: isActive
          ? !isLightMode
            ? "#d2d0d1" // Active in dark mode
            : theme.palette.background.paper // Active in light mode
          : !isLightMode
          ? "#3f3639" // Inactive in dark mode
          : theme.palette.background.default, // Inactive in light mode
        borderRadius: 2,
        p: 3,
        boxShadow: isActive ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Avatar and person info */}
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Stack sx={{ flexGrow: 1, justifyContent: "center", color: "black" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={testimonial.avatar || ""}
              alt={testimonial.name}
              sx={{
                width: 50,
                height: 50,
                mr: 2,
                color: "white",
              }}
            />
            <Box sx={{ color: !isActive ? inActiveCardColor : "" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                {testimonial.name}
              </Typography>
              <Typography sx={{ fontSize: "0.8rem" }}>
                {testimonial.title}, {testimonial.company}
              </Typography>
            </Box>
          </Box>
          <Stack direction="row" sx={{ mt: 1, alignItems: "center" }}>
            {[...Array(5)].map((_, index) => (
              <Iconify
                key={index}
                icon="material-symbols:star-rounded"
                width={26}
                sx={{ color: "secondary.main" }}
              />
            ))}
            <Typography
              variant="body1"
              sx={{ ml: 0.5, color: !isActive ? inActiveCardColor : "" }}
            >
              5.0
            </Typography>
          </Stack>
        </Stack>

        {/* Quote icon */}
        {isActive && (
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Iconify
              icon="tabler:quote-filled"
              width={100}
              sx={{ color: "#667085", opacity: 0.3 }}
            />
          </Box>
        )}
      </Stack>

      {/* Testimonial text */}
      <Typography
        variant="body2"
        sx={{
          flex: 1,
          mb: 2,
          color: !isActive ? inActiveCardColor : "black",
        }}
      >
        {testimonial.text}
      </Typography>
    </Box>
  );
};

export default TestimonialCarousel;
