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
                <h1 id="about" className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>About Me</h1>
                <img className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.center} src={profile} alt="build process" height="100px"/>
                <br/>
                <p className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.par}>I got started web programming by taking a coding boot camp in Washington, DC.  During the program I found coding fun and decided to focus more of my attention towards pursuing it in greater depth.  Since finishing the boot camp in the summer of 2018, I have used my skills to build my own websites and apps as well as study PHP, Python, Perl, C, C#, .NET, WordPress, and Java (though I prefer working with JavaScript). And even though my knowledge of programming is quite limited, I'm still continuing to learn and improve upon it each day.</p>
                <h2 className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>My Coding Style</h2>
                <ul>
                    <li className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.par}>In learning and troubleshooting bugs I use a variety of resources like Stack Overflow, W3schools.org, Google, Medium, YouTube, and many other sites.</li>
                    <li className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.par}>Most of my work is a combination of code I find online that I then edit to fit in with my project.</li>
                    <li className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.par}>I pay attention to the way my apps look and feel as well as their functionality.  I like when both form and function intersect and build upon each other.</li>
                </ul>
                <h2 className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>My Development Process</h2>
                <p className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.par}>In building an app I like to plan my strategy first.  What is my goal?  What app will fit that goal?  What will I need to accomplish this app?  Secondly, I research my idea.  Who else has done this?  What did they do?  What did they not do?  Then I map out the different componenets my app will have (like mongodb database and node server ), the languages and libraries (like JavaScript and React.js), the different technologies (like AJAX and Express), and finally the different directories and files (like the src folder and index.html file).  Then, when everything has been planned out, I start building in steps, deploying a basic operational site first (MVP), then adding more features and improving the UX/UI after.  I repeat this process until the app is complete, each time going back to my plan and making changes as needed.<br/><br/></p>
                {/* <img className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.center} src={build} alt="build process" width="40%"/> */}
               
                <h2 className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>Future Plans</h2>
                <p className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.parC}>In 7-10 years I would like to be proficient enough as a programmer so that I can become a development lead for a really cool web app or software program.<br/><br/></p>
            </div>
        )}
}

export default About;