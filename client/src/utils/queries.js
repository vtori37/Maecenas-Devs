import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    {
        user {
            _id
            username
            email
        }
    }
`;

// import { gql } from '@apollo/client';

// export const QUERY_BLOGPOSTS = gql`
//   query blogPosts($username: String) {
//     blogPosts(username: $username) {
//       _id
//       blogPostText
//       createdAt
//       username
//     }
//   }
// `;

// export const QUERY_BLOGPOST = gql`
//   query blogPost($id: ID!) {
//     blogPost(_id: $id) {
//       _id
//       blogText
//       createdAt
//       username
//     }
//   }
// `;

// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//       subscriberCount
//       subscribers {
//         _id
//         username
//       }
//       blogPosts {
//         _id
//         blogPostText
//         createdAt
//       }
//     }
//   }
// `;

// export const QUERY_ME = gql`
//   {
//     me {
//       _id
//       username
//       email
//       subscriberCount
//       blogPosts {
//         _id
//         blogPostText
//         createdAt
//       subscribers {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const QUERY_ME_BASIC = gql`
//   {
//     me {
//       _id
//       username
//       email
//       subscriberCount
//       subscribers {
//         _id
//         username
//       }
//     }
//   }
// =======
// export const QUERY_USER = gql`
//     {
//         user {
//             _id
//             username
//             email
//         }
//     }
// `;