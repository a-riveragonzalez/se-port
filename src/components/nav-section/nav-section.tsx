"use client";

import * as React from "react";
import { useEffect, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Slide,
  styled,
  Tab,
  Tabs,
  TabsProps,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import ModeSwitch from "./mode-switch";

interface NavHideProps {
  children?: React.ReactElement<unknown>;
}

interface NavTabsProps extends TabsProps {
  hidden?: boolean;
}

interface NavTabProps {
  label: string;
  href: string;
  selected?: boolean;
  onClick: (event: React.MouseEvent) => void;
  sx?: any;
}

const NavTabs = styled(Tabs)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    height: 5,
    backgroundColor: theme.palette.secondary.main,
    transform: "translateY(-5px)",
    borderRadius: 3,
    // Make sure the indicator's transition matches the Slide transition
    transition: "all 225ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
}));

const NavTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textTransform: "none",
  "&.Mui-selected": {
    color: theme.palette.text.primary,
  },
}));

const drawerWidth = 240;
const navItems = [
  { name: "Home", id: "#home" },
  { name: "About Me", id: "#about" },
  { name: "Projects", id: "#projects" },
  { name: "Resume", id: "#resume" },
  { name: "Contact", id: "#contact" },
];

function HideOnScroll(props: NavHideProps) {
  const { children } = props;
  // Get the current scroll trigger state
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={225}>
      {children ?? <div />}
    </Slide>
  );
}

export default function NavSection(props: NavHideProps) {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [value, setValue] = useState(0);
  const initials = "{ A.R.G }";

  // Add state to track if scroll is being caused by clicking nav item
  const [isScrollingToSection, setIsScrollingToSection] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string, event?: React.MouseEvent) => {
    // Prevent default if this is triggered by a click event
    if (event) {
      event.preventDefault();
    }

    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close drawer only if it's open (for mobile clicks)
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };

// Function to determine active section based on scroll position
const determineActiveSection = () => {
  // Skip if currently scrolling programmatically
  if (isScrollingToSection) return;
  
  // Get all section elements
  const sections = navItems.map(item => {
    const element = document.querySelector(item.id);
    if (!element) return null;
    
    const rect = element.getBoundingClientRect();
    return {
      id: item.id,
      top: rect.top,
      bottom: rect.bottom,
      height: rect.height,
    };
  }).filter(Boolean);
  
  // Exit if no sections found
  if (sections.length === 0) return;
  
  // Calculate viewport center point (or a different reference point)
  const viewportCenter = window.innerHeight / 2;
  
  // Calculate which section has the most visibility in the viewport
  let activeIndex = 0;
  let maxVisibility = 0;
  
  sections.forEach((section, index) => {
    if (!section) return;
    
    // Calculate how much of the section is visible in the viewport
    const sectionTop = Math.max(0, section.top);
    const sectionBottom = Math.min(window.innerHeight, section.bottom);
    const visibleHeight = Math.max(0, sectionBottom - sectionTop);
    
    // Give extra weight to sections near the top of the viewport
    // This helps when scrolling up
    const positionBonus = section.top <= 100 ? 200 : 0;
    const effectiveVisibility = visibleHeight + positionBonus;
    
    // Update active section if this one has more visibility
    if (effectiveVisibility > maxVisibility) {
      maxVisibility = effectiveVisibility;
      activeIndex = index;
    }
  });
  
  // Only update if active section has changed
  if (activeIndex !== value) {
    setValue(activeIndex);
  }
};
    
    // Setup scroll event listener
    useEffect(() => {
      // Throttle function to limit how often the scroll handler fires
      let ticking = false;
      
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            determineActiveSection();
            ticking = false;
          });
          ticking = true;
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      
      // Initial check to set the active section on mount
      determineActiveSection();
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [value, isScrollingToSection]);

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      {/* onClick={handleDrawerToggle} */}
      <Typography
        variant="h5"
        sx={{ my: 2, fontFamily: "Courier New, monospace", fontWeight: 800 }}
      >
        {initials}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component="a"
              href={item.id}
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                scrollToSection(item.id, e);
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      {/* Move CssBaseline outside of the HideOnScroll */}
      <HideOnScroll {...props}>
        {/* Directly wrap the AppBar with HideOnScroll */}
        <AppBar
          component="nav"
          sx={{
            backgroundColor: "transparent !important",
            backgroundImage: "none",
            boxShadow: "none",
          }}
        >
          <Toolbar sx={{ justifyContent: { xs: "flex-start", sm: "center" } }}>
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
                pb: 0.5,
                px: 2,
              }}
            >
              {navItems.map((item, index) => (
                <NavTab
                  key={item.name}
                  sx={{
                    mr: index === navItems.length - 1 ? 0 : 1,
                  }}
                  label={item.name}
                  onClick={(e) => scrollToSection(item.id, e)}
                />
              ))}
            </NavTabs>

            <ModeSwitch />
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Move nav outside of HideOnScroll */}
      <nav>
        <Drawer
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
    </>
  );
}
