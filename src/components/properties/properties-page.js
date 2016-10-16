import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import PropertiesContainer from './properties-container';

class PropertiesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {properties} = this.props;

    return (
      <PropertiesContainer properties={properties}/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    properties: state.properties
  };
}


export default connect(mapStateToProps)(PropertiesPage);