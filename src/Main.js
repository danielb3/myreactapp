import React from 'react';
import Header from './Header';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Skills />
                <Portfolio />
                <Contact />
            </div>
        )}
}

export default Main;