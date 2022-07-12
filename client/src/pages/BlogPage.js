import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.css';

import '../index.css'
import Auth from '../utils/auth';
import { ADD_COMMENT, ADD_REPLY } from '../utils/mutations';
import { QUERY_CREATOR } from '../utils/queries';

const BlogPage = () => {
  const { id: creatorId } = useParams();
  const { loading, data } = useQuery(QUERY_CREATOR, {
    variables: {id: creatorId}
  });
  const creator = data?.creator || {};

  const [commText, setCommText] = useState('');
  const [charCommCount, setCharCommCount] = useState(0);
  const [addComment, { commError }] = useMutation(ADD_COMMENT);
  const commHandleChange = (event) => {
    if (event.target.value.length <= 280) {
      setCommText(event.target.value);
      setCharCommCount(event.target.value.length);
    }
  };
  const commHandleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addComment({
        variables: {
          blogId: event.target.id,
          commentText: commText
        }
      });
      setCommText('');
      setCharCommCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  const [repText, setRepText] = useState('');
  const [charRepCount, setCharRepCount] = useState(0);
  const [addReply, { repError }] = useMutation(ADD_REPLY);
  const repHandleChange = (event) => {
    if (event.target.value.length <= 280) {
      setRepText(event.target.value);
      setCharRepCount(event.target.value.length);
    }
  };
  const repHandleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.id)
    let text = event.target.id;
    const arr = text.split("_");
    console.log(arr);
  }

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
                              const repId = post._id + '_' + comment._id;
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
                                  <p>
                                    Character Count: {charRepCount}/280
                                    {repError && <span>Something went wrong...</span>}
                                  </p>
                                  <Form className="mb-3" onSubmit={repHandleFormSubmit} id={repId}>
                                    <Form.Group controlId="formReply">
                                      <Form.Control
                                        as="textarea"
                                        placeholder="Add a reply!"
                                        value={repText}
                                        onChange={repHandleChange}
                                      />
                                    </Form.Group>
                                    <Button variant="outline-secondary" type="submit">
                                      Reply
                                    </Button>
                                  </Form>
                                </div>
                              );
                            })}
                            <div>
                              <p>
                                Character Count: {charCommCount}/280
                                {commError && <span>Something went wrong...</span>}
                              </p>
                              <Form className="mb-3" onSubmit={commHandleFormSubmit} id={post._id}>
                                <Form.Group controlId="formComment">
                                  <Form.Control
                                    as="textarea"
                                    placeholder="Add a comment!"
                                    value={commText}
                                    onChange={commHandleChange}
                                  />
                                </Form.Group>
                                <Button variant="outline-secondary" type="submit">
                                  Comment
                                </Button>
                              </Form>
                            </div>
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