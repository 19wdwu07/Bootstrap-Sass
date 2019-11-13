console.log('Bootstrap custom theme');

//accessiing apiKey from config.json
var myKey = JSON.parse(apiKey); //convert JSON data into js object
 console.log (myKey[0].key);



$('#map').hide();
$('#home').show();

$(document).ready(function(){
  // $('#heading').click(function(){
  //   $(this).hide();
  // });
  $('#mapBtn').click(function(){
    $('#home').hide();
    $('#map').show();
    // initMap();
  });
  $('#homeBtn').click(function(){
    $('#map').hide();
    $('#home').show();
  });



});
//dynamically creating the script element and
//giving src attribute the google plugin with key from external json file
var script = document.createElement('script');
script.src='https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key + '&callback=initMap';
document.getElementsByTagName('body')[0].appendChild(script); //appending to the body of index.html
// var map;
function initMap() {

  // The location of Uluru
var wellington = {lat:-41.2865, lng: 174.7762};
var christchurch ={lat:-43.5321  ,lng: 172.6362 };
var auckland = {lat:-36.8485  ,lng: 174.7633};
var napier = {lat:-39.4928 ,lng: 176.9120};


  // The map, centered at Uluru
  //Never call the map object inside the loop
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 6, center: wellington});


  // The marker, positioned at Uluru
  // var marker1 = new google.maps.Marker({position: wellington, map: map});
  var marker2 = new google.maps.Marker({position: christchurch, map: map});
  var marker3 = new google.maps.Marker({position: auckland, map: map});
  var marker4 = new google.maps.Marker({position: napier, map: map});

  var contentString1 = '<div id="content" class="bg-success text-primary">'+
          '<h1 id="firstHeading" class="firstHeading">Wellington</h1>'+
        '<div id="bodyContent">'+
        '<h3><b>Wellington i-SITE Visitor Information Centre</h3>'+
        '<h6>111 Wakefield Street</br>Te Aro 6011</br>Wellington</br>New Zealand</br>'+
        'Phone: +64 4 8024860</br>Email: bookings@wellingtonnz.com</br></h6>'+
        '<h3>Opening hours </h3>'+
        '<h6>Monday to Friday: 8.30am - 5pm</br>Saturday and Sunday: 9am - 5pm</b></h6>'+
        '</div>'+
        '</div>';

  var contentString2 = '<div id="content" class="bg-success text-primary">'+
          '<h1 id="firstHeading" class="firstHeading">Christchurch</h1>'+
        '<div id="bodyContent">'+
        '<h3><b>Christchurch i-SITE Visitor Information Centre</h3>'+
        '<h6>28 Worcester Blvd</br>Christchurch Central City</br>Christchurch 8011</br>New Zealand</br>'+
        'Phone:_64 3-379 9629</br>Email:  info@christchurchnz.com</br></h6>'+
        '<h3>Opening hours </h3>'+
        '<h6>Monday to Friday: 9.00am - 5.00pm</br>Saturday : 9am - 5pm</b>Sunday Closed</h6>'+
        '</div>'+
        '</div>';

    var infowindow1 = new google.maps.InfoWindow({
      content: contentString1
    });
    var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
    });
    var marker1 = new google.maps.Marker({
      position: wellington,
      map: map,
      title: 'Wellington'
    });
    marker1.addListener('click', function() {
      infowindow1.open(map, marker1);
    });
    var marker2 = new google.maps.Marker({
      position: christchurch,
      map: map,
      title: 'Christchurch'
    });
    marker2.addListener('click', function() {
      infowindow2.open(map, marker2);
    });





}
