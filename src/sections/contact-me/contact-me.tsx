import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export default function ContactMe() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 5, md: 10 },
        textAlign: "left",
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        sx={{
          color: "secondary.main",
        }}
      >
        --- Contact Me ---
      </Typography>
      <Typography
        variant="h4"
        component="h3"
        sx={{
          color: "text.primary",
          fontWeight: 800,
        }}
      >
        Get in Touch
      </Typography>


    </Container>
  );
}
