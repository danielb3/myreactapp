import React from 'react';

const styles = {
    title: {
        textAlign: "center",
    },
    background: {
        color: 'white',
    }
}
class Body extends React.Component {
    render() {
        return (
            <div style={styles.background}>
                <h1 id="contact" style={styles.title}>Contact Me</h1>
                <p style={styles.title}>Email: danielbutton001 [at] gmail [dot] com</p>
                <p style={styles.title}>Phone: two one six - two one two - two nine five nine</p>
                <p style={styles.title}>Location: Greater Washington, DC Region</p>
            </div>
        )}
}

export default Body;