const db = require('../config/connection');
const { Creator, BlogPost } = require('../models');

db.once('open', async () => {
    await BlogPost.deleteMany();

    const blogPosts = await BlogPost.insertMany([
        { 
            creatorName: "Anna J",
            blogTitle: "Intro to HTML",
            blogText: "Just getting started? HTML is where you will start and everything can seem very confusing at first, but if you're here then you are already putting in the effort to become a great developer! If you have any questions, no matter how simply it may seem, don't hesitate to ask! If you see a question you know the answer to, help out your peers! The best way to learn is to teach someone else what you know, and collaborating with others is a key skill in the industry."
        },
        {
            creatorName: "Peter S",
            blogTitle: "Using a Framework to Transform CSS!",
            blogText: "Tailwind is a fantastic framework for CSS that can be completely customized for your design needs. If you are already comfortable with vanilla CSS and have used other frameworks, but find yourself limited, this is a great framework to try out! If you want to learn more, make sure to subscribe and I will be happy to help you get started!"
        },
        {
            creatorName: "Grace P",
            blogTitle: "Intro to MongoDB and Mongoose!",
            blogText: "If you're like me, delving into backend was very daunting and using databases could've been a challenge. You might've just began to learn MongoDB and Mongoose, if you are feeling a little discouraged, don't be! I was the exact same way and I'm sure many of your peers feel the same way. This is a great place to start to ask questions and get feedback on the best approach to start mastering noSQL!"
        },
        {
            creatorName: "Jacob B",
            blogTitle: "Becoming a Full Fledged Full Stack Developer",
            blogText: "You've been working hard to learn front-end and back-end, now it's time to wrap it all together and become a full stack web developer! Getting comfortable with React is key and in a lot of cases, you won't even use an HTML file. There are a lot more folders and files in a full stack project, but don't worry! I and fellow subscribers are here to help with any questions you might have."
        }
    ]);

    console.log('BlogPosts seeded');

    await Creator.deleteMany();

    const creators = await Creator.insertMany([
        {
            creatorName: "Anna J",
            about: "Hi! My name is Anna, I just recently graduated from UT Austin Bootcamp and I would love to share my experiences with anyone taking the course!",
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
            about: "Hey there! I'm Peter and I just got my first job after completing the bootcamp! If you have any questions on what I did to land my first job as a developer or designing your projects, I would be happy to help!",
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
            about: "Hello, my name is Grace! I feel strongest with back end development, so if you feel lost don't hesitate to ask! I will actually be a TA for the bootcamp for the next semester, but I would love to start helping with anyone taking the course now.",
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
            about: "Hello, I graduated from the UT Austin web development bootcamp last year and I would love to help anyone who is going through the course right now as well as recent graduates that might want some help getting comfortable with any of the later sections of the course!",
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