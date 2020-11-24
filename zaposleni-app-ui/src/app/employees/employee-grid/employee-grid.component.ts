import { Component, OnInit, Input } from '@angular/core';
import { IEmployee } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.css']
})
export class EmployeeGridComponent implements OnInit {
    
    // https://eu.ui-avatars.com/api/?background=C62828&rounded=true&color=fff&name=O&size=135
    ImgSrc: string = './assets/default_avatar.png';
    @Input() employees: IEmployee[];

    constructor() { }

    ngOnInit(): void {
    }

}
