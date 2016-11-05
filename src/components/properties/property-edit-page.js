import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import $ from 'jquery';
import toastr from 'toastr';

import * as propertyActions from '../../actions/property-actions';
import TextInput from '../common/text-input';
import ImagePreview from '../common/image-preview';
import ImageUpload from '../common/image-upload';
import LoadingDots from '../common/loading-dots';

class PropertyEditPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      property: Object.assign({}, props.property),
      thumbnailFiles: {},
      errors: {},
      uploading: false,
      saving: false
    };

    this.updatePropertyState = this.updatePropertyState.bind(this);
    this.saveProperty = this.saveProperty.bind(this);
    this.onThumbnailFileChanged = this.onThumbnailFileChanged.bind(this);
    this.onThumbnailSubmitClicked = this.onThumbnailSubmitClicked.bind(this);
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

  onThumbnailFileChanged(event) {
    this.setState({thumbnailFiles: event.target.files});
  }

  onThumbnailSubmitClicked(event) {
    event.stopPropagation(); // Stop stuff happening
    event.preventDefault(); // Totally stop stuff happening

    this.setState({uploading: true});

    var data = new FormData();
    $.each(this.state.thumbnailFiles, function (key, value) {
      data.append(key, value);
    });

    this.props.actions.uploadThumbnail(data, this.state.property)
      .then(() => {
        toastr.success('Upload successful');
        this.setState({uploading: false});
      })
      .catch(error => {
        toastr.error(error);
        this.setState({uploading: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Property saved');
    this.context.router.push('/operations/properties');
  }

  render() {
    return (
      <div className="container" style={{padding: "10px"}}>
        <TextInput name="id" label="Id" value={this.state.property.id} onChange={this.updatePropertyState}
                   error={this.state.errors.id}/>
        <TextInput name="price" label="Price" value={this.state.property.price} onChange={this.updatePropertyState}
                   error={this.state.errors.title}/>
        <TextInput name="propertyType" label="Property type" value={this.state.property.propertyType}
                   onChange={this.updatePropertyState} error={this.state.errors.propertyType}/>

        <div className="panel panel-default" >
          <div className="panel-heading">Thumbnail</div>
          <div className="panel-body">
            <div className="col-md-12">
              <ImagePreview imageSrc={this.props.property.thumbnail} />
            </div>
            <div className="col-md-12">
              {this.state.uploading && <LoadingDots interval={100} dots={20}/>}
              <ImageUpload onUploadFileChanged={this.onThumbnailFileChanged} onSubmitClicked={this.onThumbnailSubmitClicked}/>
            </div>
          </div>
        </div>

        <div className="row">
          <input type="submit" disabled={this.state.saving} value={this.state.saving ? 'Saving...' : 'Save'} className="btn btn-primary col-md-2" onClick={this.saveProperty}/>
        </div>
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