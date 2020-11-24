import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    filter: string;
    ImgLogo: string = './assets/SRC_logo_small.png';

    faSearch = faSearch;
    faAngleDown = faAngleDown;

    constructor(private commsService: CommunicationService) { }

    onActivate(event): void {
        window.scroll(0,0);
    }

    onSearchChange(searchValue: string): void {
        this.commsService.updateFilter(searchValue);
    }

    onSortChange(sortValue: string): void {
        let translatedVal: string;
        switch(sortValue) {
            case 'Sort':
                break;
            case 'Name':
                translatedVal = 'name';
                break;
            case 'Age':
                translatedVal = 'age';
                break;
            case 'Position':
                translatedVal = 'position';
                break;
            case 'Employment':
                translatedVal = 'employment_date';
                break;
            case 'Salary':
                translatedVal = 'salary';
                break;
            default:
                translatedVal = 'employee_name';
                break;
        }
        this.commsService.updateSort(translatedVal);
    }

}
