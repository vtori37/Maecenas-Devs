import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.css';

import '../index.css'
import Auth from '../utils/auth';
import { QUERY_CREATOR } from '../utils/queries';

const BlogPage = () => {
  const { id: creatorId } = useParams();
  const { loading, data } = useQuery(QUERY_CREATOR, {
    variables: {id: creatorId}
  });
  const creator = data?.creator || {};
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {creator.blogPosts.map((post) => {
            return (
              <section className='blog-section' key={post._id}>
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
                      {Auth.loggedIn()
                        ?
                          <Tab eventKey="Comments" title="Comments">
                            {post.comments.map((comment) => {
                              return(
                                <div key={comment._id}>
                                  <p>{comment.commentText}</p>
                                  <p>Created by: {comment.username} at {comment.createdAt}</p>
                                  {comment.replies.map((reply) => {
                                    return (
                                      <div key={reply._id}>
                                        <p>{reply.replyText}</p>
                                        <p>Created by: {reply.username} at {reply.createdAt}</p>
                                      </div>
                                    );
                                  })}
                                  <InputGroup className="mb-3">
                                    <Form.Control
                                      placeholder="Add a reply!"
                                      aria-label="Add reply"
                                      aria-describedby="add-reply"
                                    />
                                    <Button variant="outline-secondary" id="btn-reply" type="submit">
                                      Reply
                                    </Button>
                                  </InputGroup>
                                </div>
                              );
                            })}
                            <InputGroup className="mb-3">
                              <Form.Control
                                placeholder="Add a comment!"
                                aria-label="Add comment"
                                aria-describedby="add-comment"
                              />
                              <Button variant="outline-secondary" id="btn-comment" type="submit">
                                Comment
                              </Button>
                            </InputGroup>
                          </Tab>
                        : <></>
                      }
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