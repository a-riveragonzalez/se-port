// components/AccentLine.tsx
import { Box, BoxProps } from "@mui/material";

interface AccentLineProps extends BoxProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

export default function AccentLine({
  width = "30px",
  height = "2px",
  color = "secondary.main",
  sx,
  ...rest
}: AccentLineProps) {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        width,
        height,
        backgroundColor: color,
        mb: 0.75,
        mx: 1,
        ...sx,
      }}
      {...rest}
    />
  );
}