import React, {PropTypes} from 'react';

const ImageUpload = ({onUploadFileChanged, onSubmitClicked}) => {
  return (
    <div className="image-editor-upload">
      <input className="image-editor-upload__filename" type="file" onChange={onUploadFileChanged} name="image-upload"/>
      <input className="image-editor-upload__submit" type="submit" onClick={onSubmitClicked} value="Upload Image"
             name="submit"/>
    </div>
  );
};

export default ImageUpload;