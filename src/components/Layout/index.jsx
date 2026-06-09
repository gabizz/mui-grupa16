import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Menu from './Menu';

export default function Layout({ children }) {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh", px: { xs: 0, sm: 3 } }}>
      <Box sx={{ flexGrow: 1 }}>
        <Menu />
        <Box sx={{ m: 1, border: "1px dashed grey", p: 2 }}>
          {children}
        </Box>
      </Box>
    </Container>
  );
}
