import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import { CssBaseline, Container } from '@mui/material';

function App() {
    return (
      <Router>
      <CssBaseline /> {/* MUI Component for CSS Reset */}
      <Header />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
          <Routes>
              <Route path="/" element={<BlogList />} />
              <Route path="/post/:postId" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Container>
      <Footer />
  </Router>
    );
}

export default App;
