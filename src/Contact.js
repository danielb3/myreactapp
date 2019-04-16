import React from 'react';
import WOW from 'wowjs';

const styles = {
    title: {
        textAlign: "center",
        color: 'white'
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
                <h1 id="contact" style={styles.title}>Contact Me</h1>
                <p className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>I'm currently looking for a position as a full-stack developer doing Front-end, Back-end, and Database coding.</p>
                <p className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>Email: danielbutton001 [at] gmail [dot] com</p>
                <p className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>Phone: two one six - two one two - two nine five nine</p>
                <p className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>Location: Greater Washington, DC Region</p>
                <a className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title} href="https://github.com/danielb3" target="_blank">Github.com/danielb3</a>
            </div>
        )}
}

export default Contact;