import { Component, ViewChild } from '@angular/core';
import { AgmMap, MapsAPILoader } from '@agm/core';
declare var google: any;

@Component({
  selector: 'app-map-dashboard',
  templateUrl: './map-dashboard.component.html',
  styleUrls: ['./map-dashboard.component.scss']
})
export class MapDashboardComponent {

  public location: any = {
    lat: 49.63842,
    lng: 15.2925372,
    zoom: 6,
    color:'#333'
  };

  @ViewChild(AgmMap) map: AgmMap;
  _map: any;
  done: boolean = false;
  afterViewinit: boolean = false;
  styles: any;
  previous: any;
  detailsShown:any
  constructor(public mapsApiLoader: MapsAPILoader) {

  }

  ngOnInit() {
  }

  testSameLocation() {

  }

  ngOnChanges() {
    if (this.map != undefined) this.initMapBoundaries2();
  }

  onClickedOutside($event: any) {
    this.detailsShown = [];
    /* if (this.previous) {
      this.previous.close();
  }*/
  }

  showStopInfo($event: any, marker: any) {
    let oldStatus =
      this.detailsShown[marker.lat + '-' + marker.lng + '-' + marker.type];
    this.detailsShown = [];
    this.detailsShown[marker.lat + '-' + marker.lng + '-' + marker.type] = true;
    if (oldStatus) {
      this.detailsShown[marker.lat + '-' + marker.lng + '-' + marker.type] =
        false;
    }
  }

  clickedMarker(infowindow: any) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }


  initMapBoundaries() {
    this.map.mapReady.subscribe((map) => {
      this._map = map;
      setTimeout(() => {
        let bounds = new google.maps.LatLngBounds();
        bounds.extend(new google.maps.LatLng(this.location.lat, this.location.lng));
        map.fitBounds(bounds);
      }, 2000);
    });
  }

  initMapBoundaries2() {
    setTimeout(() => {
      let bounds = new google.maps.LatLngBounds();
      bounds.extend(new google.maps.LatLng(this.location.lat, this.location.lng));
      this._map.fitBounds(bounds);
    }, 2000);
  }

  ngAfterViewInit() {
    this.initMapBoundaries();
  }
}
