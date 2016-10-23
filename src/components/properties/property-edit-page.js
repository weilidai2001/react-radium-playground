import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as propertyActions from '../../actions/property-actions';
import TextInput from '../common/text-input';
import toastr from 'toastr';

class PropertyEditPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      property: Object.assign({}, props.property),
      errors: {},
      saving: false
    };

    this.updatePropertyState = this.updatePropertyState.bind(this);
    this.saveProperty = this.saveProperty.bind(this);
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

  saveProperty(event) {
    event.preventDefault();

    this.props.actions.saveProperties(this.state.property)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Property saved');
    this.context.router.push('/operations/properties');
  }

  render() {
    return (
      <div>
        <TextInput name="id" label="Id" value={this.state.property.id} onChange={this.updatePropertyState} error={this.state.errors.id}/>
        <TextInput name="price" label="Price" value={this.state.property.price} onChange={this.updatePropertyState} error={this.state.errors.title}/>
        <TextInput name="propertyType" label="Property type" value={this.state.property.propertyType} onChange={this.updatePropertyState} error={this.state.errors.propertyType}/>
        <input type="submit" disabled={this.state.saving} value={this.state.saving ? 'Saving...' : 'Save'} className="btn btn-primary" onClick={this.saveProperty}/>
      </div>
    );
  }
}

PropertyEditPage.contextTypes = {
  router: React.PropTypes.object
};

function getPropertyById(properties, id) {
  const property = properties.filter(course => course.id == id);
  if (property.length) return property[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.params.id;

  const property = id && state.properties.length > 0 ? getPropertyById(state.properties, id) : {};

  return {property};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(propertyActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyEditPage);