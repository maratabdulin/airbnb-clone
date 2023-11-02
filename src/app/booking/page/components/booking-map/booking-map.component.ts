import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { MapMarkerConfig } from "@app/maps/common";
import { BookingService } from "@app/booking/service";
import { BookingVariant } from "@app/booking/common";

@Component({
  selector: "app-booking-map",
  templateUrl: "booking-map.component.html",
  styleUrls: ["booking-map.component.scss"],
})
export class BookingMapComponent implements OnInit {
  options: google.maps.MapOptions = {
    center: {
      lat: 41.97941407579939,
      lng: 2.8211744335499565,
    },
    zoom: 14,
  };

  mapMarkers$!: Observable<MapMarkerConfig[]>;
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    icon: "/",
  };

  constructor(private readonly bookingService: BookingService) {}

  ngOnInit(): void {
    this.mapMarkers$ = this.bookingService.mapMarkers$;
  }

  onMapMarkerClicked(markerConfig: MapMarkerConfig<BookingVariant>): void {
    this.bookingService.setBookingVariant(markerConfig.data);
  }

  onMapInfoWindowClosed(): void {
    this.bookingService.clearBookingVariant();
  }
}
