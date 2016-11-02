import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as propertyActions from '../../actions/property-actions';
import $ from 'jquery';
import toastr from 'toastr';

class ImageUpload extends React.Component {
  constructor () {
    super();
    this.state = {};
    this.onFileChanged = this.onFileChanged.bind(this);
    this.onClicked = this.onClicked.bind(this);
  }

  onFileChanged (event) {
    this.state.files = event.target.files;
  }

  onClicked (event) {
    event.stopPropagation(); // Stop stuff happening
    event.preventDefault(); // Totally stop stuff happening

    var data = new FormData();
    $.each(this.state.files, function(key, value)
    {
      data.append(key, value);
    });

    this.props.actions.uploadAsset(data)
      .then(() => toastr.success('Upload successful'))
      .catch(error => toastr.error(error));
  }

  render () {
    return (
      <div className="image-editor-upload">
        <input className="image-editor-upload__filename" type="file" onChange={this.onFileChanged} name="image-upload" />
        <input className="image-editor-upload__submit" type="submit" onClick={this.onClicked} value="Upload Image" name="submit" />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(propertyActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ImageUpload);