import { Component, OnInit } from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-map-content-component',
  templateUrl: './map-content-component.component.html',
  styleUrls: ['./map-content-component.component.css']
})
export class MapContentComponentComponent implements OnInit {

  constructor(public mapApiWrapper: GoogleMapsAPIWrapper) { }

  ngOnInit() {
    this.mapApiWrapper.getNativeMap()
      .then((map) => {
        
        // I have been manually updating core/services/google-maps-types.d.ts to include things they didn't include.
        console.log(map.getZoom());
        map.setOptions({mapTypeId : 'roadmap'});
        let myCoordinates = [
          new google.maps.LatLng(33.427704,7.735117),
          new google.maps.LatLng(33.464372,7.855966),
          new google.maps.LatLng(33.606315,8.070200),
          new google.maps.LatLng(33.716046,8.224008),
          new google.maps.LatLng(33.816509,8.394296),
          new google.maps.LatLng(33.862136,8.438242),
          new google.maps.LatLng(34.026189,8.625009),
          new google.maps.LatLng(34.062602,8.635995),
          new google.maps.LatLng(34.062602,8.355844),
          new google.maps.LatLng(34.117193,8.328378),
          new google.maps.LatLng(34.167203,8.322885),
          new google.maps.LatLng(34.203556,8.163583),
          new google.maps.LatLng(34.321593,8.048227),
          new google.maps.LatLng(34.406809,8.092741),
          new google.maps.LatLng(34.420404,8.076261),
          new google.maps.LatLng(34.547187,8.153165)
          ];
          var polyOptions = {
          path: myCoordinates,
          strokeColor: "#000000",
          strokeOpacity: 1,
          strokeWeight: 3
          }
          var it = new google.maps.Polyline(polyOptions);
         // it.setMap(map);
        let position = new google.maps.LatLng(45.521, -122.677);
               let cityCircle = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map: map,
          center: position,
          radius: 10000
        });
        
        
       
        let ctaLayer2 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Bizerte.kml',
          map: map
        });
        let ctaLayer3 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Beja.kml',
          map: map
        });
        let ctaLayer4 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/BenArous.kml',
          map: map
        });
        let ctaLayer5 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Gab%C3%A9s.kml',
          map: map
        });
        let ctaLayer6 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Gafsa.kml',
          map: map
        });
        let ctaLayer7 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/jendouba.kml',
          map: map
        });
        let ctaLayer8 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Kairouan.kml',
          map: map
        });
        let ctaLayer9 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Kasserine.kml',
          map: map
        });
        let ctaLayer10 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/kef.kml',
          map: map
        });
        let ctaLayer11= new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Mahdia.kml',
          map: map
        });
        let ctaLayer12 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/M%C3%A9denine.kml',
          map: map
        });
        let ctaLayer13 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Monastir.kml',
          map: map
        });
        let ctaLayer14 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Nabeul.kml',
          map: map
        });
        let ctaLayer15 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Sfax.kml',
          map: map
        });
        let ctaLayer16 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/SidiBouzid.kml',
          map: map
        });
        let ctaLayer17 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Siliana.kml',
          map: map
        });
        let ctaLayer18 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Sousse.kml',
          map: map
        });
        let ctaLayer19 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Tébourba.kml',
          map: map
        });
        let ctaLayer20 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Tozeur.kml',
          map: map
        });
        let ctaLayer21 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Tunis.kml',
          map: map
        });
        let ctaLayer22 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/Zaghouan.kml',
          map: map
        });
        let ctaLayer23 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/K%C3%A9bili.kml',
          map: map
        });
        let ctaLayer24 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/az.kml',
          map: map
        });
        let ctaLayer1 = new google.maps.KmlLayer({
          url: 'https://sites.google.com/site/roguistorage/kmlkml/tunisie.kml',
          map: map
        });
        map.addListener('click', function(e) {
         alert(e.latLng.lat());
        });
        


      });
  }

}
