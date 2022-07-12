import React from "react";
import { Link } from 'react-router-dom';
import { useQuery, useMutation} from '@apollo/client';
import { QUERY_CREATORS } from '../utils/queries';
import styles from "./CreatorsPage.module.css";
import { ADD_SUB } from "../utils/mutations";
import Auth from '../utils/auth';

const CreatorsPage = () => {
  const { loading, data } = useQuery(QUERY_CREATORS);
  const creators = data?.creators || [];
  const [addSub, { error }] = useMutation(ADD_SUB);

  const tierHandleClick = async (creatorName, tier) => {
    if (tier !== 'Tier 1') {
      alert('Only Tier 1 is available!');
      return;
    }
    const index = data.creators.findIndex(object => {
      return object.creatorName === creatorName;
    });
    const indexTier = data.creators[index].tier1.findIndex(object => {
      return object.username === Auth.getProfile().data.username;
    })
    if (indexTier === -1) {
      try {
        await addSub({
          variables: { creatorName: creatorName }
        });
        alert(`Successfully added to ${creatorName}'s Tier 1 subscription!`);
      } catch (e) {
        console.error(e);
      }
    } else {
      alert('You are already subscribed!');
    }
  };

  function TierLoggedIn(props) {
    const creator = props.props;
    return (
      <>
        {creator.tier.map((tier) => {
          return <div key={tier.toString()} onClick={tierHandleClick.bind(this, creator.creatorName, tier)} style={{ cursor: 'pointer' }}>{tier}</div>;
          })}
        {error && <div>Add to tier failed!</div>}
      </>
    );
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
                  <Link to={{ pathname: `/blogPage/${creator._id}` }} style={{ textDecoration: 'none', color: '#000000' }}>
                    <div className={styles.cardBody}>
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
                        <p style={{ wordBreak: 'keep-all' }}>{creator.about}</p>
                      </div>
                    </div>
                  </Link>
                  <footer className={styles.cardFooter}>
                    {Auth.loggedIn()
                      ? <TierLoggedIn props={creator} />
                      : <></>
                    }
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
