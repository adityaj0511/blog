import React from 'react';

function BlogDetails({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>By {post.author}</p>
      <p>{post.content}</p>
      <p>Tags: {post.tags.join(', ')}</p>
      <p>Published on: {new Date(post.publishedDate).toLocaleDateString()}</p>
    </div>
  );
}

export default BlogDetails;
