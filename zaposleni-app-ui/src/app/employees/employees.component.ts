import { Component, OnInit, Input } from '@angular/core';

import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../shared/interfaces';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { CommunicationService } from '../services/communication.service';
import { SortingService } from '../services/sorting.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    faBars = faBars;
    faThLarge = faThLarge;
    faExclamationCircle = faExclamationCircle;

    employees: IEmployee[] = [];
    filteredEmployees: IEmployee[] = [];
    filteredOriginal: IEmployee[] = [];
    listView: boolean = true;
    errorMsg: string = "";
    private _filter: string;
    private _sort: string;

    @Input()
    get filter(): string {
        return this._filter;
    }
    set filter(value: string) {
        this.filterChange(value);
        this._filter = value;
    }

    @Input()
    get sort(): string {
        return this._sort;
    }
    set sort(value: string) {
        this.sortChange(value);
        this._sort = value;
    }

    constructor(private employeeService: EmployeeService,
                private commsService: CommunicationService,
                private sortingService: SortingService) { }

    ngOnInit(): void {
        this.employeeService.getEmployees().subscribe(
            (res: IEmployee[]) => this.filteredEmployees = this.employees = res,
            (error) => this.errorMsg = error);

        this.commsService.getFilter().subscribe(filter => this.filter = filter);
        this.commsService.getSort().subscribe(sort => this.sort = sort);
    }

    switchView() {
        this.listView ? this.listView = false : this.listView = true;
    }

    filterChange(filterValue: string) {
        if (filterValue) {
            this.filteredEmployees = this.employees.filter((employee: IEmployee) => {
                return employee.name.toLowerCase().indexOf(filterValue.toLowerCase()) > -1 ||
                        employee.address_street.toLowerCase().indexOf(filterValue.toLowerCase()) > -1 ||
                        employee.address_city.toLowerCase().indexOf(filterValue.toLowerCase()) > -1 ||
                        employee.position.toLowerCase().indexOf(filterValue.toLowerCase()) > -1 ||
                        employee.age.toString().indexOf(filterValue) > -1;
            });
        } else {
            this.filteredEmployees = this.employees;
        }
    }

    sortChange(propertyName: string) {
        if (propertyName) {
            this.sortingService.sort(this.filteredEmployees, propertyName);
        }
    }
}
