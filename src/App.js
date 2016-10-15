import React, {Component} from 'react';
import PropertyThumbnail from './property-thumbnail';
import PropertiesContainer from './properties-container';

require('../sass/main.scss');

const content = {
  property: {
    price: "£2,950,000"
  }
};

export default class App extends Component {
  render() {
    return (
      <PropertiesContainer>
        <PropertyThumbnail property={content.property}/>
        <PropertyThumbnail property={content.property}/>
        <PropertyThumbnail property={content.property}/>
        <PropertyThumbnail property={content.property}/>
        <PropertyThumbnail property={content.property}/>
        <PropertyThumbnail property={content.property}/>
      </PropertiesContainer>
    );
  }
}
