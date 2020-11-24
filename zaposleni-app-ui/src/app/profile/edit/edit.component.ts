import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { EmployeeService } from 'src/app/services/employee.service';
import { IEmployee } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    faExclamationCircle = faExclamationCircle;

    ImgSrcLarge: string = './assets/default_avatar.png';
    ImgSrcLargeCopy: string = './assets/default_avatar.png';
    ImgSrcAdd: string = './assets/add-image.png';

    id: number;
    employee: IEmployee;
    errorMsg: string = "";

    constructor(private location: Location,
                private route: ActivatedRoute,
                private employeeService: EmployeeService) { }

    ngOnInit(): void {
        this.id = +this.route.snapshot.paramMap.get('id');

        this.employeeService.getEmployee(this.id).subscribe(
            (res: IEmployee) => this.employee = res,
            (error) => this.errorMsg = error);
    }

    cancelEdit(): void {
        this.location.back();
    }

    saveEdit() {
        this.employeeService.updateEmployee(this.employee).subscribe(
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
