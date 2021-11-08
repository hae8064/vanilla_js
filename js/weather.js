function onGeoOk(position){
    const let = position.coords.latitude;
    const lng = position.coords.longitude;
function onGeoError(){}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);