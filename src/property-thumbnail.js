import React, {Component} from 'react';
import Radium from 'radium';

class PropertyThumbnail extends React.Component {
  render() {
    return html;
  }
}

const styles = {
  root: {
    maxWidth: "400px",
    display: "block"
  },
  heading: {
    backgroundColor: "#E3393E",
    color: "white",
    fontSize: "15px",
    padding: "5px 0 5px 0",
    marginBottom: 0,
    textAlign: "left",
    paddingLeft: "10px"
  },
  thumbnailImage: {
    backgroundImage: "url('https://liuinternational.s3.amazonaws.com/asset/1469384696834.jpg')",
    width: "100%",
    paddingBottom: "70%",
    backgroundSize: "cover",
    backgroundPosition: "center"
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
    width: "66.6%",
    marginLeft: "15px"
  },
  attributes: {
    width: "33.3%"
  },
  ul: {
    listStyle: "disc",
    marginLeft: "10px"
  }
};

const html = <a href="/pages/cn/property-details.html?id=1469384194691" style={styles.root}>
  <div style={styles.heading}>£2,950,000</div>
  <div style={styles.thumbnailImage}></div>
  <div style={styles.subHeading}>伦敦西北市郊独栋豪华花园洋房在售</div>
  <div style={styles.thumbnailBody}>
    <div style={styles.description}>
      <ul style={styles.ul}>
        <li>6间客厅、4间带独立卫浴的睡房、2间衣帽间</li>
        <li>含家庭影院、健身房、花园 等设施</li>
        <li>洋房花园总占地面积：2.46英亩/近1千平方米</li>
        <li>永久产权</li>
      </ul>
    </div>
    <div style={styles.attributes}>
      <div>
        <span><img src="/img/properties/icon-bedroom.png" alt=""/></span>
        <span>4</span></div>
      <div>
        <span><img src="/img/properties/icon-bathroom.png" alt=""/></span>
        <span>4</span></div>
      <div>
        <span><img src="/img/properties/icon-living-room.png" alt=""/></span>
        <span>6</span></div>
    </div>
  </div>
</a>;

module.exports = Radium(PropertyThumbnail);