"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid2, Stack, useTheme } from "@mui/material";
import Iconify from "@/components/iconify";

export default function HeroContent() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        color: "text.primary",
        p: 2,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
        Hi, I'm Arely ~
      </Typography>
      <Typography
        variant="body2"
        color="secondary.main"
        sx={{ fontStyle: "italic", my: 1 }}
      >
        Software Engineer
        <span
          style={{
            color: theme.palette.text.primary,
            fontWeight: "bold",
            fontStyle: "normal",
            marginLeft: "0.1rem",
          }}
        >
          {" "}
          |{" "}
        </span>
        Problem Solver
        <span
          style={{
            color: theme.palette.text.primary,
            fontWeight: "bold",
            fontStyle: "normal",
            marginLeft: "0.1rem",
          }}
        >
          {" "}
          |{" "}
        </span>
        Full Stack Developer
      </Typography>
      <Typography variant="body1" sx={{ mt: 3, mb: 4 }}>
        I am a full-stack developer based in Los Angeles, specializing in
        building scalable, efficient, and user-friendly web applications.
        Passionate about creating seamless digital experiences with modern
        technologies.
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
      >
        <Button
          variant="contained"
          color="primary"
          href="#contact"
          sx={{ borderRadius: 10 }}
        >
          Get In Touch
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="https://drive.google.com/uc?export=download&id=1dmOgW6cLu2aiT7rZeJrUnvIi59QSXlVo"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ borderRadius: 10 }}
          endIcon={<Iconify icon="eva:download-outline" />}
        >
          Download Resume
        </Button>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        sx={{ mt: 4 }}
        justifyContent="space-between"
      >
        <Box>
          <Typography
            variant="h6"
            align="center"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            100+
          </Typography>
          <Typography variant="caption" sx={{ color: "text.primary" }}>
            Happy Clients
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            align="center"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            100+
          </Typography>
          <Typography variant="caption" sx={{ color: "text.primary" }}>
            Completed Projects
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            align="center"
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            5+
          </Typography>
          <Typography variant="caption" sx={{ color: "text.primary" }}>
            Years of Experience
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
