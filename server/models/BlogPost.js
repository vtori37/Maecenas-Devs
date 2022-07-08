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
    let count = 0;
    this.comments.forEach(element => {
        element.replies.forEach(element => count++);
        count ++;
    });
    return count;
});

const BlogPost = model('BlogPost', blogPostSchema);

module.exports = BlogPost;