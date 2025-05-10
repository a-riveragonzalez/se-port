"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button, Container, Grid2 } from "@mui/material";
import Image from "next/image";
import portraitImage from "@/assets/images/portrait_circle.png";
import SkillGroupCard from "./skill-group-card";
import AccentLine from "@/components/accent-line";
import { DiagonalWordStripe } from "./diagonal-word-stripe";
import Iconify from "@/components/iconify";

import languagesIcon from "@/assets/icons/languages.png";
import languagesLightIcon from "@/assets/icons/languages_lightmode.png";
import frameworksIcon from "@/assets/icons/frameworks.png";
import frameworksLightIcon from "@/assets/icons/frameworks_lightmode.png";
import toolsIcon from "@/assets/icons/tools.png";
import toolsLightIcon from "@/assets/icons/tools_lightmode.png";
import databasesIcon from "@/assets/icons/databases.png";
import databasesLightIcon from "@/assets/icons/databases_lightmode.png";

const skillGroups = [
  {
    id: 1,
    iconDarkMode: languagesIcon.src,
    iconLightMode: languagesLightIcon.src,
    title: "Languages",
    description: "TypeScript | JavaScript ES6+ | HTML5 | CSS3",
  },
  {
    id: 2,
    iconDarkMode: frameworksIcon.src,
    iconLightMode: frameworksLightIcon.src,
    title: "Frameworks & Libraries",
    description:
      "React.js | Next.js | Node.js | Express.js | Tailwind CSS | Apollo Server | Redux | JQuery",
  },
  {
    id: 3,
    iconDarkMode: toolsIcon.src,
    iconLightMode: toolsLightIcon.src,
    title: "Tools & Services",
    description:
      "AWS (EC2, S3, RDS, Lambda) | Git | GitHub | Sequelize | Figma | Jira | Zendesk",
  },
  {
    id: 4,
    iconDarkMode: databasesIcon.src,
    iconLightMode: databasesLightIcon.src,
    title: "Databases",
    description: "SQL | MySQL | PostgreSQL | MongoDB | GraphQL | NoSQL",
  },
];

export default function Skills() {
  return (
    <>
      <Container
        id="resume"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: { xs: 5, md: 10 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            color: "secondary.main",
          }}
        >
          <AccentLine />
          My Skills
          <AccentLine />
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          sx={{
            color: "text.primary",
            fontWeight: 800,
            mb: 2,
          }}
        >
          Tools of the Trade:
          <br />
          My Skillset
        </Typography>

        <Grid2 container spacing={2} sx={{ width: "100%" }}>
          <Grid2
            size={{ xs: 12, md: 6 }}
            order={{ xs: 2, md: 1 }}
            sx={{
              pr: { xs: 0, md: 10, lg: 15 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              alt="portrait"
              src={portraitImage.src}
              style={{
                // width: "100%",
                // height: "auto",
                objectFit: "contain",
              }}
              width={300}
              height={300}
            />
            <Button
              variant="contained"
              color="primary"
              href="https://drive.google.com/uc?export=download&id=1DyYkTa80ywZfcdoWlMyn_EQGfK682-L4"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ borderRadius: 10, mt: 1 }}
              endIcon={<Iconify icon="eva:download-outline" />}
            >
              Download My Resume
            </Button>
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 6 }}
            order={{ xs: 1, md: 2 }}
            container
            spacing={1} // This creates the horizontal spacing between columns (4px)
          >
            {/* Left Column - Items 1 & 3 */}
            <Grid2
              size={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: 1, // This offsets the first column by 8px
              }}
            >
              {/* Item 1 */}
              <Grid2 sx={{ mb: 1 }}>
                {" "}
                {/* 8px spacing between 1 and 3 */}
                <SkillGroupCard
                  id={1}
                  iconDark={skillGroups[0].iconDarkMode}
                  iconLight={skillGroups[0].iconLightMode}
                  title={skillGroups[0].title}
                  description={skillGroups[0].description}
                />
              </Grid2>

              {/* Item 3 */}
              <Grid2>
                <SkillGroupCard
                  id={3}
                  iconDark={skillGroups[2].iconDarkMode}
                  iconLight={skillGroups[2].iconLightMode}
                  title={skillGroups[2].title}
                  description={skillGroups[2].description}
                />
              </Grid2>
            </Grid2>

            {/* Right Column - Items 2 & 4 */}
            <Grid2
              size={6}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Item 2 */}
              <Grid2 sx={{ mb: 1 }}>
                {" "}
                {/* 8px spacing between 2 and 4 */}
                <SkillGroupCard
                  id={2}
                  iconDark={skillGroups[1].iconDarkMode}
                  iconLight={skillGroups[1].iconLightMode}
                  title={skillGroups[1].title}
                  description={skillGroups[1].description}
                />
              </Grid2>

              {/* Item 4 */}
              <Grid2>
                <SkillGroupCard
                  id={4}
                  iconDark={skillGroups[3].iconDarkMode}
                  iconLight={skillGroups[3].iconLightMode}
                  title={skillGroups[3].title}
                  description={skillGroups[3].description}
                />
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>

      <DiagonalWordStripe />
      {/* enter line break div here */}
    </>
  );
}
