const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const replySchema = new Schema(
    {
        replyText: {
            type: String,
            required: "Can't leave blank!",
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
            required: "Can't leave blank!",
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
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;