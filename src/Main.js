import React from 'react';
import Header from './Header';
import Skills from './Skills';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';


const styles = {
    background: {
        padding: '0 0 10px 0',
        backgroundImage: 'linear-gradient(to bottom right, #1E5494, #224B89, #1373B8)',
    }
}

class Main extends React.Component {
    render() {
        return (
            <div style={styles.background}>
                <Header />
                <Skills />
                <Portfolio />
                <About />
                <Contact />
            </div>
        )}
}

export default Main;