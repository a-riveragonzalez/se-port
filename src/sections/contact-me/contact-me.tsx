"use client";

import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Container, FormControl, Grid2, InputLabel, Stack, TextField, useTheme } from '@mui/material';
import Iconify from '@/components/iconify';
import AccentLine from '@/components/accent-line';

export default function ContactMe() {
  const theme = useTheme();

  return (
    <Container
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
            textAlign: {xs: 'center', md: ''}
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

          <FormControl fullWidth sx={{ mt: 3, pr: {xs: 0, md: 5} }} variant="standard">
            <TextField id="outlined-basic" color="secondary" label="Name" variant="outlined" sx={{ mb: 2 }} />
            <TextField id="outlined-basic-email" color="secondary" label="Email" variant="outlined" sx={{ mb: 2 }} />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              color='secondary'
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color='secondary' sx={{color: 'white'}}>
              Send Message
              <Iconify icon="fluent:send-32-regular" width={20} sx={{ color: 'white', ml: 1 }} />
              {/* fluent:send-32-regular */}
            </Button>
          </FormControl>
        </Grid2>

        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end"
          }}
        >
          <Box
            sx={{
              width: {xs: '100%', sm: '80%', md: '90%', lg: '80%'},
              backgroundColor: theme.palette.secondary.main,
              borderRadius: 2,
              p: 3,
              mt: {xs: 3, md: 0},
              mx: {xs: 'auto', md: ''}
            }}>

            <Box sx={{ width: '100%', textAlign: 'center' }}>
              <Iconify icon="ooui:speech-bubble-ltr" width={70} sx={{ color: 'white', mx: 'auto' }} />
            </Box>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: "flex-start",
                alignItems: "center",
                my: 2
              }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '100%',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
              }}>
                <Iconify icon="uiw:mail-o" width={24} sx={{ color: 'black', mx: 'auto' }} />
              </Box>
              <Typography variant='h6' sx={{ color: 'white', }}>
                arelyrivera1996@gmail.com
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: "flex-start",
                alignItems: "center",
              }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '100%',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
              }}>
                <Iconify icon="uiw:environment-o" width={24} sx={{ color: 'black', m: 'auto' }} />
              </Box>
              <Typography variant='h6' sx={{ color: 'white', }}>
                Los Angeles, CA
              </Typography>
            </Stack>



            <Stack sx={{ width: '100%', textAlign: 'center', alignItems: "center", mt: 2 }}>
              <Typography variant='h5' sx={{ mb: 1, color: 'white',}}>
                Want to set up a meeting?
              </Typography>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                width: '55px',
                height: '55px',
                borderRadius: '100%',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
              }}>
                <Iconify icon="qlementine-icons:users-16" width={30} sx={{ color: 'black', mx: 'auto' }} />
              </Box>
            </Stack>

          </Box>
        </Grid2>

      </Grid2>
    </Container>
  );
}
