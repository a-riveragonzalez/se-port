import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid2, Stack } from "@mui/material";
import Iconify from "@/components/iconify";
import Image from "next/image";
import argPortrait from "@/assets/images/portrait.png";
import tempGroup1 from "@/assets/images/temp_group_1.png";

export default function HeroImage() {
  return (
    <>
      <Grid2
        direction="row"
        size={5}
        sx={{
        //   border: "1px solid red",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image
          alt="stack of project snapshots"
          src={tempGroup1.src}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
          width={500}
          height={500}
        />

        <Box sx={{ backgroundColor: "secondary.main", p: 1, borderRadius: 5 }}>
          <Typography
            variant="body1"
            align="center"
            sx={{ fontWeight: "bolder" }}
          >
            Languages I Work With
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: 2 }}
            justifyContent="center"
          >
            <Iconify icon="skill-icons:typescript" width={28} />
            <Iconify icon="skill-icons:javascript" width={28} />
            <Iconify icon="devicon:react" width={28} />
            <Iconify icon="devicon:nodejs-wordmark" width={28} />
            <Iconify icon="devicon:postgresql" width={28} />
            <Iconify icon="devicon:amazonwebservices-wordmark" width={28} />
          </Stack>
        </Box>
      </Grid2>

      <Grid2
        direction="row"
        size={5}
        sx={{
        //   border: "1px solid red",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          pl: 2,
          py: 2,
        }}
      >
        <Image
          alt="head shot"
          src={argPortrait.src}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
          width={500}
          height={500}
        />

        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 1 }}
          justifyContent="space-between"
        >
          <Iconify width={35} icon="fa6-brands:github" />
          <Iconify width={35} icon="fa6-brands:linkedin" />
          <Iconify width={38} icon="uiw:mail-o" />
        </Stack>
      </Grid2>
    </>
  );
}
