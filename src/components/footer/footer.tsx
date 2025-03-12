import * as React from "react";
import Iconify from "../iconify";
import { Stack } from "@mui/material";

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
      <Iconify width={24} icon="octicon:mark-github-16" />
      <Iconify width={30} icon="mdi:linkedin" />
    </Stack>
  );
}
