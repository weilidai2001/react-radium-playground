import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/common/navbar';

const propertyDetailsUrl = id => `/pages/cn/property-details.html?id=${id}`;

const ResidentialProperty = ({property}) => {
    return (
      <a href={propertyDetailsUrl(property.id)} className="investment__property">
        <div className="investment__property-title">{property.price}</div>
        <div className="investment__property-thumbnail" style={{backgroundImage: 'url(' + property.thumbnail + ')'}}></div>
        <div className="investment__property-subtitle">{property.shortDescription}</div>
        <div className="investment__property-subtitle">{property.location}</div>
        <div className="investment__property-body">
          <div className="investment__property-description">
            <ul>
              {(property.attributes || []).map((attribute, index) => <li key={index}>{attribute}</li>)}
            </ul>
          </div>
          <div className="investment__property-stats">
            <div className="investment__property-stats-item"><span><img src="/img/properties/icon-bedroom.png" alt=""/></span><span className="bedrooms">{property.bedrooms}</span></div>
            <div className="investment__property-stats-item"><span><img src="/img/properties/icon-bathroom.png" alt=""/></span><span className="bathrooms">{property.bathrooms}</span></div>
            <div className="investment__property-stats-item"><span><img src="/img/properties/icon-living-room.png" alt=""/></span><span className="livingrooms">{property.livingrooms}</span></div>
          </div>
        </div>
      </a>
    );
};

const FullWidthProperty = ({property}) => {
    return (
      <div className="investment__property">
        <div className="investment__property-title">{property.title}</div>
        <div className="investment__property-thumbnail" style={{backgroundImage: 'url(' + property.thumbnail + ')'}}></div>
        <div className="investment__property-body">
          <div className="investment__property-description investment__property-description--full-width">
            <ul>
              {(property.attributes || []).map((attribute, index) => <li key={index}>{attribute}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
};

class Investment extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {residential, commercial, hotels } = this.props;

    return (
      <div className="investment">
        <nav>
          <Navbar/>
        </nav>
        <div className="investment__container">
          <div id="residential" className="investment__title-large">住房投资</div>
          <div className="investment__properties">{residential.map(property => <ResidentialProperty key={property.id} property={property}/>)}</div>
          <div id="businesses" className="investment__title-large">商业投资</div>
          <div className="investment__intro">提供适合投资者需求的投资，收购，并购等项目或与英方合作项目，对卖方公司财务及相关背景调查及评估</div>
          <div className="investment__properties">{commercial.map(property => <FullWidthProperty key={property.id} property={property}/>)}</div>
          <div id="hotels" className="investment__title-large">酒店投资</div>
          <div className="investment__properties">{hotels.map(property => <FullWidthProperty key={property.id} property={property}/>)}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    residential: state.properties.filter(property => property.propertyType == 'residential'),
    commercial: state.properties.filter(property => property.propertyType == 'business'),
    hotels: state.properties.filter(property => property.propertyType == 'hotel')
  };
}


export default connect(mapStateToProps)(Investment);