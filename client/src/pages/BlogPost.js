import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_BLOGPOST } from '../utils/queries';


const BlogPost = (props) => {
  const { id: blogPostId } = useParams();

  const { loading, data } = useQuery(QUERY_BLOGPOST, {
    variables: { id: blogPostId },
  });

  const blogPost = data?.blogPost || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {blogPost.username}
          </span>{' '}
          blogPost on {blogPost.createdAt}
        </p>
        <div className="card-body">
          <p>{blogPost.blogPostText}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
