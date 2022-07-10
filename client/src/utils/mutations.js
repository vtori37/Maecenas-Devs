import { gql } from '@apollo/client';

export const LOGIN_USER = gql `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SUB = gql`
  mutation addSub($creatorName: String!) {
    addSub(creatorName: $creatorName) {
      _id
      creatorName
      tier1 {
        _id
        username
      }
      subscriberCount
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($blogId: ID!, $commentText: String!) {
    addComment(blogId: $blogId, commentText: $commentText) {
      _id
      creatorName
      createdAt
      blogText
      comments {
        _id
        commentText
        createdAt
        username
        replies {
            _id
            replyText
            createdAt
            username
        }
      }
    }
  }
`;

export const ADD_REPLY = gql`
  mutation addReply($blogId: ID!, $commentId: ID!, $replyText: String!) {
    addReply(blogId: $blogId, commentId: $commentId, replyText: $replyText) {
      _id
      creatorName
      createdAt
      blogText
      comments {
        _id
        commentText
        createdAt
        username
        replies {
            _id
            replyText
            createdAt
            username
        }
      }
    }
  }
`;