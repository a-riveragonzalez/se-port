"use client";

import * as React from "react";
import Image from "next/image";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography, useTheme } from "@mui/material";
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
  
  return (
    <>
      {/* <Card
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
      </Card> */}

         {/* Card with image and title */}
         <Box
        sx={{
          borderRadius: '25px',
          overflow: 'visible',
          boxShadow: 3,
          // height: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: `1px solid ${theme.palette.grey[800]}`
        }}
      >
        {/* Card Header with Title */}
        <Box sx={{ p: 2, pb: 1 }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 600,
              fontSize: '1.1rem',
            }}
          >
            {title}
          </Typography>
        </Box>
        
        {/* Divider */}
        <Divider />
        
        {/* Image Container */}
        <Box sx={{ position: 'relative', pt: 3 }}>
          <Box
            component="img"
            src={icon}
            alt={title}
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',

            }}
          />
          
          {/* Link Button - positioned at bottom right of image */}
          {/* <Box
            sx={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              zIndex: 1,
            }}
          >
            <Button
              aria-label="Visit website"
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: 'white',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                },
                width: 40,
                height: 40,
              }}
              href={"/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Iconify icon="mdi:web" width={24} />
            </Button>
          </Box> */}
          
          {/* GitHub Button - positioned next to the link button */}
          {/* <Box
            sx={{
              position: 'absolute',
              bottom: 10,
              right: 60, // Position it to the left of the website button
              zIndex: 1,
            }}
          >
            <Button
              aria-label="View on GitHub"
              sx={{
                backgroundColor: 'black',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#333',
                },
                width: 40,
                height: 40,
              }}
              href={"/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Iconify icon="fa6-brands:github" width={24} />
            </Button>
          </Box> */}
        </Box>
      </Box>


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
