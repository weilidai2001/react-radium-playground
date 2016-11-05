import delay from './delay';

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

}

export default PropertyApi;