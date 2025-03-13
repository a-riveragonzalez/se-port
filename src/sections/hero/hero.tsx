'use client';

import * as React from "react";
import { Box, Container, Grid2, Theme, useMediaQuery, useTheme } from "@mui/material";
import HeroContent from "./hero-content";
import HeroImage from "./hero-image";
import ArelyNameDarkMode from "@/assets/images/arely_dark_mode.png";
import ArelyNameLightMode from "@/assets/images/arely_light_mode.png";
import Image from "next/image";

export default function Hero() {
  const theme = useTheme();

  const isLightMode = theme.palette.mode === 'light';

  const ArelyName = isLightMode ? ArelyNameLightMode : ArelyNameDarkMode;


  return (
    <Container
      sx={{
        pt: { xs: 10, md: 20 },
        mb: { xs: 5, md: 10 },
        color: "text.secondary",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: -1,
          height: {xs: 'auto', md:'100%'},
          top: { xs: "5%", sm: "2%", md: "1%" },
          left: { xs: "5%", sm: "4%", md: "5%" },
        }}
      >
        <Image
          src={ArelyName.src}
          alt="Arely written vertically"
          width={500}
          height={400}
          style={{
            width: "auto",
            height: "100%",
            objectFit: "cover",
            opacity: 0.05,
          }}
        />
      </Box>

      <Grid2 container>
        <Grid2
          container
          direction="column"
          size={{ xs: 12, md: 6 }}
          sx={{
            // border: "1px solid red",
            justifyContent: "center",
            alignItems: "center",
            pr: { xs: 0, md: 5, lg: 10 },
          }}
        >
          <HeroContent />
        </Grid2>

        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "row",
            // border: "1px solid red",
            justifyContent: "center",
            alignItems: "center",
            // pl: { xs: 0, md: 1 },
          }}
        >
          <HeroImage />
        </Grid2>
      </Grid2>
    </Container>
  );
}
