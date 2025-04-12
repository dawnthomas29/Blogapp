import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Container,
  Box
} from '@mui/material';

const BlogCardList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box sx={{ background: 'linear-gradient(to right, #fce4ec, #e3f2fd)', py: 6 }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #ec407a, #42a5f5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 4,
          }}
        >
          Blog Dashboard
        </Typography>

        <Grid container spacing={6}>
          {blogs.map((post) => (
            <Grid item xs={12} key={post.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  width:'500px'
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    User {post.userId} | ID {post.id}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {post.body.substring(0, 100)}...
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button size="small" variant="contained">
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogCardList;
