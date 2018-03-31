import { Component, OnInit } from '@angular/core';
import { MapTypeStyle } from '@agm/core';
import { } from '@types/googlemaps';
import { google } from '@agm/core/services/google-maps-types';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  lat: any = 36.1;
  lng: any = 9.0;
  zoom: any = 7;
  control: any;
  map: google.maps.Map;

 // public src = 'https://sites.google.com/site/roguistorage/kmlkml/cta.kml';
  
 customStylsze = [
  {
   featureType: 'all', 
   elementType: 'geometry.fill', 
   stylers: [ 
     { visibility: 'off' }, 
     { color: '#000000' }
     ]
     },
  { 
   featureType: 'landscape.natural.terrain', 
   elementType: 'geometry.stroke', 
   stylers: [ 
     { visibility: 'on' }, 
     { color: '#FFFFFF' }, 
     { weight: 1 } 
   ] 
  },
  {
   featureType: 'landscape.natural.terrain', 
   elementType: 'geometry.fill', 
   stylers: [ 
     { visibility: 'on' }, 
     { color: '#FFFFFF' }
     ]
     },
  {
    featureType: 'landscape.natural.terrain', 
    stylers: [ 
      { visibility: 'on' },
      ]
      },
{
   featureType: 'water', 
   elementType: 'geometry.fill', 
   stylers: [ 
     { visibility: 'on' }, 
     { color: '#365F91' }
     ]
     },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      { visibility: 'on' }
    ]
  }, {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      { visibility: 'on' }
    ]
  }, {
  featureType: 'poi',
  elementType: 'geometry',
  stylers: [
    { visibility: 'off' }
  ]
}, { 
  elementType: 'labels.icon', 
  stylers: [ 
    { visibility: 'on' } 
  ] },
  { 
  elementType: 'labels.text.stroke', 
  stylers: [ 
    { visibility: 'on' } 
  ] },
  { 
  elementType: 'labels.text.fill', 
  stylers: [ 
    { visibility: 'on' } 
  ] }

];




private setCurrentPosition() {


   if ('geolocation' in navigator) {

    navigator.geolocation.getCurrentPosition((position) => {

      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      // this.places.push( {lat:this.lat , lng:  this.lng ,per:{personne:{cin:{value:''},nompersonne:{value:''}}}})

     // this.zoom = 7;


    });
   }

}
constructor() {
  // this.getAllDisponibilite();
 

  }
ngOnInit() {

  // this.setCurrentPosition();

}
}
