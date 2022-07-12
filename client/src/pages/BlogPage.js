import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CREATOR } from '../utils/queries';

import '../index.css'


const BlogPage = () => {
  const { id: creatorId } = useParams();
  const { loading, data } = useQuery(QUERY_CREATOR, {
    variables: {id: creatorId}
  });

  const creator = data?.creator || {};
  console.log(creator.blogPosts);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {creator.blogPosts.map((post) => {
            return (
              <section className='blog-section'>
                <div className='containr'>
                  <div className='contains-box'></div>
                  <div className='contains-tabs'>
                    <Tabs defaultActiveKey="Blog-Post" id="uncontrolled-tab-example" className="mb-3 blog-tab">
                      <Tab eventKey="Blog-Post" title="Blog-Post">
                        <h1>{post.blogTitle}</h1>
                        <h6>Created By: {post.creatorName}</h6>
                        <p>{post.blogText}</p>
                        <p>Comment Count: {post.commentCount}</p>
                      </Tab>
                      <Tab eventKey="Comments" title="Comments">
                      <h4> Hi </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda dolore reprehenderit ullam blanditiis ex sapiente pariatur tempore incidunt facilis?</p>
                      <h4> Yuh </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda dolore reprehenderit ullam blanditiis ex sapiente pariatur tempore incidunt facilis?</p>
                        <InputGroup className="mb-3">
                          <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <Button variant="outline-secondary" id="button-addon2">
                            Button
                          </Button>
                        </InputGroup>
                      </Tab>
                      {/* <Tab eventKey="Author" title="Author" disabled>
                  
                      </Tab> */}
                    </Tabs>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
};


export default BlogPage;

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
