import React, { useState } from "react";

const CreatorCard = () => {
  const [creators, setCreators] = useState([
    {
      image: "../assets/images/Emoji.jpeg",
      name: "Anna Johnson",
      description: `fjsjdfkahsdfk;uhasdkufhauskdhfkuashdf sdfasdfsdfs dsfasdfsadf
      dsfasdfasdf fjsjdfkahsdfk;uhasdkufhauskdhfkuashdf sdfasdfsdfs
      dsfasdfsadf dsfasdfasdf fjsjdfkahsdfk;uhasdkufhauskdhfkuashdf
      sdfasdfsdfs dsfasdfsadf dsfasdfasdf
      fjsjdfkahsdfk;uhasdkufhauskdhfkuashdf sdfasdfsdfs dsfasdfsadf
      dsfasdfasdf fjsjdfkahsdfk;uhasdkufhauskdhfkuashdf sdfasdfsdfs
      dsfasdfsadf dsfasdfasdf fjsjdfkahsdfk;uhasdkufhauskdhfkuashdf
      sdfasdfsdfs dsfasdfsadf dsfasdfasdf
      fjsjdfkahsdfk;uhasdkufhauskdhfkuashdf sdfasdfsdfs dsfasdfsadf
      dsfasdfasdf fjsjdfkahsdfk;uhasdkufhauskdhfkuashdf sdfasdfsdfs
      asdfiejfalksdjflkjasldkfjlkasdjfksadjf
      asjdfklasjdfkljasdlkfjlksdjf
      lsadjfljasdlkfjl;asdfiejfalksdjflkjasldkfjlkasdjfksadjfsjdfljasldfjoiasjdfijsoidfj
      dkfa;skdjfjkasdhf;jasdfljasdf hdsfljkasdlfjasldfhjo;iasdjf
      ;osdjflajsdkfjas;ldfj;liasdjfoiajsdf ksdjf;lasdjf;lsjdfl
      `,
      specialities: ["Javascript", "CSS"],
      tier: "Tier 1",
    },
    {
      image: "../assets/images/Emoji.jpeg",
      name: "Peter S",
      description: `something very unsusal is happening in the townn of hawkins
      `,
      specialities: ["React", "Express"],
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
                        src={require("../assets/images/Emoji.jpeg")}
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

export default CreatorCard;
