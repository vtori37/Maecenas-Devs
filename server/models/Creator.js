const { Schema, model } = require('mongoose');

const creatorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        about: {
            type: String,
            required: true
        },
        specialties: {
            type: String,
            required: true
        },
        tier1: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        tier2: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        tier3: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        blogPosts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'BlogPost'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

creatorSchema.virtual('subscriberCount').get(function() {
    return this.tier1.length;
});

const Creator = model('Creator', creatorSchema);

module.exports = Creator;