import React, { useState } from 'react';
import axios from 'axios';

function BlogForm() {
  const [formData, setFormData] = useState({ title: '', author: '', content: '', tags: [] });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/posts', formData).then(() => alert('Post created')).catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="author" placeholder="Author" onChange={handleChange} />
      <textarea name="content" placeholder="Content" onChange={handleChange} />
      <input name="tags" placeholder="Tags (comma separated)" onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(',') })} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BlogForm;
