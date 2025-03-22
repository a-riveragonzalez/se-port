import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid2, TextField } from "@mui/material";

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
      <Grid2 container spacing={2} sx={{ width: "100%" }}>
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{ pr: { xs: 0, md: 10, lg: 15 } }}
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
          <Typography variant="body1" color="text.secondary">
            Feel free contact with me, I am always ready to help.
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" multiline
          rows={4}/>
        </Grid2>

        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{ width: "250px", height: "250px", backgroundColor: "red" }}
          >

          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}
