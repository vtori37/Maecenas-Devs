const { Schema, model } = require('mongoose');

const blogPostSchema = new Schema(
    {
        name: {
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
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
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