import React, { useState } from "react";

const CreatorsPage = () => {
  const [creators] = useState([
    {
      image: "../assets/images/female-emoji.jpeg",
      name: "Anna J",
      description: `Creative UI Developer with 2 years of experince. Completed 10+ UI Developments.
      Partnered with data science to develop a frontend for a product recommendation engine that increased user
      time on a page by 5 minutes.
      `,
      specialities: ["Javascript", "CSS", "React", "Angular"],
      tier: "Tier 1",
    },
    {
      image: "../assets/images/female-emoji.jpeg",
      name: "Peter S",
      description: `something very unsusal is happening in the townn of hawkins
      `,
      specialities: ["React", "Express", "Javascript"],
      tier: "Tier 2",
    },
  ]);

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <h1 className="meet-creators">Meet The Creators</h1>
      <div className="cards">
        {creators.map((creator) => {
          return (
            <>
              <div className="card">
                <div className="card-body" onClick={handleClick}>
                  <div className="card-left-portion">
                    <div>
                      <img
                        src={require("../assets/images/female-emoji.jpeg")}
                        alt="cover"
                        className="card-image"
                      ></img>
                      <div className="alumni-speciality">
                        <h4 className="">Specialities</h4>
                        <ul>
                          {creator.specialities.map((speciality) => {
                            return <li>{speciality}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-right-portion">
                    <h2 className="card-name"> {creator.name}</h2>
                    <p>{creator.description}</p>
                  </div>
                </div>
                <footer className="card-footer">{creator.tier}</footer>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CreatorsPage;
