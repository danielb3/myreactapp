import React from 'react';
import build from "./images/dev_process.png";
import profile from "./images/profile.png";

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

    }
}
class About extends React.Component {
    render() {
        return (
            <div style={styles.background}>
            <br/>
                <h1 id="about" style={styles.title}>About Me</h1>
                <img style={styles.center} src={profile} alt="build process" height="100px"/>
                <p>I learned the MERN stack at a 4 month full time web development boot camp offered by Trilogy Education through the George Washington University in DC.  Since then I have used my skills to build my own websites and apps as well as learn PHP, Python, Perl, C, C#, .NET, WordPress, and Java (though I prefer working with JavaScript).</p>
                <p>In learning and diagnosing errors I encounter, I use a variety of sites like Stack Overflow, w3schools, Google, Medium, and YouTube.</p>
                <p>Because I'm still new and learning, most of my work is a combination of code I find online that I then edit to fit in with my project.  I like to see other's people final projects and if I like a feature or design of theirs I will try to emulate it on my own.</p>
                <h2 style={styles.title}>My Development Process</h2>
                <p>In building an app I like to plan my strategy first.  What is my goal?  What app will fit that goal?  What will I need to accomplish this app?  Secondly, I research my idea.  Who else has done this?  What did they do?  What did they not do?  Then I map out the different componenets my app will have (like mongodb database and node server ), the languages and libraries (like JavaScript and React.js), the different technologies (like AJAX and express), and finally the different files and structure (like image directory and index.html file).  Then, when everything has been planned out, I start building in steps, deploying a basic operational site first, then adding more features and improving the UX/UI after.  I repeat this process until the app is complete, each time going back to my plan and making changes as needed.<br/><br/></p>
                <img style={styles.center} src={build} alt="build process" width="40%"/>
                <br/><br/>
            </div>
        )}
}

export default About;