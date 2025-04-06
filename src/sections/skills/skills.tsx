"use client";

import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid2, useTheme } from '@mui/material';
import Image from "next/image";
import portraitImage from "@/assets/images/portrait_circle.png";

import fullStackDevIcon from "@/assets/images/fullstackdev.png";
import SkillGroupCard from './skill-group-card';
import AccentLine from '@/components/accent-line';
import { DiagonalWordStripe } from './diagonal-word-stripe';

const skillGroups = [
  {
    id: 1,
    icon: fullStackDevIcon.src,
    title: "Languages",
    description: "TypeScript | JavaScript ES6+ | HTML5 | CSS3"
  },
  {
    id: 2,
    icon: fullStackDevIcon.src,
    title: "Frameworks & Libraries",
    description: "React.js | Next.js | Node.js | Express.js | Tailwind CSS | Apollo Server | Redux | JQuery"
  },
  {
    id: 3,
    icon: fullStackDevIcon.src,
    title: "Tools & Services",
    description: "AWS (EC2, S3, RDS, Lambda) | Git | GitHub | Sequelize | Figma | Jira | Zendesk"
  },
  {
    id: 4,
    icon: fullStackDevIcon.src,
    title: "Databases",
    description: "SQL | MySQL | PostgreSQL | MongoDB | GraphQL | NoSQL"
  },
]

export default function Skills() {

  return (
    <>
      <Container
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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
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
              href="#contained-buttons"
              sx={{ borderRadius: 10, mt: 1 }}
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
                display: 'flex',
                flexDirection: 'column',
                mt: 1, // This offsets the first column by 8px
              }}
            >
              {/* Item 1 */}
              <Grid2 sx={{ mb: 1 }}> {/* 8px spacing between 1 and 3 */}
                <SkillGroupCard
                  id={1}
                  icon={skillGroups[0].icon}
                  title={skillGroups[0].title}
                  description={skillGroups[0].description}
                />
              </Grid2>

              {/* Item 3 */}
              <Grid2>
                <SkillGroupCard
                  id={3}
                  icon={skillGroups[2].icon}
                  title={skillGroups[2].title}
                  description={skillGroups[2].description}
                />
              </Grid2>
            </Grid2>

            {/* Right Column - Items 2 & 4 */}
            <Grid2
              size={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Item 2 */}
              <Grid2 sx={{ mb: 1 }}> {/* 8px spacing between 2 and 4 */}
                <SkillGroupCard
                  id={2}
                  icon={skillGroups[1].icon}
                  title={skillGroups[1].title}
                  description={skillGroups[1].description}
                />
              </Grid2>

              {/* Item 4 */}
              <Grid2>
                <SkillGroupCard
                  id={4}
                  icon={skillGroups[3].icon}
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
