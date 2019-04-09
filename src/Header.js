import React from 'react';
import img from './geo.jpg'

const styles = {
    heroImage: {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative'
    },
    heroText: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
    }
  };

class Header extends React.Component {
    handleClick1 = () => {
        console.log('this is:', this);
        window.location.href="#skills"
      }
    handleClick2 = () => {
        console.log('this is:', this);
        window.location.href="#portfolio"
      }
    handleClick3 = () => {
        console.log('this is:', this);
        window.location.href="#contact"
      }
    render() {
        return (
        <div style={[styles.heroImage, {backgroundImage: `url(' + require('./geo.png') + ')`}]}>
        <img src={img} className="App-logo" alt="cover" />
            <div style={styles.heroText}>
                <h1>I am Daniel Button</h1>
                <p>And I'm a Full Stack Web Developer</p>
                <button onClick={this.handleClick1}>See Skills</button>
                <button onClick={this.handleClick2}>See Portfolio</button>
                <button onClick={this.handleClick3}>Contact Me</button>
            </div>
          </div>
    );
    }
}


export default Header;