/* Вспомогательные функции конвертации ед. измерения */

export const measureTransform = {
  "getDistanceLatLonInKm":
    function distance(lat1, lon1, lat2, lon2) {
      var R = 6371; // km
      var dLat = (lat2-lat1)*Math.PI/180;
      var dLon = (lon2-lon1)*Math.PI/180;
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
      var c = 2 * Math.asin(Math.sqrt(a));
      var d = R * c;
      return parseInt(d*1000);
    },
  "deg2rad": function deg2rad(deg) {
    return deg * (Math.PI / 180);
  },
  "miles2km": function miles2km(mil) {
    return mil * 1.852;
  },
  "feet2meters": function feet2meters(feet) {
    return feet * 0.3048;
  }
};

/* Сортировка */

export const dynamicSort = function (property) {
  var sortOrder = 1;
  if(property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a,b) {
    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result * sortOrder;
  }
};