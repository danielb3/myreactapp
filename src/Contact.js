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
                <h1 id="contact" className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>Contact Me</h1>
                <p className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}><b>I'm currently looking for a web programming job.  If you like my work, drop me a line to chat.</b></p>
                <p className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>Email: danielbutton001 [at] gmail [dot] com</p>
                <p className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>Phone: two one six - two one two - two nine five nine</p>
                <p className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>Location: Greater Washington, DC Region</p>
                <a className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title} href="https://github.com/danielb3" target="_blank">Github.com/danielb3</a>
            </div>
        )}
}

export default Contact;