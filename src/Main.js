import React from 'react';
import Header from './Header';
import Skills from './Skills';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';


const styles = {
    background: {
        padding: '0 0 10px 0',
        backgroundImage: 'linear-gradient(to bottom right, blue, darkblue, blue)',
    }
}

class Main extends React.Component {
    render() {
        return (
            <div style={styles.background}>
                <Header />
                <br/>
                <Skills />
                <Portfolio />
                <About />
                <Contact />
            </div>
        )}
}

export default Main;