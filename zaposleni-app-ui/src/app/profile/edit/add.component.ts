import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/services/employee.service';
import { IEmployee } from 'src/app/shared/interfaces';

@Component({
    selector: 'app-add',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class AddComponent implements OnInit {

    faExclamationCircle = faExclamationCircle;

    ImgSrcLargeCopy: string = './assets/default_avatar.png';
    ImgSrcLarge: string = './assets/default_avatar.png';
    ImgSrcAdd: string = './assets/add-image.png';

    errorMsg: string = "";
    employee: IEmployee = {
        id: null,
        name: "",
        email: "",
        mobile_number: "",
        address_street: "",
        address_city: "",
        birthday: null,
        age: null,
        position: "",
        employment_date: null,
        salary: null,
        superior_name: "",
        superior_position: ""
    };

    constructor(private location: Location, private employeeService: EmployeeService) { }

    ngOnInit(): void { }

    cancelEdit(): void {
        this.location.back();
    }

    saveEdit() {
        this.employeeService.createEmployee(this.employee).subscribe(
            () => this.cancelEdit(),
            (error) => this.errorMsg = error);
    }

    imageHover() {
        this.ImgSrcLarge = this.ImgSrcAdd;
    }

    imageUnhover() {
        this.ImgSrcLarge = this.ImgSrcLargeCopy;
    }

    onFileSelected(event) {
        console.log(event.target.files);
        // this.employee.image = event.target.files;
    }
}