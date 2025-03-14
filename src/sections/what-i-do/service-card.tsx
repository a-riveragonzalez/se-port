"use client";

import * as React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

// Define props interface for the component
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  iconWidth?: number;
  iconHeight?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  iconWidth = 80,
  iconHeight = 80,
}: ServiceCardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "primary.main",
        borderRadius: 3,
        p: 2,
        mt: 6,
        height: "calc(100% - 40px)", // This ensures all cards have the same height
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
      <Typography
        variant="body2"
        sx={{
          color: "text.primary",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}