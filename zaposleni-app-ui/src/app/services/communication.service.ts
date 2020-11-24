import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

    private filterData$ = new Subject<string>();
    private sortData$ = new Subject<string>();

    getFilter() {
        return this.filterData$;
    }
    updateFilter(updatedFilter: string) {
        this.filterData$.next(updatedFilter);
    }

    getSort() {
        return this.sortData$;
    }
    updateSort(newSort: string) {
        this.sortData$.next(newSort);
    }

    constructor() { }
}
