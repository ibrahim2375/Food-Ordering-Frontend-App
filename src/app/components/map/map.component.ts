import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LatLng, LatLngExpression, LatLngTuple, LeafletMouseEvent, Map, Marker, map, marker, tileLayer } from 'leaflet';
import { LocationService } from 'src/app/services/location.service';
//icons
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { Order } from 'src/app/shared/models/Order';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  //icon
  faLocationArrow = faLocationArrow;
  //default location on map
  private readonly DEFAULT_LATLNG: LatLngTuple = [13.75, 21.62];
  // ref for map
  @ViewChild('map',{static: true}) elementRef!:ElementRef;
  map!:Map;
  @Input() order!:Order;
  currentMarker!:Marker;
  constructor(private locationService:LocationService) { }

  ngOnInit(): void {
    this.initializeMap();
  }
  initializeMap(){
    if(this.map) return;

    this.map = map(this.elementRef.nativeElement, {
      attributionControl: false
    }).setView(this.DEFAULT_LATLNG, 3);

    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
    //get location when click on map
    this.map.on('click', (e:LeafletMouseEvent) => {
      this.setMarker(e.latlng);
    })

  }
  //get current location
    findMyLocation(){
    this.locationService.getCurrentLocation().subscribe({
      next: (latlng) => {
        this.map.setView(latlng, 16)
        this.setMarker(latlng)
        this.setMarker(latlng)
      }
    })
  }
  //set mark on map
    setMarker(latlng:LatLngExpression){
      //to set address location to order data
    this.addressLatLng = latlng as LatLng;
    //check location on map using marker 
    if(this.currentMarker)
    {
      this.currentMarker.setLatLng(latlng);
      return;
    }

    this.currentMarker = marker(latlng, {
      draggable: true,
    }).addTo(this.map);
    //when drag end of mark get lcation and set it to order address data
    this.currentMarker.on('dragend', () => {
      this.addressLatLng = this.currentMarker.getLatLng();
    })
  }
  //set  to order the addres location
  set addressLatLng(latlng: LatLng){
    if(!latlng.lat.toFixed) return;

    latlng.lat = parseFloat(latlng.lat.toFixed(8));
    latlng.lng = parseFloat(latlng.lng.toFixed(8));
    this.order.addressLatLng = latlng;
    console.log(this.order.addressLatLng);
  }

}
