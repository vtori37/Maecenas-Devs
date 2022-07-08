const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const blogPostSchema = new Schema(
    {
        creatorName: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // If used, need to format
        },
        blogText: {
            type: String,
            required: true
        },
        comments: [commentSchema]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

blogPostSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

const BlogPost = model('BlogPost', blogPostSchema);

module.exports = BlogPost;