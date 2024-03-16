import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const resp = await axios.get("https://dummyjson.com/posts");
            const data = resp.data.posts;
            setPosts(data);
        } catch (e) {
            console.log(e);
        }
    };

    console.log(posts);
    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div>
            <Link to="/create">create</Link>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}