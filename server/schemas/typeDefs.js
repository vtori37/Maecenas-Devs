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
        specialties: [String]
        image: String
        url: String
        tier: [String]
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
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addCreator(creatorName: String!, about: String!, specialties: String!, url: String!): Creator
        addSub(creatorName: String!): Creator
        addBlogPost(creatorName: String!, blogText: String!): BlogPost
        addComment(blogId: ID!, commentText: String!): BlogPost
        addReply(blogId: ID!, commentId: ID!, replyText: String!): BlogPost
    }
`;

module.exports = typeDefs;