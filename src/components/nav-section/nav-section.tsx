"use client";

import * as React from "react";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, Tab, Tabs, tabsClasses, useTheme } from "@mui/material";
import ModeSwitch from "./mode-switch";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const NavTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    height: 5,
    backgroundColor: theme.palette.secondary.main,
    transform: 'translateY(-5px)', 
    borderRadius: 3, 
  },
}));


const NavTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.secondary,
  "&.Mui-selected": {
    color: theme.palette.text.primary,
  },
}));

const drawerWidth = 240;
const navItems = [
  "Home",
  "About Me",
  "Projects",
  "Resume",
  "Testimonials",
  "Contact",
];

export default function NavSection(props: Props) {
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "transparent",
          backgroundImage: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: {xs: "flex-start", sm: "center"} }}>
          {/* mobile icon for nav */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <NavTabs 
          value={value} 
          onChange={handleChange} 
          scrollButtons={false}
          variant="scrollable"
          sx={{
            display: { xs: "none", sm: "flex" },
            borderBottom: `1px solid ${theme.palette.text.primary}`,
            pb: .5,
            px: 2,
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
          >
            {navItems.map((item, index) => (
              <NavTab
                key={item}
                sx={{
                  mr: index === navItems.length - 1 ? 0 : 1,
                }}
                label={item}
              />
            ))}
          </NavTabs>
          
          <ModeSwitch />
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
