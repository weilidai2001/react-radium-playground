import React, {Component} from 'react';
import Radium from 'radium';
import PropertyEditRow from './property-edit-row';


const PropertiesContainer = ({properties}) => {
  return (
    <table style={styles.root} className="table table-striped">
      <thead>
      <tr>
        <th>Id</th>
        <th>Order</th>
        <th>Short description</th>
        <th>Price</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {
        properties.map(property =>
          <PropertyEditRow key={property.id} property={property}/>
        )
      }
      </tbody>
    </table>
  );
};

const styles = {
  root: {
    maxWidth: "1200px",
    margin: "0 auto"
  }
};


module.exports = Radium(PropertiesContainer);