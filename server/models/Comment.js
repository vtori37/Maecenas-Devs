const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const replySchema = new Schema(
    {
        replyText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // If used, need to format
        },
        username: {
            type: String,
            required: true
        }
    }
);

const commentSchema = new Schema (
    {
        commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // If used, need to format
        },
        username: {
            type: String,
            required: true
        },
        replies: [replySchema]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// const Comment = model('Comment', commentSchema);

module.exports = commentSchema;