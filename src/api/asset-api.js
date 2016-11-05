import $ from 'jquery';

class AssetApi {
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

export default AssetApi;