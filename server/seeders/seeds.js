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
        },
        {
            creatorName: "Jacob B",
            blogText: "Blah blah blah blah"
        }
    ]);

    console.log('BlogPosts seeded');

    await Creator.deleteMany();

    const creators = await Creator.insertMany([
        {
            creatorName: "Anna J",
            about: "Hi! My name is Creator 1, I just recently graduated from UT Austin Bootcamp and I would love to share my experiences with anyone taking the course!",
            specialties: ["HTML", "CSS", "JavaScript"],
            image: "../assets/images/female-emoji.jpeg",
            url: "http://creator1.com",
            tier: ["Tier 1"],
            tier1: [],
            tier2: [],
            tier3: [],
            blogPosts: blogPosts[0]._id
        },
        {
            creatorName: "Peter S",
            about: "Hi! My name is Creator 2, I just recently graduated from UT Austin Bootcamp and I would love to share my experiences with anyone taking the course!",
            specialties: ["Node.js", "Tailwind", "React"],
            image: "../assets/images/male-emoji.jpeg",
            url: "http://creator2.com",
            tier: ["Tier 1", "Tier 2"],
            tier1: [],
            tier2: [],
            tier3: [],
            blogPosts: blogPosts[1]._id
        },
        {
            creatorName: "Grace P",
            about: "Hi! My name is Creator 3, I just recently graduated from UT Austin Bootcamp and I would love to share my experiences with anyone taking the course!",
            specialties: ["MongoDB", "Mongoose", "noSQL"],
            image: "../assets/images/female-emoji.jpeg",
            url: "http://creator3.com",
            tier: ["Tier 1", "Tier 3"],
            tier1: [],
            tier2: [],
            tier3: [],
            blogPosts: blogPosts[2]._id
        },
        {
            creatorName: "Jacob B",
            about: "Hello, about about about me",
            specialties: ["React", "Express", "Javascript"],
            image: "../assets/images/male-emoji.jpeg",
            url: "http://creator4.com",
            tier: ["Tier 1", "Tier 2", "Tier 3"],
            tier1: [],
            tier2: [],
            tier3: [],
            blogPosts: blogPosts[3]._id
        }

    ]);

    console.log('Creators seeded');

    process.exit();
});