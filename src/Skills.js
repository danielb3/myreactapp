import React from 'react';
import htmlimg from './images/html5_logo.png';
import cssimg from './images/css3_logo.png';
import herokuimg from './images/heroku_logo.png';
import jqueryimg from './images/jquery_logo.png';
import jsimg from './images/js_logo.png';
import mongoimg from './images/mongodb_logo.png';
import mysqlimg from './images/mysql_logo.png';
import nodeimg from './images/node_logo.png';
import reactimg from './images/react_logo.png';
import awsimg from './images/aws_logo.png';
import css from './App';
import WOW from 'wowjs';

const styles = {
    title: {
        textAlign: "center",
        color: 'white',
        fontSize: '1.7em'
    },
    table: {
        width: '100%',
        textAlign: 'center',
        tableLayout: 'fixed',
        color: 'white',
    },
}
class Body extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div style={styles.background}>
                <h1 id="skills" className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" style={styles.title}>Skills</h1>
                <br/>
                <table style={styles.table}>
                    <tr>
                        <th className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" >Front-End</th>
                        <th className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" >Back-End</th>
                        <th className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" >Database</th>
                        <th className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" >Server</th>
                    </tr>
                    <tr>
                        <td>&nbsp; </td>
                        <td>&nbsp; </td>
                        <td>&nbsp; </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" ><img src={htmlimg} className="App-logo" alt="cover" height="100px" /></td>
                        <td className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" ><img src={nodeimg} className="App-logo" alt="cover" height="100px" /></td>
                        <td className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" ><img src={mongoimg} className="App-logo" alt="cover" height="100px" /></td>
                        <td className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" ><img src={herokuimg} className="App-logo" alt="cover" height="100px" /></td>
                        
                    </tr>
                    <tr>
                        <td className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" ><img src={cssimg} className="App-logo" alt="cover" height="100px" /></td>
                        <td></td>
                        {/* <td><img src={mysqlimg} className="App-logo" alt="cover" height="100px" /></td> */}
                        {/* <td><img src={awsimg} className="App-logo" alt="cover" height="100px" /></td> */}
                    </tr>
                    <tr>
                        <td className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" ><img src={jsimg} className="App-logo" alt="cover" height="100px" /></td>
                    </tr>
                    <tr>
                        <td className="wow fadeIn" data-wow-duration="3s" data-wow-delay=".5s" data-wow-offset="20" ><img src={reactimg} className="App-logo" alt="cover" height="100px" /></td>
                        
                    </tr>
                </table>
            </div>
        )}
}

export default Body;