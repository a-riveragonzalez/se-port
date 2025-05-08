import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Grid2, IconButton, Stack } from "@mui/material";
import Iconify from "@/components/iconify";
import Image from "next/image";
import argPortrait from "@/assets/images/portrait.png";
import tempGroup1 from "@/assets/images/temp_group_1.png";

export default function HeroImage() {
  return (
    <>
      <Grid2
        size={5}
        sx={{
          //   border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          height: "100%",
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

        <Box
          sx={{
            backgroundColor: "secondary.main",
            p: 1,
            borderRadius: 5,
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            align="center"
            sx={{ fontWeight: "bolder", fontSize: "1.1rem" }}
          >
            Languages I Work With
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: 2 }}
            justifyContent="center"
          >
            <Iconify icon="skill-icons:typescript" width={40} />
            <Iconify icon="skill-icons:javascript" width={40} />
            <Iconify icon="devicon:react" width={40} />
            <Iconify icon="devicon:nodejs-wordmark" width={40} />
            <Iconify icon="devicon:postgresql" width={40} />
            <Iconify icon="devicon:amazonwebservices-wordmark" width={40} />
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
          {/* GitHub */}
          <IconButton
            href="https://github.com/a-riveragonzalez"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "text.primary" }}
          >
            <Iconify width={35} icon="fa6-brands:github" />
          </IconButton>

          {/* LinkedIn */}
          <IconButton 
            href="https://www.linkedin.com/in/arelyriveragonzalez" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ color: "text.primary" }}
          >
            <Iconify width={35} icon="fa6-brands:linkedin" />
          </IconButton>
          
          {/* Contact section */}
          <IconButton 
            href="#contact"
            sx={{ color: "text.primary" }}
          >
            <Iconify width={38} icon="uiw:mail-o" />
          </IconButton>
        </Stack>
      </Grid2>
    </>
  );
}
