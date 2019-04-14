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

const styles = {
    title: {
        textAlign: "center",
        color: 'white'
    },
    table: {
        width: '100%',
        textAlign: 'center',
        tableLayout: 'fixed',
        color: 'white',
    },
}
class Body extends React.Component {
    render() {
        return (
            <div style={styles.background}>
                <h1 id="skills" style={styles.title}>Skills</h1>
                <table style={styles.table}>
                    <tr>
                        <th>Front-End</th>
                        <th>Back-End</th>
                        <th>Database</th>
                        <th>Server</th>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td><img src={htmlimg} className="App-logo" alt="cover" height="100px" /></td>
                        <td><img src={nodeimg} className="App-logo" alt="cover" height="100px" /></td>
                        <td><img src={mongoimg} className="App-logo" alt="cover" height="100px" /></td>
                        <td><img src={awsimg} className="App-logo" alt="cover" height="100px" /></td>
                    </tr>
                    <tr>
                        <td><img src={cssimg} className="App-logo" alt="cover" height="100px" /></td>
                        <td></td>
                        <td><img src={mysqlimg} className="App-logo" alt="cover" height="100px" /></td>
                        <td><img src={herokuimg} className="App-logo" alt="cover" height="100px" /></td>
                    </tr>
                    <tr>
                        <td><img src={jsimg} className="App-logo" alt="cover" height="100px" /></td>
                        
                        
                        
                    </tr>
                    <tr>
                        <td><img src={reactimg} className="App-logo" alt="cover" height="100px" /></td>
                        
                    </tr>
                    <tr>
                        <td><img src={jqueryimg} className="App-logo" alt="cover" height="50px" /></td>
                        
                    </tr>
                </table>
            </div>
        )}
}

export default Body;