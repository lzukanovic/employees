import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { faEnvelope, faPhoneAlt, faCalendarAlt, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/services/employee.service';
import { IEmployee } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, AfterViewInit  {
    
    // Google Map variables
    @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
    map: google.maps.Map;
    lat = 46.040061;
    lng = 14.472599;
    coordinates = new google.maps.LatLng(this.lat, this.lng);
    mapOptions: google.maps.MapOptions = {
        center: this.coordinates,
        zoom: 18,
    };
    marker;

    // FontAwesome variables
    faEnvelope = faEnvelope;
    faPhoneAlt = faPhoneAlt;
    faCalendarAlt = faCalendarAlt;
    faExclamationCircle = faExclamationCircle;

    // Employee variables
    id: number;
    employee: IEmployee;

    ImgSrcLarge: string = './assets/default_avatar.png';
    ImgSrcSmall: string = './assets/default_avatar_45.png';

    errorMsg: string = "";

    constructor(private route: ActivatedRoute,
                private employeeService: EmployeeService,
                private location: Location) { }

    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id');
        
        this.employeeService.getEmployee(this.id).subscribe(
            (res: IEmployee) => this.employee = res,
            (error) => this.errorMsg = error);
    }

    ngAfterViewInit() {
        this.mapInitializer();
    }

    mapInitializer() {
        this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
        this.marker = new google.maps.Marker({
            position: this.coordinates,
            map: this.map,
        });
        this.marker.setMap(this.map);
    }

    deleteEmployee() {
        this.employeeService.deleteEmployee(this.employee.id).subscribe(
            () => this.location.back(),
            (error) => this.errorMsg = error);
    }
}
