import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid2 } from "@mui/material";
import HeroContent from "./hero-content";
import HeroImage from "./hero-image";

export default function Hero() {
  return (
    <Box
      sx={{
        mt: 10,
        color: "text.secondary",
      }}
    >
      <Grid2 container >
        <Grid2
          container
          direction="column"
          size={{ xs: 12, md: 6 }}
          sx={{
            // border: "1px solid red",
            justifyContent: "center",
            alignItems: "center",
            pr: { xs: 0, md: 4 },
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
            pl: { xs: 0, md: 1 },
          }}
        >
          <HeroImage />
        </Grid2>
      </Grid2>
    </Box>
  );
}
