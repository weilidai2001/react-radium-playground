import React, {Component} from 'react';
import Radium from 'radium';
import PropertyThumbnail from './property-thumbnail';

const content = {
  property: {
    price: "£2,950,000"
  }
};

class PropertiesContainer extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <PropertyThumbnail property={content.property}/>
        <PropertyThumbnail property={content.property}/>
        <PropertyThumbnail property={content.property}/>
        <PropertyThumbnail property={content.property}/>
        <PropertyThumbnail property={content.property}/>
        <PropertyThumbnail property={content.property}/>
        <PropertyThumbnail property={content.property}/>
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