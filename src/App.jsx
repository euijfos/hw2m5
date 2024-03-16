import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostsPage from './pages/PostPage.jsx';
import CreatePostPage from './pages/CreatePostPage.jsx';

function App() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<PostsPage/>}/>
                <Route path="/create" element={<CreatePostPage/>}/>
            </Routes>
        </div>
    )
}
export default App