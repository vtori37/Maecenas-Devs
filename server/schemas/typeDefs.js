const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type BlogPost {
        _id: ID
        creatorName: String
        createdAt: String
        blogText: String
        comments: [Comment]
        commentCount: Int
    }

    type Creator {
        _id: ID
        creatorName: String
        about: String
        specialties: String
        url: String
        tier1: [User]
        tier2: [User]
        tier3: [User]
        blogPosts: [BlogPost]
        subscriberCount: Int
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
        replies: [Reply]
    }

    type Reply {
        _id: ID
        replyText: String
        createdAt: String
        username: String
    }

    type User {
        _id: ID
        username: String
        email: String
        comments: [Comment]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        creators: [Creator]
        creator(creatorName: String!): Creator
        blogposts(creatorName: String): [BlogPost]
        blogpost(_id: ID!): BlogPost
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addCreator(creatorName: String!, about: String!, specialties: String!, url: String!): Creator
        addSub(creatorName: String!): Creator
        addBlogPost(creatorName: String!, blogText: String!): BlogPost
        addComment(blogId: ID!, commentText: String!, username: String!): BlogPost
        addReply(blogId: ID!, commentId: ID!, replyText: String!, username: String!): BlogPost
    }
`;

module.exports = typeDefs;