import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: '123px', xs: '40px' },
      mt: { sm: '32px', xs: '20px' },
      justifyContent: 'none',
    }}
    px="20px"
  >
    {/* Logo */}
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: '48px', height: '48px', margin: '0px 20px' }}
      />
    </Link>

    {/* Navigation Links */}
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      sx={{
        ml: '-10px', // Shift navigation links left by 10px
      }}
    >
      {/* Home Link */}
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #FF2625',
        }}
      >
        Home
      </Link>

      {/* Exercises Link */}
      <a
        href="#exercises"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
        }}
      >
        Exercises
      </a>

      {/* Fittrack Link */}
      <a
        href="https://f-itness-track-master-seven.vercel.app/"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
        }}
      >
        Fittracker
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
