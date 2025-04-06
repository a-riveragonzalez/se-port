import * as React from 'react';
import { Box, useTheme } from '@mui/material';
import Iconify from '@/components/iconify'; // Assuming you're using your Iconify component

// Component for the diagonal stripe with repeating words
export function DiagonalWordStripe() {
  const theme = useTheme();
  const skills = ["API Development", "Back-End", "Cloud", "Database", "Full Stack", "Dashboard", "Front-End"];
  
  // Create array with repeated words to ensure it fills the stripe
  const repeatedSkills = [...skills, ...skills, ...skills]; // Repeat 3 times
  
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: {xs: '83px', xl: '100px'},
        overflow: 'hidden',
        my: 4, // Add margin for spacing
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '-5%', // Start outside the viewport
          right: '-5%', // Extend outside the viewport
          height: '39.1%',
          backgroundColor: theme.palette.primary.main,
          transform: 'translateY(-50%) rotate(-2.03deg)',
          display: 'flex',
          alignItems: 'center',
          py: '5px',
          whiteSpace: 'nowrap',
        //   border: '1px solid black',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            // animation: 'scrollText 30s linear infinite',
            // '@keyframes scrollText': {
            //   '0%': { transform: 'translateX(0%)' },
            //   '100%': { transform: 'translateX(-50%)' }, // Scroll half distance for seamless loop
            // },
          }}
        >
          {repeatedSkills.map((skill, index) => (
            <React.Fragment key={index}>
              <Box
                component="span"
                sx={{
                  color: 'white',
                  fontWeight: 500,
                  mx: '5px',
                }}
              >
                {skill}
              </Box>
              <Iconify
                icon="ph:star-four-fill"
                width={16}
                sx={{ 
                  color: 'secondary.main',
                  mx: '5px',
                }}
              />
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
