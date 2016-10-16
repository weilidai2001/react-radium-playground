import React, {Component} from 'react';
import Radium from 'radium';
import PropertyThumbnail from './property-thumbnail';


const PropertiesContainer = ({properties}) => {
  return (
    <div style={styles.root}>
      {
        properties.map(property =>
          <PropertyThumbnail key={property.id} property={property}/>
        )
      }
    </div>
  );
};

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px"
  }
};


module.exports = Radium(PropertiesContainer);