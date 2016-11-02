import React, {PropTypes} from 'react';
import $ from 'jquery';

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

    const that = this;

    // START A LOADING SPINNER HERE

    // Create a formdata object and add the files
    var data = new FormData();
    $.each(this.state.files, function(key, value)
    {
      data.append(key, value);
    });

    $.ajax({
      url: '/assets',
      type: 'POST',
      data: data,
      cache: false,
      processData: false, // Don't process the files
      contentType: false, // Set content type to false as jQuery will tell the server its a query string request
      success: function(data, textStatus, jqXHR)
      {
        that.props.onUploadSuccess(data.url);
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        // Handle errors here
        console.log('ERRORS: ' + textStatus);
        // STOP LOADING SPINNER
      }
    });


  }

  render () {
    return (
      <div className="ops-property-details__image-editor-upload">
        <input className="ops-property-details__image-editor-upload-filename" type="file" onChange={this.onFileChanged} name="image-upload" />
        <input className="ops-property-details__image-editor-upload-submit" type="submit" onClick={this.onClicked} value="Upload Image" name="submit" />
      </div>
    );
  }
};

export default ImageUpload;