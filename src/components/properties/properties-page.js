import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import PropertiesContainer from './properties-container';

class PropertiesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {residential, commercial, hotels } = this.props;

    return (
      <div>
        <PropertiesContainer properties={residential}/>
        <PropertiesContainer properties={commercial}/>
        <PropertiesContainer properties={hotels}/>
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


export default connect(mapStateToProps)(PropertiesPage);