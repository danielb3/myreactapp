import React from 'react';
import build from "./images/dev_process.png";
import profile from "./images/profile.png";
import WOW from 'wowjs';

const styles = {
    title: {
        textAlign: "center",
    },
    background: {
        color: 'white',
    },
    center: {
        display: 'block',
        margin: 'auto'
    },
    par: {
        margin: '20px 30px'
    },
    parC: {
        margin: '20px 30px',
        textAlign: 'center'
    }
}
class About extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div style={styles.background}>
                <h1 id="about" style={styles.title}>About Me</h1>
                <img className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" data-wow-offset="20" style={styles.center} src={profile} alt="build process" height="100px"/>
                <br/>
                <p className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" data-wow-offset="20" style={styles.par}>I learned the MERN stack at a 4 month full time web development boot camp offered by Trilogy Education through the George Washington University in DC.  Since then I have used my skills to build my own websites and apps as well as study PHP, Python, Perl, C, C#, .NET, WordPress, and Java (though I prefer working with JavaScript).</p>
                <p className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" data-wow-offset="20" style={styles.par}>In learning and diagnosing errors I encounter, I use a variety of sites like Stack Overflow, w3schools, Google, Medium, and YouTube.</p>
                <p className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" data-wow-offset="20" style={styles.par}>Most of my work is a combination of code I find online that I then edit to fit in with my project.  When designing websites I like to see other's people final projects and try to copy what they did.</p>
                <h2 className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>My Development Process</h2>
                <p className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" data-wow-offset="20" style={styles.par}>In building an app I like to plan my strategy first.  What is my goal?  What app will fit that goal?  What will I need to accomplish this app?  Secondly, I research my idea.  Who else has done this?  What did they do?  What did they not do?  Then I map out the different componenets my app will have (like mongodb database and node server ), the languages and libraries (like JavaScript and React.js), the different technologies (like AJAX and express), and finally the different directories and files (like the src folder and index.html file).  Then, when everything has been planned out, I start building in steps, deploying a basic operational site first (MVP), then adding more features and improving the UX/UI after.  I repeat this process until the app is complete, each time going back to my plan and making changes as needed.<br/><br/></p>
                <img className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" data-wow-offset="20" style={styles.center} src={build} alt="build process" width="40%"/>
                <br/><br/>
                <h2 className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>Future Plans</h2>
                <p className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s" data-wow-offset="20" style={styles.parC}>In 5-10 years I would like to be a development lead, building a really cool web app or software program.<br/><br/></p>
            </div>
        )}
}

export default About;