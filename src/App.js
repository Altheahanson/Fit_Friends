import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Feed from './pages/feed';
import Findfriend from './pages/Findfriend';
import Friendzone from './pages/Friendzone';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetails />} />
                <Route path="/feed/:id" element={<Feed />} />
                <Route path="/findfriend/:id" element={<Findfriend />} />
                <Route path="/friendzone/:id" element={<Friendzone />} />
                <Route path="/chat/:id" element={<Chat />} />
                <Route path="/profile/:id" element={<Profile />} />
            </Routes>
            <Footer />
        </Box>

    )
}

export default App