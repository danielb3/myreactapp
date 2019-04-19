import React from 'react';
import WOW from 'wowjs';
import git from './images/github.png';

const styles = {
    title: {
        textAlign: "center",
        color: 'white',
        fontSize: '1.7em'
    },
    title2: {
        textAlign: 'center',
        color: 'white',
        fontSize: '1.3em'
    },
    background: {
        color: 'white',
        textAlign: 'center'
    }
}
class Contact extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div style={styles.background}>
                <h1 id="contact" className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>Contact Me</h1>
                <p className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title2}><b>I'm currently looking for a job working with websites, software, or technology.  If you like my work, drop me a line to chat.</b></p>
                <p className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title2}>Email: danielbutton001 [at] gmail [dot] com</p>
                <p className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title2}>Phone: two one six - two one two - two nine five nine</p>
                <p className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title2}>Location: Greater Washington, DC Region</p>
                <a className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title2} href="https://github.com/danielb3" target="_blank"><img src={git} alt="cover" height="75px" /></a>
            </div>
        )}
}

export default Contact;