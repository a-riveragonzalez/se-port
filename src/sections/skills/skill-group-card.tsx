"use client";

import * as React from "react";
import Image from "next/image";
import { Box, Stack, Typography, useTheme } from "@mui/material";

interface SkillGroupCardProps {
    id: number;
    iconDark: string;
    iconLight: string;
    title: string;
    description: string;
    iconWidth?: number;
    iconHeight?: number;
}

export default function SkillGroupCard({
    id,
    iconDark,
    iconLight,
    title,
    description,
    iconWidth = 40,
    iconHeight = 40,
}: SkillGroupCardProps) {
    const theme = useTheme();
    const isLightMode = theme.palette.mode === "light";

    return (
        <Box
            sx={{
                position: "relative",
                backgroundColor: isLightMode ? "white" : "black",
                border: `2px solid ${theme.palette.primary.main}`,
                borderRadius: 3,
                p: 2,
                boxShadow: `
                    0 0 5px 0 ${theme.palette.primary.main},
                    0 4.82px 4.85px 0 rgba(0, 0, 0, 0.25)
                `,
            }}
        >
            <Stack direction="row">
                <Image
                    src={isLightMode ? iconLight : iconDark}
                    width={iconWidth}
                    height={iconHeight}
                    alt={`${title} icon`}
                />
                <Typography
                    sx={{
                        fontWeight: 400,
                        fontSize: '1.55rem',
                        color: theme.palette.text.primary,
                        marginLeft: 'auto',
                        marginTop: 'auto',
                    }}
                >
                    0{id}
                </Typography>
            </Stack>

            <Typography
                variant="body1"
                sx={{
                    color: "text.primary",
                    fontWeight: 800,
                    // mt: 1,
                    textAlign: 'center'
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: "text.primary",
                    textAlign: 'center',
                    mt: 1.5,
                }}
            >
                {description}
            </Typography>
        </Box>
    );
}