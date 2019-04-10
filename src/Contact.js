import React from 'react';

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
    render() {
        return (
            <div style={styles.background}>
                <h1 id="contact" style={styles.title}>Contact Me</h1>
                <p style={styles.title}>Email: danielbutton001 [at] gmail [dot] com</p>
                <p style={styles.title}>Phone: two one six - two one two - two nine five nine</p>
                <p style={styles.title}>Location: Greater Washington, DC Region</p>
                <a style={styles.title} href="https://github.com/danielb3" target="_blank">Github.com/danielb3</a>
            </div>
        )}
}

export default Contact;