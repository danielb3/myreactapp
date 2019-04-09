import React from 'react';
import img1 from './dealership.png'
import img2 from './newscraper.png'
import img3 from './timesheet.png'

const styles = {
    title: {
        textAlign: "center",
        color: 'white'
    },
    cards: {
        margin: '0 auto',
        width: '100%'
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
    render() {
        return (
            <div style={styles.background}>
                <h1 id="portfolio" style={styles.title}>Portfolio</h1>
                <div style={styles.cards}>
                    <div style={styles.card}>
                    <a href='https://lychee-pudding-75464.herokuapp.com/' target='_blank'>
                        <img src={img1} alt="car dealership" width='100%'/>
                        </a>
                        <div style={styles.container}>
                            <h4><b>Car Dealership Website</b></h4> 
                            <p>HTML, CSS, Node, Express, Heroku</p> 
                        </div>
                        
                    </div>
                    <div style={styles.card}>
                    <a href='https://shielded-thicket-55175.herokuapp.com/' target='_blank'>
                        <img src={img2} alt="news scraper" width='100%'/>
                        </a>
                        <div style={styles.container}>
                            <h4><b>News Scraper App</b></h4> 
                            <p>HTML, CSS, Node, Express, Axios, jQuery, Heroku</p> 
                        </div>
                        
                    </div>
                    <div style={styles.card}>
                    <a href='https://calm-bastion-82404.herokuapp.com/' target='_blank'>
                        <img src={img3} alt="timesheet" width='100%'/>
                        </a>
                        <div style={styles.container}>
                            <h4><b>Employee Timesheet App</b></h4> 
                            <p>HTML, Bootstrap, Node, Express, jQuery, AJAX, MongoDB, Heroku</p> 
                        </div>
                        
                    </div>
                </div>
            </div>
        )}
}

export default Body;