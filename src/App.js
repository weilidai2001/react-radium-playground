import React, {Component} from 'react';
import PropertyThumbnail from './property-thumbnail';
import PropertiesContainer from './properties-container';

export default class App extends Component {
  render() {
    return (
      <PropertiesContainer>
        <PropertyThumbnail/>
        <PropertyThumbnail/>
        <PropertyThumbnail/>
        <PropertyThumbnail/>
        <PropertyThumbnail/>
        <PropertyThumbnail/>
      </PropertiesContainer>
    );
  }
}
