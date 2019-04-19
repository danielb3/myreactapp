import React from 'react';
import build from "./images/dev_process.png";
import profile from "./images/profile.png";
import WOW from 'wowjs';

const styles = {
    title: {
        textAlign: "center",
        fontSize: '1.7em'
    },
    title2: {
        textAlign: "center",
        fontSize: '1.5em'
    },
    background: {
        color: 'white',
    },
    center: {
        display: 'block',
        margin: 'auto'
    },
    par: {
        margin: '20px 30px',
        lineHeight: '1.7em',
        textAlign: 'justify',
        fontSize: '1.2em'
    },
    parC: {
        margin: '20px 30px',
        textAlign: 'center',
        fontSize: '1.2em'
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
                <p className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.par}>I got started programming during the summer of 2018 by taking a coding bootcamp in Washington, DC.  &nbsp;&nbsp;I did the program because I had always been interested in computers, I enjoy the type of logical problem solving skills that are usually needed when it comes to programming, and thought a bootcamp would be a good way to learn the basics in a short period of time.  &nbsp;&nbsp;Since finishing the boot camp, I have used the skills I acquired to build my own websites and apps as well as study PHP, Python, Perl, C, C#, .NET, WordPress, XML, and Java.</p>
                <br/>
                <h2 className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title2}>My Coding Style</h2>
                <ul>
                    <li className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.par}>In learning and troubleshooting bugs I use a variety of resources like Stack Overflow, W3schools.org, Google, Medium, YouTube, Udemy, and many other sites.</li>
                    <li className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.par}>Most of my work is a combination of code I find online that I then edit to fit in with my project.</li>
                    <li className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.par}>I pay attention to the way my apps look and feel as well as their functionality.  I like when both form and function intersect and build upon each other.</li>
                </ul>
                <br/>
                <h2 className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title2}>My Development Process</h2>
                <p className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.par}>In building an app I like to have a plan in place that will help guide me as it progresses.  &nbsp;&nbsp;In building that plan I first ask what is my goal?  &nbsp;&nbsp;Then I ask what app can I build that might achieve that goal?  &nbsp;&nbsp;And then, after those two things are determined, I look at what I will need to accomplish building this app?  &nbsp;&nbsp;When researching my idea I ask more questions.  &nbsp;&nbsp;Who else has done this?  &nbsp;&nbsp;What did they do?  &nbsp;&nbsp;What did they not do?  &nbsp;&nbsp;Then, if I decide to proceed, I map out the different componenets my app will have ( like mongodb database and node server ), the languages and libraries ( like JavaScript and React.js ), the different technologies ( like AJAX and Express ), and finally the different directories and files ( like the src folder and index.html file ).  &nbsp;&nbsp;Then, when everything has been planned out, I start building in steps, deploying a basic operational site first ( MVP ), then adding more features and improving the UX/UI after.  &nbsp;&nbsp;I repeat this process until the app is complete, each time going back to my plan and making changes as needed. <br/><br/></p>
                <h2 className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title2}>Future Plans</h2>
                <p className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.parC}>In 7-10 years I would like to be proficient enough as a programmer so that I can become a development lead for a really cool web app or software program. <br/><br/><br/></p>
            </div>
        )}
}

export default About;