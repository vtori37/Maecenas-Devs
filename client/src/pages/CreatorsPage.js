import React, { useState } from "react";
import { useQuery, useMutation} from '@apollo/client';
import { QUERY_CREATORS } from '../utils/queries';
import styles from "./CreatorsPage.module.css";
import { ADD_SUB } from "../utils/mutations";
import Auth from '../utils/auth';

const CreatorsPage = () => {
  const { loading, data } = useQuery(QUERY_CREATORS);
  const creators = data?.creators || [];
  const [addSub, { error }] = useMutation(ADD_SUB);

  const handleClick = () => {
    console.log("clicked");
  };

  const tierHandleClick = (creatorName) => {
    console.log(creatorName);
    // try {
    //   await addSub({
    //     variables: { creatorName: creatorName }
    //   });
    // } catch (e) {
    //   console.error(e);
    // }
  };

  let tierButton;
  if (Auth.loggedIn()) {
    tierButton = `{creator.tier.map((tier) => {
      return <div key={tier.toString()} onClick={tierHandleClick.bind(this, creator.creatorName)}>{tier}</div>
    })}`;
  } else {
    tierButton = <></>;
  }

  return (
    <div>
      <h1 className="meet-creators">Meet The Creators</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.cards}>
          {creators.map((creator) => {
            return (
              //<>
                <div className={styles.card} key={creator._id}>
                  <div className={styles.cardBody} onClick={handleClick}>
                    <div className={styles.cardLeftPortion}>
                      <div>
                        <img
                          src={creator.image}
                          alt="cover"
                          className={styles.cardImage}
                        ></img>
                        <div className="alumni-speciality">
                          <h4 className="">Specialties</h4>
                          <ul>
                            {creator.specialties.map((specialty) => {
                              return <li key={specialty.toString()}>{specialty}</li>;
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={styles.cardRightPortion}>
                      <h2 className={styles.cardName}> {creator.creatorName}</h2>
                      <p>{creator.about}</p>
                    </div>
                  </div>
                  <footer className={styles.cardFooter}>
                    {tierButton}
                  </footer>
                </div>
              //</>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CreatorsPage;
