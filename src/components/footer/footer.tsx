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
      <Iconify width={30} icon="fa6-brands:github" />
      <Iconify width={30} icon="fa6-brands:linkedin" />
    </Stack>
  );
}
