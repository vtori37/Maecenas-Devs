const creatorSeeds = require('./creatorSeed.json');
const blogPostSeeds = require('./blogPostSeed.json');
const db = require('../config/connection');
const { Creator, BlogPost } = require('../models');

db.once('open', async () => {
    try {
        await BlogPost.deleteMany({});
        await Creator.deleteMany({});

        await Creator.create(creatorSeeds);

        for (let i = 0; i < blogPostSeeds.length; i++) {
            const { _id, blogAuthor } = await BlogPost.create(blogPostSeeds[i]);
            const creator = await Creator.findOneAndUpdate(
                { name: blogAuthor },
                {
                    $addToSet: {
                        blogPosts: _id,
                    },
                }
            );
        }
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Successfully seeded!');
    process.exit(0);
});