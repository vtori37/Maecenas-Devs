import React, { useState } from "react";
import styles from "./CreatorsPage.module.css";

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
      image: "../assets/images/male-emoji.jpeg",
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
      <div className={styles.cards}>
        {creators.map((creator) => {
          return (
            <>
              <div className={styles.card}>
                <div className={styles.cardBody} onClick={handleClick}>
                  <div className={styles.cardLeftPortion}>
                    <div>
                      <img
                        src={creator.image}
                        alt="cover"
                        className={styles.cardImage}
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
                  <div className={styles.cardRightPortion}>
                    <h2 className={styles.cardName}> {creator.name}</h2>
                    <p>{creator.description}</p>
                  </div>
                </div>
                <footer className={styles.cardFooter}>{creator.tier}</footer>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CreatorsPage;
