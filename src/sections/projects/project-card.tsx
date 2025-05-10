"use client";

import * as React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import Iconify from "@/components/iconify";

// Define props interface for the component
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  websiteLink: string;
  githubLink: string;
  iconWidth?: number;
  iconHeight?: number;
}

export default function ProjectCard({
  icon,
  title,
  description,
  websiteLink,
  githubLink,
  iconWidth = 274,
  iconHeight = 202,
}: ServiceCardProps) {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";

  return (
    <>
      {/* Card with image and title */}
      <Box
        sx={{
          borderRadius: "25px",
          overflow: "visible",
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          border: isLightMode
            ? theme.palette.grey[400]
            : `1px solid ${theme.palette.grey[800]}`,
          backgroundColor: isLightMode
            ? theme.palette.background.default
            : "#26252b",
        }}
      >
        {/* Card Header with Title */}
        <Box sx={{ p: 2, pb: 1 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 600,
              fontSize: "1.1rem",
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Divider */}
        <Divider />

        {/* Image Container */}
        <Box sx={{ position: "relative", pt: 0, pb: 0 }}>
          <Box
            component="img"
            src={icon}
            alt={title}
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
              mt: 3,
            }}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: 8,
              right: 8,
              zIndex: 1,
              display: "flex",
              gap: 1,
            }}
          >
            {/* GitHub Button */}
            {githubLink && (
              <IconButton
                aria-label="View on GitHub"
                sx={{
                  backgroundColor: theme.palette.grey[900],
                  color: "white",
                  "&:hover": {
                    backgroundColor: theme.palette.grey[800],
                  },
                  width: 40,
                  height: 40,
                }}
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Iconify icon="fa6-brands:github" width={22} />
              </IconButton>
            )}

            {/* Website Button */}
            {websiteLink && (
              <IconButton
                aria-label="Visit website"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                  width: 40,
                  height: 40,
                }}
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Iconify icon="mdi:web" width={22} />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>

      <Typography
        variant="body2"
        sx={{
          color: "text.primary",
          textAlign: "left",
          mt: 1,
        }}
      >
        {description}
      </Typography>
    </>
  );
}
