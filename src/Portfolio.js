import React from 'react';
import img1a from './images/restaurant.png';
import img2a from './images/bookmark.png';
import img1b from './images/dealership.png';
import img2b from './images/newscraper.png';
import img3b from './images/timesheet.png';
import WOW from 'wowjs';

const styles = {
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: '1.7em'
    },
    title2: {
        textAlign: 'center',
        color: 'white',
        fontSize: '1.4em'
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
      link: {
        // background: '#224B89',
        border: '1px solid darkblue',
        padding: '3px 30px',
        margin: '0 30px',
        textDecoration: "none",
        color: 'blue',
        fontWeight: 'bold'
    }
}
class Body extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div style={styles.background}>
                <h1 id="portfolio" className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" ref="a" style={styles.title}>Portfolio</h1>
                <h3 className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title2}>Class Projects</h3>
                <div style={styles.cards2}>
                    <div className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.card}>
                    
                        <img src={img1a} alt="restaurant finder" width='100%'/>
                        
                        <div style={styles.container}>
                            <h4><b>Restaurant Finder - May 2018</b></h4> 
                            <p>HTML, CSS, JavaScript</p>
                            <p>My role: JavaScript code</p>
                            <br/>
                            <a style={styles.link} href='https://danielb3.github.io/project-0/' target='_blank'>Site</a>
                            
                            <a style={styles.link} href='https://github.com/danielb3/project-0' target='_blank'>Code</a>
                            <br/><br/><br/>
                        </div> 
                    </div>
                    <div className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.card}>
                    
                        <img src={img2a} alt="bookmarking site" width='100%'/>
                        
                        <div style={styles.container}>
                            <h4><b>Bookmarking Site - July 2018</b></h4>
                            <p>HTML, CSS, jQuery, Node, Express, Passport, Heroku</p>
                            <p>My role: Front-end design</p>
                            <p><i>Email: example@example.com, Pwd: password</i></p>
                            <br/>
                            <a style={styles.link} href='https://salty-brook-20670.herokuapp.com/' target='_blank'>Site</a>
                            
                            <a style={styles.link} href='https://github.com/danielb3/site-seeing' target='_blank'>Code</a>
                            <br/><br/><br/>
                        </div>  
                    </div>
                </div>
                <h3 className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title2}>Personal Projects</h3>
                <div style={styles.cards}>
                    <div className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.card}>
                    
                        <img src={img1b} alt="car dealership" width='100%'/>
                        
                        <div style={styles.container}>
                            <h4><b>Car Dealership Website - April 2019</b></h4> 
                            <p>HTML, CSS, Node, Express, Heroku</p>
                            <br/>
                            <a style={styles.link} href='https://lychee-pudding-75464.herokuapp.com/' target='_blank'>Site</a>
                            
                            <a style={styles.link} href='https://github.com/danielb3/carDealer-nodejs' target='_blank'>Code</a>
                            <br/><br/><br/>
                        </div> 
                    </div>
                    <div className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.card}>
                    
                        <img src={img2b} alt="news scraper" width='100%'/>
                        
                        <div style={styles.container}>
                            <h4><b>News Scraper App - April 2019</b></h4> 
                            <p>HTML, CSS, Node, Express, Axios, jQuery, Heroku</p>
                            <br/>
                            <a style={styles.link} href='https://shielded-thicket-55175.herokuapp.com/' target='_blank'>Site</a>
                            
                            <a style={styles.link} href='https://github.com/danielb3/newsScraper-nodejs' target='_blank'>Code</a>
                            <br/><br/><br/>
                        </div>  
                    </div>
                    <div className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.card}>
                    
                        <img src={img3b} alt="timesheet" width='100%'/>
                        
                        <div style={styles.container}>
                            <h4><b>Employee Timesheet App - April 2019</b></h4> 
                            <p>HTML, Bootstrap, Node, Express, jQuery, AJAX, MongoDB, Heroku</p>
                            <br/>
                            <a style={styles.link} href='https://calm-bastion-82404.herokuapp.com/' target='_blank'>Site</a>
                            
                            <a style={styles.link} href='https://github.com/danielb3/timesheet-nodejs' target='_blank'>Code</a>
                            <br/><br/><br/>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        )}
}

export default Body;