import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEmployee } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    ImgSrcSmall: string = './assets/default_avatar_45.png';
    private _sort: string;
    
    @Input() employees: IEmployee[];
    
    @Input()
    get sort() {
        return this._sort;
    }
    set sort(newSort: string) {
        this._sort = newSort;
        this.changedSort.emit(this.sort);
    } 

    @Output() changedSort: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

}
