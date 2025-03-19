"use client";

import * as React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

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
  iconWidth = 80,
  iconHeight = 80,
}: ServiceCardProps) {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "primary.main",
          borderRadius: 3,
          p: 2,
          mt: 6,
        }}
      >
        <Image
          src={icon}
          width={iconWidth}
          height={iconHeight}
          alt={`${title} icon`}
          style={{
            position: "absolute",
            top: "-40px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
            fontWeight: 800,
            mt: 3,
          }}
        >
          {title}
        </Typography>
      </Box>

      <Typography
          variant="body2"
          sx={{
            color: "text.primary",
          }}
        >
          {description}
        </Typography>
    </>
  );
}
