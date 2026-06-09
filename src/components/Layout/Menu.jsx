import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function MenuComponent() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleCloseMenu();
  };

  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        {/* Hamburger Icon: Visible only on xs screens, hidden on sm and up */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenMenu}
          sx={{ mr: 2, display: { xs: 'inline-flex', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Company/Brand Name with Logo */}
        <Stack 
          direction="row" 
          alignItems="center" 
          onClick={() => navigate("/")} 
          sx={{ cursor: 'pointer', userSelect: 'none' }}
        >
          <Box
            component="img"
            src="./vite.svg"
            alt="Chameleon Logo"
            sx={{
              width: 32,
              height: 32,
              mr: 1.5,
              filter: 'brightness(0) invert(1)', // converts the dark SVG gradient to white to match the AppBar contrast, or we can keep it as is if we want color. Let's make it white so it looks clean on the dark primary appbar!
            }}
          />
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: '800', 
              letterSpacing: 1.5,
              color: 'inherit',
            }}
          >
            CHAMELEON DIGITAL
          </Typography>
        </Stack>

        {/* Spacer to push navigation links to the right on desktop */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Dropdown Menu for mobile view (xs) */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuItem onClick={() => handleMenuItemClick('/')}>ACASA</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/despre-noi')}>DESPRE NOI</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/preturi')}>PRETURI</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/contact')}>CONTACT</MenuItem>
        </Menu>

        {/* Horizontal Navigation Stack: Hidden on xs, visible on sm and up */}
        <Stack 
          direction="row" 
          spacing={4} 
          sx={{ 
            cursor: "pointer", 
            display: { xs: 'none', sm: 'flex' } 
          }}
        >
          <Typography 
            variant="subtitle1" 
            component="div" 
            sx={{ fontWeight: '600', cursor: "pointer" }} 
            onClick={() => navigate("/")}
          >
            ACASA
          </Typography>

          <Typography 
            variant="subtitle1" 
            component="div" 
            sx={{ fontWeight: '600', cursor: "pointer" }} 
            onClick={() => navigate("/despre-noi")}
          >
            DESPRE NOI
          </Typography>

          <Typography 
            variant="subtitle1" 
            component="div" 
            sx={{ fontWeight: '600', cursor: "pointer" }} 
            onClick={() => navigate("/preturi")}
          >
            PRETURI
          </Typography>

          <Typography 
            variant="subtitle1" 
            component="div" 
            sx={{ fontWeight: '600', cursor: "pointer" }} 
            onClick={() => navigate("/contact")}
          >
            CONTACT
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export { MenuComponent as Menu };
