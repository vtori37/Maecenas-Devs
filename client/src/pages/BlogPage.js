import React from 'react';

export default function BlogPage({ spots, banana }) {
  // const banana = props.banana; (pass in props)

  // destructure:
  // const { banana } = props
  // just enter in props in function and use {banana}
  
// {banana} passed into BlogPage will allow you to enter {banana} anywhere
// in the JSX
  return <div>Hello World {banana}{spots} </div>
};


// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_BLOGPOST } from '../utils/queries';


// const BlogPost = () => {
//   const { id: blogPostId } = useParams();

//   const { loading, data } = useQuery(QUERY_BLOGPOST, {
//     variables: { id: blogPostId },
//   });

//   const blogPost = data?.blogPost || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }

  // //blogPost.map
  
  // return (
  //   <div>
  //     <div className="card mb-3">
  //       <p className="card-header">
  //         <span style={{ fontWeight: 700 }} className="text-light">
  //           {blogPost.username}
  //         </span>{' '}
  //         blogPost on {blogPost.createdAt}
  //       </p>
  //       <div className="card-body">
  //         <p>{blogPost.blogPostText}</p>
  //       </div>
  //     </div>
  //   </div>
  // );
// };

//blog Post, comment texts form users, replies to comments

// export default BlogPost;
