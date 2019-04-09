import React from 'react';

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
    // background: {
    //     // background: '#224B89',
    //     backgroundImage: 'linear-gradient(#224B89, #1373B8)',
    //     color: 'white',
    //     padding: '10px'
    // }
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
                        <td>HTML</td>
                        <td>Node</td>
                        <td>MongoDB</td>
                        <td>AWS Elastic Beanstalk</td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td></td>
                        <td>MySQL</td>
                        <td>Heroku</td>
                    </tr>
                    <tr>
                        <td>JavaScript</td>
                        
                        
                        
                    </tr>
                    <tr>
                        <td>jQuery</td>
                        
                    </tr>
                    <tr>
                        <td>React</td>
                        
                    </tr>
                </table>
            </div>
        )}
}

export default Body;