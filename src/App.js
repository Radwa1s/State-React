import React from 'react';

import Button from 'react-bootstrap/Button';
import img from './user.png'
import './App.css';
class App extends React.Component {
  state = {
    person: {
      name: 'Sara Joy',
      profession: 'IT Manger',
      imgSrc: img,
      bio: 'Rodney Erickson is a content marketing professional at HubSpot, an inbound marketing and sales platform that helps companies attract visitors, convert leads. ',
    },
    shows: true
  };
  showHide = () => {
    this.setState({ shows: !this.state.shows })
  }


  render() {
    const { imgSrc, profession, bio, name } = this.state.person
    const { shows } = this.state
    return (
      <>
        {
          shows ?
            <div>
              <img src={imgSrc} alt="test" />
              <p>My name`s {name}</p>
              <p>my profession is a {profession}</p>
              <p>{bio}</p>
            </div> : null
        }
        <Button variant="secondary" size="lg" onClick={() => this.showHide()}> Show/Hide </Button>
      </>


    )
  }
}



export default App;
