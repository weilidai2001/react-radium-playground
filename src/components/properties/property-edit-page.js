import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import TextInput from '../common/text-input';

class PropertyEditPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      property: Object.assign({}, props.property),
      errors: {},
      saving: false
    };

    this.updatePropertyState = this.updatePropertyState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.property.id != nextProps.property.id) {
      // Necessary to populate form when existing property is loaded directly.
      this.setState({property: Object.assign({}, nextProps.property)});
    }
  }

  updatePropertyState(event) {
    const field = event.target.name;
    let property = this.state.property;
    property[field] = event.target.value;
    return this.setState({property});
  }

  render() {
    return (
      <div>
        <TextInput name="id" label="Id" value={this.state.property.id} onChange={this.updatePropertyState} error={this.state.errors.id}/>
        <TextInput name="price" label="Price" value={this.state.property.price} onChange={this.updatePropertyState} error={this.state.errors.title}/>
        <TextInput name="propertyType" label="Property type" value={this.state.property.propertyType} onChange={this.updatePropertyState} error={this.state.errors.propertyType}/>
      </div>
    );
  }
}

function getPropertyById(properties, id) {
  const property = properties.filter(course => course.id == id);
  if (property.length) return property[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.params.id;

  let property = {};

  if (id && state.properties.length > 0) {
    property = getPropertyById(state.properties, id);
  }

  return {
    property
  };
}


export default connect(mapStateToProps)(PropertyEditPage);