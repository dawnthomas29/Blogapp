import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(to right, #42a5f5, #ec407a)', boxShadow: 3 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo/Title Section */}
        <Link to="/" style={{ textDecoration: 'none', marginRight: 'auto' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
            Blog App
          </Typography>
        </Link>

        {/* Buttons Section */}
        <div>
          <Link to="/" style={{ textDecoration: 'none', marginRight: 20 }}>
            <Button
              variant="contained"
              sx={{
                color: 'white',
                backgroundColor: '#ff4081',
                '&:hover': { backgroundColor: '#f50057' },
                transition: 'background-color 0.3s ease',
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="/add" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                color: 'white',
                backgroundColor: '#ff4081',
                '&:hover': { backgroundColor: '#f50057' },
                transition: 'background-color 0.3s ease',
              }}
            >
              Add Blog
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
