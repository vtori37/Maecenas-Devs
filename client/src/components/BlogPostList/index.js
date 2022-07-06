import React from 'react';
import { Link } from 'react-router-dom';

const blogPostList = ({ blogPosts, title }) => {
  if (!blogPosts.length) {
    return <h3>No Blog Posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {blogPosts &&
        blogPosts.map(blogPost => (
          <div key={blogPost._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${blogPost.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {blogPost.username}
              </Link>{' '}
              blogPost on {blogPost.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/blogPost/${blogPost._id}`}>
                <p>{blogPost.blogPostText}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default blogPostList;
