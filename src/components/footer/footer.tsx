import * as React from "react";
import Iconify from "../iconify";
import { IconButton, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        mt: 6,
        mb: 4,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* GitHub */}
      <IconButton
        href="https://github.com/a-riveragonzalez"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "text.primary" }}
      >
        <Iconify width={30} icon="fa6-brands:github" />
      </IconButton>

      {/* LinkedIn */}
      <IconButton
        href="https://www.linkedin.com/in/arelyriveragonzalez"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "text.primary" }}
      >
        <Iconify width={30} icon="fa6-brands:linkedin" />
      </IconButton>
    </Stack>
  );
}
