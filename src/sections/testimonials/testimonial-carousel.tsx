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
    name: "Steven Barrios",
    title: "Software Engineer",
    company: "KARRASS Effective Negotiating",
    text: "I’ve had the pleasure of working with Arely at Bloksy, and I can confidently say that she is one of the most brilliant and hardworking individuals I’ve come across as a software developer. Arely’s ability to understand complex problems and find effective solutions is truly remarkable. She has led group challenges with confidence and demonstrated a clear, methodical approach to problem-solving—delivering solutions that are clean, efficient, and easy to understand. I have no doubt that Arely will be an asset to any team, bringing integrity, discipline, and an unmatched drive for excellence that consistently inspires those around her.",
    avatar: undefined, // "/assets/avatars/avatar1.png",
  },
  {
    id: 2,
    name: "Gil Klein",
    title: "CEO",
    company: "Quartz Digital Agency",
    text: "I was fortunate enough to work with Arely during my time at i-Showcase. Her ability to provide technical support with reassurance and good morale made her a unique talent in the office. All of our customers spoke highly of her ability to guide them through issues with their website, and oftentimes she would provide assistance making good use of her web development knowledge. \n \n Outside of work, Arely and I studied software development together. Our mutual studies included the basics (HTML, CSS, JavaScript, Jquery, and Git/GitHub) as well as more complex front-end frameworks (React, Angular, Vue, and Next.js) and full-stack applications (with an emphasis on NoSQL databases such as MongoDB or Firebase). She has shown herself to be a well of information on a variety of subjects and is as great at accomplishing tasks as she is educating others on how to do so. \n \n Overall, I highly recommend Arely for any web development role, specifically those where full-stack JavaScript stacks are utilized. She is a valuable addition to any team!",
    avatar: undefined, // "/assets/avatars/avatar2.png",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "CEO",
    company: "StartUp Ventures",
    text: "Arely helped transform our vision into reality. Her full-stack expertise and dedication to quality were instrumental in launching our platform on time and under budget.",
    avatar: undefined, // "/assets/avatars/avatar3.png",
  },
  {
    id: 4,
    name: "Emily Williams",
    title: "Lead Designer",
    company: "Creative Works",
    text: "I've worked with many developers, but Arely stands out for her ability to translate designs into pixel-perfect implementations while maintaining excellent code quality.",
    avatar: undefined, // "/assets/avatars/avatar4.png",
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            height: 16,
            mt: 1.5,
          }}
        >
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

  // State to track if full text is shown (only for active testimonial)
  const [showFullText, setShowFullText] = useState(false);

  // Define the maximum length before clipping
  const MAX_TEXT_LENGTH = 150;

  // Function to truncate text at the end of a word
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;

    // Find the last space before maxLength
    const lastSpaceIndex = text.lastIndexOf(" ", maxLength);

    // If no space found, just truncate at maxLength
    const truncatedText =
      lastSpaceIndex > 0
        ? text.substring(0, lastSpaceIndex)
        : text.substring(0, maxLength);

    return `${truncatedText}...`;
  };

  // Check if text should be clipped
  const isTextLong = testimonial.text.length > MAX_TEXT_LENGTH;

  // For inactive cards: always truncate
  // For active cards: show full text if showFullText is true, otherwise truncate
  const displayedText =
    !isActive || (isActive && !showFullText && isTextLong)
      ? truncateText(testimonial.text, MAX_TEXT_LENGTH)
      : testimonial.text;

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
      {/* <Typography
        variant="body2"
        sx={{
          flex: 1,
          mb: 2,
          color: !isActive ? inActiveCardColor : "black",
        }}
      >
        {testimonial.text}
      </Typography> */}
      <Box sx={{ flex: 1, position: "relative" }}>
        <Typography
          variant="body2"
          sx={{
            mb: isActive && isTextLong ? 1 : 2,
            color: !isActive ? inActiveCardColor : "black",
          }}
        >
          {displayedText}
        </Typography>

        {/* Only show See More/Less button for active testimonial AND if text is long */}
        {isActive && isTextLong && (
          <Typography
            variant="body1"
            onClick={() => setShowFullText(!showFullText)}
            sx={{
              color: "secondary.main",
              fontWeight: "bold",
              cursor: "pointer",
              display: "inline-block",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {showFullText ? "See Less" : "See More"}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;
