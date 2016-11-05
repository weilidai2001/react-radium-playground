import React, {PropTypes} from 'react';

const ImagePreview = ({imageSrc}) => {
  return (
    <div className="image-preview btn-toolbar panel panel-default col-md-4" style={{padding: "5px"}}>
      <div className="image-preview__container thumbnail">
        <img className="image-preview__image" src={imageSrc} />
      </div>
      <div className="image-preview__button btn btn-warning">Delete</div>
    </div>
  );
};

export default ImagePreview;