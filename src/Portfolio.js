import React from 'react';

const styles = {
    title: {
        textAlign: "center"
    }
}
class Body extends React.Component {
    render() {
        return (
            <div>
                <h1 id="portfolio" style={styles.title}>Portfolio</h1>
            </div>
        )}
}

export default Body;