import React, { useState } from "react";

const ContactPage = () => {
  const [contacts] = useState([
    {
      image: "../assets/images/jonathan.png",
      name: "Jonathan Kim",
      description: `Hi, I am student in UT Austin's full-stack web developer course.
                    Contact me: vizard424@yahoo.com | https://github.com/JonathanKim424`,
    },
    {
      image: "../assets/images/andrew.png",
      name: "Andrew Kim",
      description: `Hi, I am student in UT Austin's full-stack web developer course.
                   Contact me: andrewyk99@hotmail.com | https://github.com/andrewyk99`,
    },
    {
      image: "../assets/images/tori.png",
      name: "Victoria Rice",
      description: `Hi, I am student in UT Austin's full-stack web developer course.
                   Contact me: vrice360@gmail.com | https://github.com/vtori37`,
    },
    {
      image: "../assets/images/jake.png",
      name: "Jake Lauterstein",
      description: `Hi, I am student in UT Austin's full-stack web developer course.
                   Contact me: jakelauterstein@gmail.com | https://github.com/jakelauterstein`,
    },
    {
      image: "../assets/images/kavya.png",
      name: "Kavya Mantena",
      description: `Hi, I am student in UT Austin's full-stack web developer course.
                   Contact me: kavya.mantena26@gmail.com | https://github.com/KavyaMantena
                    `,
    },
  ]);

  return (
    <section>
      <h1 className="contact-page-heading">Contact Maecenas-Devs</h1>
      <div className="contact-team">
        {contacts.map((contact) => {
          return (
            <div className="contact-infos">
              <img
                src={contact.image}
                alt="contact-male-emoji"
                className="contact-team-image"
              ></img>
              <div>
                <div className="each-team-name">{contact.name}</div>
                <p className="each-team-description">{contact.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactPage;
