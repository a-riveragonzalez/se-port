"use client";

import * as React from "react";
import Image from "next/image";
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
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
  return (
    <>
      <Card
        sx={{ maxWidth: 345, mt: 6, }}
      >
        <CardHeader
          title={title}
          // subheader="September 14, 2016"
          sx={{ borderRadius: '20px 20px 0 0 '}}
        />
        <CardMedia
          component="img"
          height="194"
          image={icon}
          alt={title}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Iconify width={30} icon="fa6-brands:github" />
          </IconButton>
        </CardActions>
      </Card>

      <Typography
        variant="body2"
        sx={{
          color: "text.primary",
          textAlign: 'left',
          mt: 1
        }}
      >
        {description}
      </Typography>
    </>
  );
}
