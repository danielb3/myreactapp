import React from 'react';
import img1a from './images/bookmark.png';
import img1b from './images/dealership.png';
import img2b from './images/newscraper.png';
import img3b from './images/timesheet.png';

const styles = {
    title: {
        textAlign: "center",
        color: 'white'
    },
    cards: {
        margin: '0 auto',
        width: '100%'
    },
    cards2: {
        display: 'block',
        margin: '0 auto',
        textAlign: 'center'
        // width: '100%',
    },
    card: {
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        width: '30.5%',
        margin: '1em',
        textAlign: 'center',
        display: 'inline-block',
        verticalAlign: 'middle',   
        background: 'white',
        color: 'black'
      },
    container: {
        padding: '2px 16px',
      },
    //   background: {
    //     // background: '#224B89',
    //     backgroundImage: 'linear-gradient(#224B89, #1373B8)',
    //     padding: '10px'
    // }
}
class Body extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.portRef = React.createRef();
    //   }    
    render() {
        return (
            <div style={styles.background}>
                <h1 id="portfolio" ref="a" style={styles.title}>Portfolio</h1>
                <h3 style={styles.title}>Group Class Projects</h3>
                <div style={styles.cards2}>
                    <div style={styles.card}>
                    <a href='https://salty-brook-20670.herokuapp.com/' target='_blank'>
                        <img src={img1a} alt="bookmarking site" width='100%'/>
                        </a>
                        <div style={styles.container}>
                            <h4><b>Bookmarking Site - July 2018</b></h4>
                            <p>HTML, CSS, Node, Express, Passport, Heroku</p>
                            <p>My role: Front-end design</p>
                            <p><i>Email: example@example.com, Pwd: password</i></p> 
                        </div>  
                    </div>
                </div>
                <h3 style={styles.title}>Individual Projects</h3>
                <div style={styles.cards}>
                    <div style={styles.card}>
                    <a href='https://lychee-pudding-75464.herokuapp.com/' target='_blank'>
                        <img src={img1b} alt="car dealership" width='100%'/>
                        </a>
                        <div style={styles.container}>
                            <h4><b>Car Dealership Website - April 2019</b></h4> 
                            <p>HTML, CSS, Node, Express, Heroku</p> 
                        </div> 
                    </div>
                    <div style={styles.card}>
                    <a href='https://shielded-thicket-55175.herokuapp.com/' target='_blank'>
                        <img src={img2b} alt="news scraper" width='100%'/>
                        </a>
                        <div style={styles.container}>
                            <h4><b>News Scraper App - April 2019</b></h4> 
                            <p>HTML, CSS, Node, Express, Axios, jQuery, Heroku</p> 
                        </div>  
                    </div>
                    <div style={styles.card}>
                    <a href='https://calm-bastion-82404.herokuapp.com/' target='_blank'>
                        <img src={img3b} alt="timesheet" width='100%'/>
                        </a>
                        <div style={styles.container}>
                            <h4><b>Employee Timesheet App - April 2019</b></h4> 
                            <p>HTML, Bootstrap, Node, Express, jQuery, AJAX, MongoDB, Heroku</p> 
                        </div>
                        
                    </div>
                </div>
            </div>
        )}
}

export default Body;