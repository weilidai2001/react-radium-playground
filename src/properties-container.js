import React, {Component} from 'react';
import Radium from 'radium';


class PropertiesContainer extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px"
  }
};


module.exports = Radium(PropertiesContainer);