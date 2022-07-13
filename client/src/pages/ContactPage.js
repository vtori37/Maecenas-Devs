import React, { useState } from "react";

const ContactPage = () => {
  const [contacts] = useState([
    {
      image: "../assets/images/male-emoji.jpeg",
      name: "Jonathan Kim",
      description: `Hi, I am student in full-stack webdeveloper course at UT Austin.
                    You can reach me at email:`,
    },
    {
      image: "../assets/images/male-emoji.jpeg",
      name: "Andrew Kim",
      description: `Hi, I am student in full-stack webdeveloper course at UT Austin.
                    You can reach me at email:`,
    },
    {
      image: "../assets/images/tori.png",
      name: "Victoria Rice",
      description: `Hi, I am student in full-stack webdeveloper course at UT Austin.
                    You can reach me at email:`,
    },
    {
      image: "../assets/images/male-emoji.jpeg",
      name: "Jake Lauterstein",
      description: `Hi, I am student in full-stack webdeveloper course at UT Austin.
                    You can reach me at email:`,
    },
    {
      image: "../assets/images/female-emoji.jpeg",
      name: "Kavya Mantena",
      description: `Hi, I am student in full-stack webdeveloper course at UT Austin.
                    You can reach me at email:`,
    },
  ]);

  return (
    <section>
      <h1 className="contact-page-heading">Contact Macenas-Devs</h1>
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
