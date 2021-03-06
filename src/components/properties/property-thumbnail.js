import React, {Component} from 'react';
import Radium, {Style} from 'radium';
import {Link} from 'react-router';

const styles = {
  root: {
    width: "calc(32% - 10px)",
    display: "block",
    margin: "10px"
  },
  heading: {
    backgroundColor: "#E3393E",
    color: "white",
    fontSize: "15px",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginBottom: 0,
    textAlign: "left"
  },
  thumbnailImage(imageUrl){
    return {
      backgroundImage: `url('${imageUrl}')`,
      width: "100%",
      paddingBottom: "70%",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  },
  subHeading: {
    color: "blue",
    marginBottom: "10px",
    fontStyle: "italic"
  },
  thumbnailBody: {
    display: "flex"
  },
  description: {
    width: "66.6%"
  },
  attributes: {
    width: "33.3%",
    img: {
      width: "40px",
      height: "40px"
    }
  },
  ul: {
    listStyle: "disc"
  }
};

const PropertyThumbnail = ({property}) => {
  return (
    <div style={styles.root}>
      <div style={styles.heading}>{ property.price }</div>
      <div style={styles.thumbnailImage(property.thumbnail)}></div>
      <div style={styles.subHeading}>{ property.shortDescription }</div>
      <Link to={'/operations/properties/' + property.id}>Edit</Link>
      <div style={styles.thumbnailBody}>
        <div style={styles.description}>
          <ul style={styles.ul}>
            {
              property.attributes.map((attribute, index) => <li key={index}>{attribute}</li>)
            }
          </ul>
        </div>
        <div style={styles.attributes}>
          <div>
            <span><img style={styles.attributes.img} src="http://liuinternational.com/img/properties/icon-bedroom.png"/></span>
            <span>{property.bedrooms}</span></div>
          <div>
            <span><img style={styles.attributes.img}
                       src="http://liuinternational.com/img/properties/icon-bathroom.png"/></span>
            <span>{property.bathrooms}</span></div>
          <div>
            <span><img style={styles.attributes.img}
                       src="http://liuinternational.com/img/properties/icon-living-room.png"/></span>
            <span>{property.livingrooms}</span></div>
        </div>
      </div>
    </div>
  );
};

export default Radium(PropertyThumbnail);