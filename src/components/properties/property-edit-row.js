import React, {Component} from 'react';
import Radium, {Style} from 'radium';
import {Link} from 'react-router';

const PropertyThumbnail = ({key, property}) => {
  return (
      <tr key={key}>
        <td>{property.id}</td>
        <td>{property.order}</td>
        <td>{property.shortDescription}</td>
        <td>{property.price}</td>
        <td><Link to={'/operations/properties/' + property.id}>Edit</Link></td>
      </tr>
  );
};

export default Radium(PropertyThumbnail);