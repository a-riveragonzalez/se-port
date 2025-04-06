"use client";

import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container, Theme, useMediaQuery, useTheme } from '@mui/material';
import AccentLine from '@/components/accent-line';

export default function Testimonials() {
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
          opacity: isLightMode ? 0.95 : 0.95,
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
            ? "url(/assets/backgrounds/mobile/testimonials-bg-m.png)"
            : "url(/assets/backgrounds/desktop/testimonials-bg-d.png)",
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
          Testimonials 
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
          What Others
          <br />
          Say About Me:
        </Typography>
      </Container>
    </Box>
  );
}
