import delay from './delay';
import $ from 'jquery';

class PropertyApi {
  static getAllProperties() {
    return fetch('/properties').then(response => response.json());
  }

  static saveProperty(property) {
    if (property.id) {
      const request = new Request(`/properties/${property.id}`, {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(property)
      });

      return fetch(request).then(() => Object.assign({}, property));
    } else {
      const request = new Request('/properties', {
        method: 'post',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(property)
      });

      return fetch(request).then(() => Object.assign({}, property));
    }
  }

  static deleteProperty(propertyId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfPropertyToDelete = properties.findIndex(course => course.courseId == propertyId);
        properties.splice(indexOfPropertyToDelete, 1);
        resolve();
      }, delay);
    });
  }

  static uploadAsset(asset) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/assets',
        type: 'POST',
        data: asset,
        cache: false,
        processData: false, // Don't process the files
        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
        success: function(data, textStatus, jqXHR)
        {
          resolve(data.url);
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
          reject(textStatus);
        }
      });
    });
  }
}

export default PropertyApi;