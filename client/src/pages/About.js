import React from 'react';
// import hero from '../assets/images/fiber-optics.jpg';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import AboutCardImage from '../assets/images/AboutCard.png';
import Tier1 from '../assets/images/Tier1.jpg';
import Tier2 from '../assets/images/Tier2.jpg';
import Tier3 from '../assets/images/Tier3.jpg';
import '../index.css'

function About() {
  return (
      <>
    <Card className='about-centered' style={{ width: '18rem', margin: '40px'}}>
    <Card.Img variant="top" src={AboutCardImage} />
    <Card.Body>
      <Card.Title>Fullstack Bootcamp Alumni Are Only A Click Away</Card.Title>
      <Card.Text>
        Our goal is to educate and inspire current bootcamp students by sharing our experience and knowledge of the full stack of technologies explored in the context of the modern coding bootcamp! Maecenas Devs is a subscription-fueled blog space that aims to support you in understanding the basics and embracing the challenge ahead!
      </Card.Text>
    </Card.Body>
  </Card>

  <CardGroup>
  <Card>
    <Card.Img variant="top" src={Tier1} />
    <Card.Body>
      <Card.Title>Feature Subscription</Card.Title>
      <Card.Text>
        This tier is perfect for all current bootcamp students who feel they could benefit from access to communication and comments related to bootcamp alumni blog posts
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Tier2} />
    <Card.Body>
      <Card.Title>Develop Subscription</Card.Title>
      <Card.Text>
        This tier is perfect for students who wish to submit their code for bootcamp alumni to review and critique!{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Tier3} />
    <Card.Body>
      <Card.Title>Main Subscription</Card.Title>
      <Card.Text>
        This tier is perfect for those students who are most interested in a one-on-one tutoring session(s) with a bootcamp graduate!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
</CardGroup>

  </>
  )
}


 export default About;

