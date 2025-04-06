"use client";

import * as React from "react";
import Image from "next/image";

import {
  Box,
  Container,
  Typography,
  Theme,
  useMediaQuery,
  useTheme,
  Grid2,
  Stack,
  Button,
} from "@mui/material";

import techImageDesktop from "@/assets/images/desktop/about-me-tech-d.png";
import techImageMobile from "@/assets/images/mobile/about-me-tech-m.png";
import AccentLine from "@/components/accent-line";

export default function AboutMe() {
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
            ? "url(/assets/backgrounds/mobile/about-me-bg-m.png)"
            : "url(/assets/backgrounds/desktop/about-me-bg-d.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Content container */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
          minHeight: "400px", // Add a minimum height for better visibility
          py: { xs: 5, md: 10 }, // Add some padding
        }}
      >
        <Grid2 container spacing={2} sx={{ width: "100%" }}>
          <Grid2
            size={{ xs: 12, md: 6 }}
            order={{ xs: 2, md: 1 }}
            sx={{ pr: { xs: 0, md: 10, lg: 15 } }}
          >
            <Image
              alt="stack of project snapshots"
              src={isMobile ? techImageMobile.src : techImageDesktop.src}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              width={500}
              height={500}
            />
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 6 }}
            order={{ xs: 1, md: 2 }}
            sx={{
              textAlign: { xs: "center", md: "left" },
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
            About Me
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
            Behind the Code:
            <br />
            My Journey in Tech
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mt: 2,
            }}
          >
            I'm a Full Stack Developer with a Bachelor's Degree in Psychology
            from Antioch University. I recently earned a certificate in Full
            Stack Development at UCLA Extension, acquiring skills in
            JavaScript, CSS, React.js, and responsive web design. I am
            passionate about creating efficient applications with an
            intuitive, user friendly interface. I have been recognized as
            proactive, collaborative, and a persistent problem-solver. I am
            also an excellent communicator with experience in effective client
            relationship-building skills.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: { xs: "center", md: "flex-start" },
              my: 4,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              sx={{ borderRadius: 10 }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href="#contained-buttons"
              sx={{ borderRadius: 10 }}
            >
              Contact Me
            </Button>
          </Stack>
        </Grid2>
      </Grid2>
    </Container>
    </Box >
  );
}
