import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts').then(res => setPosts(res.data)).catch(console.error);
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>By {post.author}</p>
          <p>{post.content}</p>
          <p>Tags: {post.tags.join(', ')}</p>
          <button>Update</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
