const db = require('../config/connection');
const { Creator, BlogPost } = require('../models');

db.once('open', async () => {
    await BlogPost.deleteMany();

    const blogPosts = await BlogPost.insertMany([
        { 
            creatorName: "Beginner's Guide to HTML",
            blogText: "Just getting started?"
        },
        {
            creatorName: "Beginner's Guide to CSS!",
            blogText: "CSS is how to style your page!!!"
        },
        {
            creatorName: "Beginner's Guide to React!",
            blogText: "React will change how you see frontend forever!!!"
        }
    ]);

    console.log('BlogPosts seeded');

    await Creator.deleteMany();

    const creators = await Creator.insertMany([
        {
            creatorName: "Creator 1",
            about: "Hi! My name is Creator 1, I just recently graduated from UT Austin Bootcamp and I would love to share my experiences with anyone taking the course!",
            specialties: "HTML, CSS, JavaScript",
            url: "http://creator1.com",
            tier1: [],
            tier2: [],
            tier3: [],
            blogPosts: blogPosts[0]._id
        },
        {
            creatorName: "Creator 2",
            about: "Hi! My name is Creator 2, I just recently graduated from UT Austin Bootcamp and I would love to share my experiences with anyone taking the course!",
            specialties: "Node.js, Tailwind, React",
            url: "http://creator2.com",
            tier1: [],
            tier2: [],
            tier3: [],
            blogPosts: blogPosts[1]._id
        },
        {
            creatorName: "Creator 3",
            about: "Hi! My name is Creator 3, I just recently graduated from UT Austin Bootcamp and I would love to share my experiences with anyone taking the course!",
            specialties: "MongoDB, Mongoose, noSQL",
            url: "http://creator3.com",
            tier1: [],
            tier2: [],
            tier3: [],
            blogPosts: blogPosts[2]._id
        }

    ]);

    console.log('Creators seeded');

    process.exit();
});