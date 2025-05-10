"use client";

import { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid2,
  Stack,
  TextField,
  useTheme,
  Alert,
  CircularProgress,
} from "@mui/material";
import Iconify from "@/components/iconify";
import AccentLine from "@/components/accent-line";

// Define form data type
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define error type
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactMe() {
  const theme = useTheme();

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState<FormErrors>({});

  // Submission status
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  // Validate email format
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    // Clear submit status when user starts typing in any field
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Get the error details from the response
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(errorData.details || "Failed to send message");
      }

      setSubmitStatus("success");
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <Container
      id="contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 5, md: 10 },
        textAlign: "left",
      }}
    >
      <Grid2 container spacing={2} sx={{ width: "100%" }}>
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{
            textAlign: { xs: "center", md: "" },
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
            Contact Me
            <AccentLine />
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              color: "text.primary",
              fontWeight: 800,
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              // mt: 2,
            }}
          >
            Feel free contact with me, I am always ready to help.
          </Typography>

          <FormControl
            component="form"
            fullWidth
            sx={{ mt: 3, pr: { xs: 0, md: 5 } }}
            variant="standard"
            onSubmit={handleSubmit}
          >
            <TextField
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="outlined-basic"
              color="secondary"
              label="Name"
              variant="outlined"
              sx={{ mb: 2 }}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="outlined-basic-email"
              color="secondary"
              label="Email"
              variant="outlined"
              sx={{ mb: 2 }}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              name="message"
              value={formData.message}
              onChange={handleChange}
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              color="secondary"
              sx={{ mb: 2 }}
              error={!!errors.message}
              helperText={errors.message}
            />

            {submitStatus === "success" && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Message sent successfully! I'll be in touch shortly.
              </Alert>
            )}

            {submitStatus === "error" && (
              <Alert severity="error" sx={{ mb: 2 }}>
                Failed to send message. Please try again.
              </Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ color: "white" }}
              disabled={submitStatus === "loading"}
            >
              {/* Send Message
              <Iconify
                icon="fluent:send-32-regular"
                width={20}
                sx={{ color: "white", ml: 1 }}
              /> */}
              {/* fluent:send-32-regular */}
              {submitStatus === "loading" ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                <>
                  Send Message
                  <Iconify
                    icon="fluent:send-32-regular"
                    width={20}
                    sx={{ color: "white", ml: 1 }}
                  />
                </>
              )}
            </Button>
          </FormControl>
        </Grid2>

        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "90%", lg: "80%" },
              backgroundColor: theme.palette.secondary.main,
              borderRadius: 2,
              p: 3,
              mt: { xs: 3, md: 0 },
              mx: { xs: "auto", md: "" },
            }}
          >
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Iconify
                icon="ooui:speech-bubble-ltr"
                width={70}
                sx={{ color: "white", mx: "auto" }}
              />
            </Box>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: "flex-start",
                alignItems: "center",
                my: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  width: "40px",
                  height: "40px",
                  borderRadius: "100%",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Iconify
                  icon="uiw:mail-o"
                  width={24}
                  sx={{ color: "black", mx: "auto" }}
                />
              </Box>
              <Typography variant="h6" sx={{ color: "white" }}>
                arelyrivera1996@gmail.com
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  width: "40px",
                  height: "40px",
                  borderRadius: "100%",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Iconify
                  icon="uiw:environment-o"
                  width={24}
                  sx={{ color: "black", m: "auto" }}
                />
              </Box>
              <Typography variant="h6" sx={{ color: "white" }}>
                Los Angeles, CA
              </Typography>
            </Stack>

            <Stack
              sx={{
                width: "100%",
                textAlign: "center",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Typography variant="h5" sx={{ mb: 1, color: "white" }}>
                Want to set up a meeting?
              </Typography>
              <Button
                href="https://calendly.com/arelyrivera"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  p: 0,
                  minWidth: "auto",
                  background: "none",
                  border: "none",
                  boxShadow: "none",
                  borderRadius: "50%",
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    width: "55px",
                    height: "55px",
                    borderRadius: "100%",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  <Iconify
                    icon="qlementine-icons:users-16"
                    width={30}
                    sx={{ color: "black", mx: "auto" }}
                  />
                </Box>
              </Button>
            </Stack>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}
