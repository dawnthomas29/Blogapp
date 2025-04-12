import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box
} from '@mui/material';

function AddBlog() {
  return (
    <Container sx={{ mt: 4 }}>
      <Box
        sx={{
          background: 'linear-gradient(to right, #42a5f5, #ec407a)', // Gradient background
          borderRadius: 2,
          padding: 4,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: 'white' }}>
          Add New Blog
        </Typography>
        <Box
          component="form"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="Blog Name"
            name="name"
            placeholder="Enter blog title"
            required
            sx={{ backgroundColor: 'white' }}
          />
          <TextField
            label="Description"
            name="description"
            multiline
            rows={4}
            placeholder="Write the blog description..."
            required
            sx={{ backgroundColor: 'white' }}
          />
          <TextField
            label="Author Name"
            name="author"
            placeholder="Enter author's name"
            required
            sx={{ backgroundColor: 'white' }}
          />
          <Button variant="contained" sx={{ alignSelf: 'center', mt: 2 }}>Submit</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default AddBlog;
