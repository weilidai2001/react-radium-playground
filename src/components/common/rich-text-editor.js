import React, {PropTypes} from 'react';
import ReactQuill from 'react-quill';

const RichTextEditor = ({value, onChange}) => {
  return (
    <div className="rich-text-editor">
      <ReactQuill className="rich-text-editor__textbox" value={value} theme="snow" onChange={onChange}/>
    </div>
  );
};

export default RichTextEditor;