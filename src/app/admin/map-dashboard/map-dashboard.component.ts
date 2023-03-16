import { Component, ViewChild } from '@angular/core';
import { AgmMap, MapsAPILoader } from '@agm/core';
import { ProvinceService } from 'src/app/core/services/province.service';
declare var google: any;

@Component({
  selector: 'app-map-dashboard',
  templateUrl: './map-dashboard.component.html',
  styleUrls: ['./map-dashboard.component.scss']
})
export class MapDashboardComponent {

  public location: any = {};

  @ViewChild(AgmMap) map: AgmMap;
  _map: any;
  done: boolean = false;
  afterViewinit: boolean = false;
  styles: any;
  previous: any;
  detailsShown: any
  provinces: any
  activeProvince: any
  captains: any = []
  constructor(public mapsApiLoader: MapsAPILoader, private provinceService: ProvinceService) {

  }

  ngOnInit() {
    this.getProvinces()
  }

  testSameLocation() {

  }

  ngOnChanges() {
    if (this.map != undefined) this.initMapBoundaries2();
  }

  onClickedOutside($event: any) {
    this.detailsShown = [];
    if (this.previous) {
      this.previous.close();
    }
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
        this.captains.forEach((item: any) => {
          bounds.extend(new google.maps.LatLng(item.vehicle.currentLocation.latitude, item.vehicle.currentLocation.longitude));
        });
        map.fitBounds(bounds);
        //map.setZoom(14);
      }, 2000);
    });
  }

  initMapBoundaries2() {
    setTimeout(() => {
      let bounds = new google.maps.LatLngBounds();
      bounds.extend(new google.maps.LatLng(this.location.lat, this.location.lng));
      this.captains.forEach((item: any) => {
        bounds.extend(new google.maps.LatLng(item.vehicle.currentLocation.latitude, item.vehicle.currentLocation.longitude));
      });

      this._map.fitBounds(bounds);
      //this._map.setZoom(14);
    }, 2000);
  }

  ngAfterViewInit() {
    this.initMapBoundaries();
  }

  getProvinces() {
    this.provinceService.getProvinceList().subscribe((res: any) => {
      this.provinces = res["items"];
      if (this.provinces[0]) {
        this.location = {
          lat: this.provinces[0].point.latitude,
          lng: this.provinces[0].point.longitude,
          color: '#333'
        };
        this.activeProvince = this.provinces[0].id
        this.getCaptainsByProvinceId(this.provinces[0].id);
      }
    }, err => { })
  }

  handleProvinceChange(i: any) {
    this.location = {
      lat: this.provinces[i].point.latitude,
      lng: this.provinces[i].point.longitude,
      color: '#333'
    };
    this.activeProvince = this.provinces[i].id
    this.getCaptainsByProvinceId(this.provinces[i].id);
  }

  getCaptainsByProvinceId(id: any) {
    this.provinceService.getCaptainByProvinceId(id).subscribe((res: any) => {
      this.captains = res['items']
      this.initMapBoundaries2()
    }, err => { })
  }
}
